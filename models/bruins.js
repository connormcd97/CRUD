
const mongoose = require('mongoose');

const bruinsSchema = new mongoose.Schema({
  name: {type: String, required: true},
  goals: {type: Number, required: true},
  assists: {type: Number, required: true},
  img:{type:String}
});


module.exports = mongoose.model('bruins', bruinsSchema);
