
exports.update_building_contr_fn = function(req, res){

  const updatebuildingdao = require('../dao/update_building_dao.js');
  updatebuildingdao.update_building_dao_fn(req.body, function(result){
    res.send(result);
  })
};
