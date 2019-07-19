
exports.findall_sensorcontrol_contr_fn = function(req, res){


  const findAllsensorcontrol_dao = require('../dao/findall_sensorcontrol_dao.js');
  findAllsensorcontrol_dao.findall_sensorcontrol_dao_fn(req.query, function(result){
    res.send(result);
  })
};
