
exports.create_building_dao_fn = function(req, result){

  const colors = require('colors');

  require('../model/building_model.js').model('building')
  ({
    buildingname: req.buildingname,
    description: req.description,
    address: req.address,
    deleted: req.deleted



  })

  .save(function(err, data){

    if(!err){
      result(data);
    }
    else {
      console.error(colors.red(err));
      result(err);
    }
  });

}
