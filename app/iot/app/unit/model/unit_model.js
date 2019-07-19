const mongoose  = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const unit = mongoose.Schema({

  floorid: { type: String, required: true },
  unitname:{type:String},
  description:{ type: String},
  deleted:{type:Boolean , default:false}

},
{ timestamps:
  {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});
floor.plugin(mongoosePaginate);

module.exports = mongoose.model('unit', unit);
