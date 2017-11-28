var mongoose = require('mongoose');

var TrajectSchema = new mongoose.Schema({
    naam: String,
    afspraken: [{type: mongoose.Schema.Types.ObjectId, ref: 'afspraak'}],
    ontwikkelingsdoelen: [{type: mongoose.Schema.Types.ObjectId, ref: 'ontwikkelingsdoel'}],
    locaties: [{type: mongoose.Schema.Types.ObjectId, ref: 'locatie'}]
});
mongoose.model('traject', TrajectSchema);