
exports.findbyid_sensorcontrol_contr_fn = function(req, res){


  const findbyidsensorcontrolDao = require('../dao/findbyid_sensorcontrol_dao.js');
  findbyidsensorcontrolDao.findbyid_sensorcontrol_dao_fn(req.query, function(result){
    res.send(result);
  })
};
