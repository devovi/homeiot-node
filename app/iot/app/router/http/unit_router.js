unitRouter = function(app){

  const colors = require('colors');

  //**************************** Collections ****************************
  // Inserts given collection data
  app.route('/unit/create')
  .post(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const createunitController=require('../../unit/controller/create_unit_contr.js');
    createunitController.create_unit_contr_fn(req, res);
  });

  // Updates collections deleted data by given ID
  app.route('/unit/delete')
  .delete(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const deleteunitController=require('../../unit/controller/delete_unit_contr.js');
    deleteunitController.delete_unit_contr_fn(req, res);
  });

  // Updates collections data by given ID
  app.route('/unit/update')
  .patch(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const updateunitController=require('../../unit/controller/update_unit_contr.js');
    updateunitController.update_unit_contr_fn(req, res);
  });

  // Fetches all data of collections
  app.route('/unit/findall')
  .get(function(req, res){
    console.log("in router");
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));
    const findAllunitController=require('../../unit/controller/findall_unit_contr.js');
    findAllunitController.findall_unit_contr_fn(req, res);
  });


  // Fetches data from collections by given ID
  app.route('/unit/findbyid')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const findByIDunitController=require('../../unit/controller/findbyid_unit_contr.js');
    findByIDunitController.findbyid_unit_contr_fn(req, res);
  });



///////////////////////////////////////////////////////////
}

module.exports = unitRouter;
