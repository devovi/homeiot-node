const mongoose  = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const floor = mongoose.Schema({

  buildingid: {type: mongoose.Schema.Types.ObjectId, ref: 'buildings'},
  floorname:{type:String},
  description:{ type: String, default:""},
  deleted:{type:Boolean , default:false}

},
{ timestamps:
  {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});
floor.plugin(mongoosePaginate);

module.exports = mongoose.model('floor', floor);
