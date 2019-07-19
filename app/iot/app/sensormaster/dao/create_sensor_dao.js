
exports.create_sensor_dao_fn = function(req, result){

  const colors = require('colors');

  require('../model/sensor_model.js').model('sensor')
  ({
    unitid: req.unitid,
    sensornodeid: req.sensornodeid,
    image: req.image,
    description:req.description,
  



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
