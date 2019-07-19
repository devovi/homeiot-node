sensorcontrolRouter = function(app){

  const colors = require('colors');

  //**************************** Collections ****************************
  // Inserts given collection data
  app.route('/sensorcontrol/create')
  .post(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const createsensorcontrolController=require('../../sensorcontrol/controller/create_sensorcontrol_contr.js');
    createsensorcontrolController.create_sensorcontrol_contr_fn(req, res);
  });

  // Updates collections deleted data by given ID
  app.route('/sensorcontrol/delete')
  .delete(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const deletesensorcontrolController=require('../../sensorcontrol/controller/delete_sensorcontrol_contr.js');
    deletesensorcontrolController.delete_sensorcontrol_contr_fn(req, res);
  });

  // Updates collections data by given ID
  app.route('/sensorcontrol/update')
  .patch(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const updatesensorcontrolController=require('../../sensorcontrol/controller/update_sensorcontrol_contr.js');
    updatesensorcontrolController.update_sensorcontrol_contr_fn(req, res);
  });

  // Fetches all data of collections
  app.route('/sensorcontrol/findall')
  .get(function(req, res){
    console.log("in router");
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));
    const findAllsensorcontrolController=require('../../sensorcontrol/controller/findall_sensorcontrol_contr.js');
    findAllsensorcontrolController.findall_sensorcontrol_contr_fn(req, res);
  });


  // Fetches data from collections by given ID
  app.route('/sensorcontrol/findbyid')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const findByIDsensorcontrolController=require('../../sensorcontrol/controller/findbyid_sensorcontrol_contr.js');
    findByIDsensorcontrolController.findbyid_sensorcontrol_contr_fn(req, res);
  });



///////////////////////////////////////////////////////////
}

module.exports = sensorcontrolRouter;
