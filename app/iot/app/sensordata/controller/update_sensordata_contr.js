
exports.update_sensordata_contr_fn = function(req, res){


  const updatesensordatadao = require('../dao/update_sensordata_dao.js');
  updatesensordatadao.update_sensordata_dao_fn(req.body, function(result){
    res.send(result);
  })
};
