var mongoose = require('mongoose');

var OntwikkelingsdoelSchema = new mongoose.Schema({
    nr: Number,
    beschrijving: String
});
mongoose.model('ontwikkelingsdoel', OntwikkelingsdoelSchema);