var mongoose = require('mongoose');

var LocatieSchema = new mongoose.Schema({
    naam: String,
    afbeeldingen: [{type: mongoose.Schema.Types.ObjectId, ref: 'afbeelding'}]
});

mongoose.model('locatie', LocatieSchema);