
exports.findall_sensordata_contr_fn = function(req, res){

  const findAllsensordata_dao = require('../dao/findall_sensordata_dao.js');
  findAllsensordata_dao.findall_sensordata_dao_fn(req.query, function(result){
    res.send(result);

  })
};
