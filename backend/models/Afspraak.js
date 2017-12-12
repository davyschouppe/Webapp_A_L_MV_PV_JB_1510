var mongoose = require('mongoose');

var AfspraakSchema = new mongoose.Schema({
    icon: {type: mongoose.Schema.Types.ObjectId, ref: 'afbeelding'},
    beschrijving: String
});
mongoose.model('afspraak', AfspraakSchema);
