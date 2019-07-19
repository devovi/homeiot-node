exports.create_sensor_contr_fn = function(req, res){

  const createsensordao = require('../dao/create_sensor_dao.js');

  createsensordao.create_sensor_dao_fn(req.body, function(result){
    res.send(result);
  })
};
