
exports.create_sensorcontrol_dao_fn = function(req, result){

  const colors = require('colors');

  require('../model/sensorcontrol_model.js').model('sensorcontrol')
  ({
    sensormasterid: req.sensormasterid,
    sensorhardwareid: req.sensorhardwareid,
    sensornodeid: req.sensornodeid,
    sensorconfiguration: req.sensorconfiguration,
    description: req.description,
    descriptionimage: req.descriptionimage,
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
