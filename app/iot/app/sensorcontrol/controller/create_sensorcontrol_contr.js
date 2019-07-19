exports.create_sensorcontrol_contr_fn = function(req, res){

  const createsensorcontroldao = require('../dao/create_sensorcontrol_dao.js');

  createsensorcontroldao.create_sensorcontrol_dao_fn(req.body, function(result){
    res.send(result);
  })
};
