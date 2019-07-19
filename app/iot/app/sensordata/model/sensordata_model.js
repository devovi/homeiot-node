const mongoose  = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const sensordata = mongoose.Schema({

  sensorcontrolid: { type: String, required: true },
  sensordata:{type:String},

  deleted:{type:Boolean , default:false}

},
{ timestamps:
  {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});
floor.plugin(mongoosePaginate);

module.exports = mongoose.model('sensordata', sensordata);
