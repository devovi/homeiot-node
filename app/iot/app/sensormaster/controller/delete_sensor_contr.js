
exports.delete_sensor_contr_fn = function(req, res){

  const deletesensordao = require('../dao/delete_sensor_dao.js');

  deletesensordao.delete_sensor_dao_fn(req.query, function(result){
    res.send(result);
  })
};
