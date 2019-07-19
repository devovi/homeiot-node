
exports.findbyid_sensordata_contr_fn = function(req, res){

  const findbyidsensordataDao = require('../dao/findbyid_sensordata_dao.js');
  findbyidsensordataDao.findbyid_sensordata_dao_fn(req.query, function(result){
    res.send(result);

  })
};
