
exports.create_floor_dao_fn = function(req, result){

  const colors = require('colors');

  require('../model/floor_model.js').model('floor')
  ({
    buildingid: req.buildingid,
    floorname: req.floorname,
    description: req.description,
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
