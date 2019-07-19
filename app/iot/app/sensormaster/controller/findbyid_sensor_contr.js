
exports.findbyid_sensor_contr_fn = function(req, res){

  const findbyidsensorDao = require('../dao/findbyid_sensor_dao.js');
  findbyidsensorDao.findbyid_sensor_dao_fn(req.query, function(result){
    res.send(result);
  })
};
