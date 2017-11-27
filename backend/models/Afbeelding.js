var mongoose = require('mongoose');

var AfbeeldingSchema = new mongoose.Schema({
    link: String
});

mongoose.model('afbeelding', AfbeeldingSchema);