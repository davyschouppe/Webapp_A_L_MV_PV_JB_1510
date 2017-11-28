var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('express-jwt');
var _ = require('lodash');
const multer = require('multer');
const path = require('path');

var Traject = mongoose.model('traject');
var Afspraak = mongoose.model('afspraak');
var Ontwikkelingsdoel = mongoose.model('ontwikkelingsdoel');
var Locatie = mongoose.model('locatie');
var Afbeelding = mongoose.model('afbeelding');

var auth = jwt({secret: process.env.TOTALLY_NOT_A_SECRET, userProperty: 'payload'});

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
}).single('imgLocatie');

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

/*router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});*/

router.get('/trajecten/', function(req, res, next) {
    var query = Traject.find().populate({path: 'locaties', populate: { path: 'afbeeldingen' }}).populate('afspraken').populate('ontwikkelingsdoelen');

    query.exec((function(err, trajecten) {
        if (err) { return next(err); }
        res.json(trajecten);
    }));
});

router.post('/trajecten/', auth, function (req, res, next) {
    var traject = new Traject({
        naam: req.body.naam
    });
    traject.save(function(err, traject) {
        if (err){ return next(err); }
        res.json(traject);
    });
});

router.param('traject', function(req, res, next, id) {
    var query = Traject.findById(id);
    query.exec(function (err, traject){
        if (err) { return next(err); }
        if (!traject) {
            return next(new Error('not found ' + id));
        }
        req.traject = traject;
        return next();
    });
});

router.get('/trajecten/:traject', function(req, res) {
    req.traject.populate({path: 'locaties', populate: { path: 'afbeeldingen' }}).populate('afspraken').populate('ontwikkelingsdoelen', function(err, traject) {
        if (err) { return next(err); }
        res.json(traject);
    });
});

router.delete('/trajecten/:traject', auth, function(req, res) {
    req.traject.remove(function(err) {
        if (err) { return next(err); }
        res.json("traject is verwijderd");
    });
});

router.put('/trajecten/:traject', auth, function(req, res) {
    Traject.findOneAndUpdate({_id: req.body._id}, {
        $set: {
            naam: req.body.naam
        }
    }, function(err, result) {
        if (err) {return res.send(err)}
        res.json("traject is aangepast");
    });
});

router.post('/trajecten/:traject/afspraken', auth, function (req, res, next) {
    var afspraak = new Afspraak(req.body);
    req.traject.afspraken.push(afspraak);
    req.traject.save(function (err, traject) {
        if (err) return next(err);
        res.json(afspraak);
    });
});

router.post('/trajecten/:traject/ontwikkelingsdoelen', auth, function (req, res, next) {
    var ontwikkelingsdoel = new Ontwikkelingsdoel(req.body);
    req.traject.ontwikkelingsdoelen.push(ontwikkelingsdoel);
    req.traject.save(function (err, traject) {
        if (err) return next(err);
        res.json(ontwikkelingsdoel);
    });
});

router.post('/trajecten/:traject/locaties', auth, function (req, res, next) {
    var locatie = new Locatie(req.body);

    locatie.save(function (err, locatie) {
        if (err) return next(err);

        req.traject.locaties.push(locatie);
        req.traject.save(function (err, traject) {
            if (err) return next(err);
            res.json(locatie);
        });
    });
});

router.param('locatie', function(req, res, next, id) {
    var query = Locatie.findById(id);
    query.exec(function (err, locatie){
        if (err) { return next(err); }
        if (!locatie) {
            return next(new Error('not found ' + id));
        }
        req.locatie = locatie;
        return next();
    });
});

router.put('/trajecten/:traject/locaties/:locatie', auth, function(req, res) {
    Locatie.findOneAndUpdate({_id: req.body._id}, {
        $set: {
            naam: req.body.naam
        }
    }, function(err, result) {
        if (err) {return res.send(err)}
        res.json("locatienaam is aangepast");
    });
});

router.post('/trajecten/:traject/locaties/:locatie/afbeeldingen', auth, function (req, res, next) {
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

                    req.locatie.afbeeldingen.push(afbeelding);
                    req.locatie.save(function (err, locatie) {
                    if (err) return next(err);
                        res.json(afbeelding);
                    });
                });
            }
        }
    });
});

router.delete('/trajecten/:traject/locaties/:locatie', auth, function(req, res) {
    req.locatie.remove(function(err) {
        if (err) { return next(err); }
        res.json("locatie is verwijderd");
    });
});

router.param('afbeelding', function(req, res, next, id) {
    var query = Afbeelding.findById(id);
    query.exec(function (err, afbeelding){
        if (err) { return next(err); }
        if (!afbeelding) {
            return next(new Error('not found ' + id));
        }
        req.afbeelding = afbeelding;
        return next();
    });
});

router.delete('/trajecten/:traject/locaties/:locatie/afbeeldingen/:afbeelding', auth, function(req, res) {
    req.afbeelding.remove(function(err) {
        if (err) { return next(err); }
        res.json("afbeelding is verwijderd");
    });
});

router.param('ontwikkelingsdoel', function(req, res, next, id) {
    var query = Ontwikkelingsdoel.findById(id);
    query.exec(function (err, ontwikkelingsdoel){
        if (err) { return next(err); }
        if (!ontwikkelingsdoel) {
            return next(new Error('not found ' + id));
        }
        req.ontwikkelingsdoel = ontwikkelingsdoel;
        return next();
    });
});

router.delete('/trajecten/:traject/ontwikkelingsdoelen/:ontwikkelingsdoel', auth, function(req, res) {
    req.traject.ontwikkelingsdoelen.pull({_id : req.ontwikkelingsdoel._id});
    req.traject.save(function(err, traject) {
        if (err){ return next(err); }
        res.json("Ontwikkelingsdoel is verwijderd uit dit traject");
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

router.delete('/trajecten/:traject/afspraken/:afspraak', auth, function(req, res) {
    req.traject.afspraken.pull({_id : req.afspraak._id});
    req.traject.save(function(err, traject) {
        if (err){ return next(err); }
        res.json("Afspraak is verwijderd uit dit traject");
    });
});

module.exports = router;
