var mongoose = require('mongoose');

var AfbeeldingSchema = new mongoose.Schema({
    link: String
});

AfbeeldingSchema.pre('remove', function(next) {
  this.model('locatie').remove({afbeeldingen: this_.id}, next);
})

mongoose.model('afbeelding', AfbeeldingSchema);
