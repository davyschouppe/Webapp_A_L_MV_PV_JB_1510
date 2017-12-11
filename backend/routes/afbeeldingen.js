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

router.get('/afbeeldingen/:afbeelding', function(req, res, next) {
  res.render('index', {
    // gebruikt dit als de afbeeldingen opgeslagen worden in /public/uploads. dit maakt gebruikt van de static middleware
    //file: `/uploads/${req.afbeelding.link}`
    file: `/assets/images/${req.afbeelding.link}`
  });
});

module.exports = router;
