
exports.delete_unit_contr_fn = function(req, res){

  const deleteunitdao = require('../dao/delete_unit_dao.js');

  deleteunitdao.delete_unit_dao_fn(req.query, function(result){
    res.send(result);
  })
};
