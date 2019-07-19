const mongoose  = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const sensor = mongoose.Schema({

  unitid:{ type:String , required:true},
  sensornodeid:{type:String , required:true},

  image:{type:String ,},
  description:{type:String , default:""},
  deleted:{type:Boolean,default:false}


},
{ timestamps:
  {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});
devicelist.plugin(mongoosePaginate);

module.exports = mongoose.model('sensor', sensor);
