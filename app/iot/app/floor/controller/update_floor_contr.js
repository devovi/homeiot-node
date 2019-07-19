
exports.update_floor_contr_fn = function(req, res){

  const updatefloordao = require('../dao/update_floor_dao.js');
  updatefloordao.update_floor_dao_fn(req.body, function(result){
    res.send(result);
  })
};
