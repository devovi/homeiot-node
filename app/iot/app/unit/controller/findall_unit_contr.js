
exports.findall_unit_contr_fn = function(req, res){

  const findAllunit_dao = require('../dao/findall_unit_dao.js');
  findAllunit_dao.findall_unit_dao_fn(req.query, function(result){
    res.send(result);
  })
};
