
exports.create_unit_dao_fn = function(req, result){

  const colors = require('colors');

  require('../model/unit_model.js').model('unit')
  ({
    floorid: req.floorid,
    unitname: req.unitname,
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
