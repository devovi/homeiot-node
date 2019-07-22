const mongoose  = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const sensordata = mongoose.Schema({

  sensorcontrolid: { type: String, default:"" },
  sensordata:[{
          temperature: String,
          led: String,
          proximity: String,
          optical: String,
  }],

  deleted:{type:Boolean , default:false}

},
{ timestamps:
  {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});
sensordata.plugin(mongoosePaginate);

module.exports = mongoose.model('sensordata', sensordata);
