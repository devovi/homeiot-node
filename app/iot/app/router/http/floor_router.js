floorRouter = function(app){

  const colors = require('colors');

  //**************************** Collections ****************************
  // Inserts given collection data
  app.route('/floor/create')
  .post(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const createfloorController=require('../../floor/controller/create_floor_contr.js');
    createfloorController.create_floor_contr_fn(req, res);
  });

  // Updates collections deleted data by given ID
  app.route('/floor/delete')
  .delete(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const deletefloorController=require('../../floor/controller/delete_floor_contr.js');
    deletefloorController.delete_floor_contr_fn(req, res);
  });

  // Updates collections data by given ID
  app.route('/floor/update')
  .patch(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const updatefloorController=require('../../floor/controller/update_floor_contr.js');
    updatefloorController.update_floor_contr_fn(req, res);
  });

  // Fetches all data of collections
  app.route('/floor/findall')
  .get(function(req, res){
    console.log("in router");
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));
    const findAllfloorController=require('../../floor/controller/findall_floor_contr.js');
    findAllfloorController.findall_floor_contr_fn(req, res);
  });


  // Fetches data from collections by given ID
  app.route('/floor/findbyid')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const findByIDfloorController=require('../../floor/controller/findbyid_floor_contr.js');
    findByIDfloorController.findbyid_floor_contr_fn(req, res);
  });



///////////////////////////////////////////////////////////
}

module.exports = floorRouter;
