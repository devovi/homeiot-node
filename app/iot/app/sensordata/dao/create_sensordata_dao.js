
exports.create_sensordata_dao_fn = function(req, result){

  const colors = require('colors');

  require('../model/sensordata_model.js').model('sensordata')
  ({
    sensorcontrolid: req.sensorcontrolid,
    sensordata: req.sensordata,
  
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
