
exports.delete_floor_contr_fn = function(req, res){

  const deletefloordao = require('../dao/delete_floor_dao.js');

  deletefloordao.delete_floor_dao_fn(req.query, function(result){
    res.send(result);
  })
};
