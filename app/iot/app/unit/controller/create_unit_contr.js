exports.create_unit_contr_fn = function(req, res){

  const createunitdao = require('../dao/create_unit_dao.js');

  createunitdao.create_unit_dao_fn(req.body, function(result){
    res.send(result);
  })
};
