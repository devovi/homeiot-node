buildingRouter = function(app){

  const colors = require('colors');

  //**************************** Collections ****************************
  // Inserts given collection data
  app.route('/building/create')
  .post(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const createbuildingController=require('../../building/controller/create_building_contr.js');
    createbuildingController.create_building_contr_fn(req, res);
  });

  // Updates collections deleted data by given ID
  app.route('/building/delete')
  .delete(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const deletebuildingController=require('../../building/controller/delete_building_contr.js');
    deletebuildingController.delete_building_contr_fn(req, res);
  });

  // Updates collections data by given ID
  app.route('/building/update')
  .patch(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const updatebuildingController=require('../../building/controller/update_building_contr.js');
    updatebuildingController.update_building_contr_fn(req, res);
  });

  // Fetches all data of collections
  app.route('/building/findall')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));
    const findAllbuildingController=require('../../building/controller/findall_building_contr.js');
    findAllbuildingController.findall_building_contr_fn(req, res);
  });


  // Fetches data from collections by given ID
  app.route('/building/findbyid')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const findByIDbuildingController=require('../../building/controller/findbyid_building_contr.js');
    findByIDbuildingController.findbyid_building_contr_fn(req, res);
  });



///////////////////////////////////////////////////////////
}

module.exports = buildingRouter;
