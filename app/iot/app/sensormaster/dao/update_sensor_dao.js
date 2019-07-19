
exports.update_sensor_dao_fn = function(req, result){

  const colors = require('colors');

  require('../model/sensor_model.js').model('sensor').findById({_id:req.id}, function (err, data) {

    if(!err){

      data.set(req);

      data.save(function (err1, data1) {

        if(!err1){
          result(data1);
        }
        else {
          console.error(colors.red(err1));
          result(err1);
        }
      });
    }
    else {
      console.error(colors.red(err));
      result(err);
    }
  });
}
