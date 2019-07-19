exports.create_building_contr_fn = function(req, res){

  const createbuildingfn = require('../dao/create_building_dao.js');

  createbuildingfn.create_building_dao_fn(req.body, function(result){
    res.send(result);
  })
};
