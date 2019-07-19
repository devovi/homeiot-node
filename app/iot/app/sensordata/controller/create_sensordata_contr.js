exports.create_sensordata_contr_fn = function(req, res){

  const createsensordatadao = require('../dao/create_sensordata_dao.js');

  createsensordatadao.create_sensordata_dao_fn(req.body, function(result){
    res.send(result);

  })
};
