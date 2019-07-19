exports.create_floor_contr_fn = function(req, res){

  const createfloordao = require('../dao/create_floor_dao.js');

  createfloordao.create_floor_dao_fn(req.body, function(result){
    res.send(result);
  })
};
