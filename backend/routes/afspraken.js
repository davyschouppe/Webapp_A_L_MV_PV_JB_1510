var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('express-jwt');

var Afspraak = mongoose.model('afspraak');

var auth = jwt({secret: process.env.TOTALLY_NOT_A_SECRET, userProperty: 'payload'});

/*router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});*/

router.get('/afspraken/', function(req, res, next) {
    Afspraak.find(function(err, afspraken) {
        if (err) { return next(err); }
        res.json(afspraken);
    });
});

router.post('/afspraken/', auth, function (req, res, next) {
    var afspraak = new Afspraak(req.body);
    afspraak.save(function(err, afspraak) {
        if (err){ return next(err); }
        res.json(afspraak);
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
