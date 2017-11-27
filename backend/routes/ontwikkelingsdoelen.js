var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('express-jwt');

var Ontwikkelingsdoel = mongoose.model('ontwikkelingsdoel');

var auth = jwt({secret: process.env.TOTALLY_NOT_A_SECRET, userProperty: 'payload'});

/*router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});*/

router.get('/ontwikkelingsdoelen/', function(req, res, next) {
    Ontwikkelingsdoel.find(function(err, ontwikkelingsdoelen) {
        if (err) { return next(err); }
        res.json(ontwikkelingsdoelen);
    });
});

router.post('/ontwikkelingsdoelen/', auth, function (req, res, next) {
    var ontwikkelingsdoel = new Ontwikkelingsdoel(req.body);
    ontwikkelingsdoel.save(function(err, od) {
        if (err){ return next(err); }
        res.json(od);
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

router.get('/ontwikkelingsdoelen/:ontwikkelingsdoel', function(req, res) {
    res.json(req.ontwikkelingsdoel);
});

router.delete('/ontwikkelingsdoelen/:ontwikkelingsdoel', auth, function(req, res) {
    req.ontwikkelingsdoel.remove(function(err) {
        if (err) { return next(err); }
        res.json("ontwikkelingsdoel is verwijderd");
    });
});

router.put('/ontwikkelingsdoelen/:ontwikkelingsdoel', auth, function(req, res) {
    Ontwikkelingsdoel.findOneAndUpdate({_id: req.body._id}, {
        $set: {
            nr: req.body.nr,
            beschrijving: req.body.beschrijving,
        }
    }, function(err, result) {
        if (err) {return res.send(err)}
        res.json("ontwikkelingsdoel is aangepast");
    });
});

module.exports = router;
