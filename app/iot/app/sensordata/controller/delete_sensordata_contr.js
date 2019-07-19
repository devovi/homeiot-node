
exports.delete_sensordata_contr_fn = function(req, res){

  const deletesensordatadao = require('../dao/delete_sensordata_dao.js');

  deletesensordatadao.delete_sensordata_dao_fn(req.query, function(result){
    res.send(result);

  })
};
