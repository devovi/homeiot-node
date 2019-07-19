
exports.update_unit_contr_fn = function(req, res){

  const updateunitdao = require('../dao/update_unit_dao.js');
  updateunitdao.update_unit_dao_fn(req.body, function(result){
    res.send(result);
  })
};
