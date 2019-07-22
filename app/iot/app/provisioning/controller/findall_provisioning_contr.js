
exports.findall_provisioning_contr_fn = function(req, res){

  const findAllprovisioning_dao = require('../dao/findall_provisioning_dao.js');
  findAllprovisioning_dao.findall_provisioning_dao_fn(req.query, function(result){
    res.send(result);
  })
};
