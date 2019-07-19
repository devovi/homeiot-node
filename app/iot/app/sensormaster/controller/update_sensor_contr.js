
exports.update_sensor_contr_fn = function(req, res){

  const updatesensordao = require('../dao/update_sensor_dao.js');
  updatesensordao.update_sensor_dao_fn(req.body, function(result){
    res.send(result);
  })
};
