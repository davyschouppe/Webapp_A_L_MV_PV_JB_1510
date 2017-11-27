var mongoose = require('mongoose');

var AfspraakSchema = new mongoose.Schema({
    icon: String,
    beschrijving: String
});
mongoose.model('afspraak', AfspraakSchema);