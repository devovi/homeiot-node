
exports.delete_building_contr_fn = function(req, res){

  const deletebuildingdao = require('../dao/delete_building_dao.js');

  deletebuildingdao.delete_building_dao_fn(req.query, function(result){
    res.send(result);
  })
};
