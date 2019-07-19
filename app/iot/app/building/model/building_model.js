const mongoose  = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const building = mongoose.Schema({

  buildingname: { type: String, required: true },
  description:{type: String , default:""},
  address:{ type: String , default:""},
  deleted:{type:Boolean , default:false}


},
{ timestamps:
  {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});
building.plugin(mongoosePaginate);

module.exports = mongoose.model('building', building);
