var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('express-jwt');
const multer = require('multer');
const path = require('path');

var Afspraak = mongoose.model('afspraak');
var Afbeelding = mongoose.model('afbeelding');

var auth = jwt({secret: process.env.TOTALLY_NOT_A_SECRET, userProperty: 'payload'});

/*router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});*/

// Set Storage Engine
const storage = multer.diskStorage({
  destination: './dist/assets/images/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('imgAfspraak');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

router.get('/afspraken/', function(req, res, next) {
    Afspraak.find(function(err, afspraken) {
        if (err) { return next(err); }
        res.json(afspraken);
    });
});

router.post('/afspraken/', function (req, res, next) {

  console.log(req);

    // var afspraak = new Afspraak(req.body);
    // afspraak.save(function(err, afspraak) {
    //     if (err){ return next(err); }
    //     res.json(afspraak);
    // });


  upload(req, res, function(err) {
    if(err) {
      res.json(err);
    }
    else {
      if(req.file === undefined) {
        res.json("file is undefined")
      }
      else{
        var afbeelding = new Afbeelding({link: req.file.filename});

        afbeelding.save(function (err, afbeelding) {
          if (err) return next(err);

          var afspraak = new Afspraak({beschrijving: req.body.beschrijving, icon: afbeelding });
          afspraak.save(function (err, afspraak) {
            if (err) return next(err);
            res.json(afspraak);
          });
        });
      }
    }
  });
});

router.param('afspraak', function(req, res, next, id) {
    var query = Afspraak.findById(id);
    query.exec(function (err, afspraak){
        if (err) { return next(err); }
        if (!afspraak) {
            return next(new Error('not found ' + id));
        }
        req.afspraak = afspraak;
        return next();
    });
});

router.get('/afspraken/:afspraak', function(req, res) {
    res.json(req.afspraak);
});

router.delete('/afspraken/:afspraak', auth, function(req, res) {
    req.afspraak.remove(function(err) {
        if (err) { return next(err); }
        res.json("afspraak is verwijderd");
    });
});

router.put('/afspraken/:afspraak', auth, function(req, res) {
    Afspraak.findOneAndUpdate({_id: req.body._id}, {
        $set: {
            icon: req.body.icon,
            beschrijving: req.body.beschrijving,
        }
    }, function(err, result) {
        if (err) {return res.send(err)}
        res.json("afspraak is aangepast");
    });
});

module.exports = router;
