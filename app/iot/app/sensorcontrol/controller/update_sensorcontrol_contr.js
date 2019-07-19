
exports.update_sensorcontrol_contr_fn = function(req, res){


  const updatesensorcontroldao = require('../dao/update_sensorcontrol_dao.js');
  updatesensorcontroldao.update_sensorcontrol_dao_fn(req.body, function(result){
    res.send(result);
  })
};
