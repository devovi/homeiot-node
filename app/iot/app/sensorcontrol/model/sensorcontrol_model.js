
const mongoose  = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const sensorcontrol = mongoose.Schema({

  sensormasterid: { type: String, required: true },
  sensorhardwareid: { type: String, required: true },
  sensornodeid: { type: String, required: true },
  sensorconfiguration:{type:Array},
  description:{type:String , default:""},
  descriptionimage:{ type: String },
  deleted:{type:Boolean , default:false}

},
{ timestamps:
  {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});
floor.plugin(mongoosePaginate);

module.exports = mongoose.model('sensorcontrol', sensorcontrol);
