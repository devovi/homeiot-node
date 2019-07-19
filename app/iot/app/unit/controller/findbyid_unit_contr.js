
exports.findbyid_unit_contr_fn = function(req, res){

  const findbyidunitDao = require('../dao/findbyid_unit_dao.js');
  findbyidunitDao.findbyid_unit_dao_fn(req.query, function(result){
    res.send(result);
  })
};
