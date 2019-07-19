
exports.findall_sensor_contr_fn = function(req, res){

  const findAllsensor_dao = require('../dao/findall_sensor_dao.js');
  findAllsensor_dao.findall_sensor_dao_fn(req.query, function(result){
    res.send(result);
  })
};
