
exports.delete_sensorcontrol_contr_fn = function(req, res){

  const deletesensorcontroldao = require('../dao/delete_sensorcontrol_dao.js');
  deletesensorcontroldao.delete_sensorcontrol_dao_fn(req.query, function(result){
    res.send(result);
  })
};
