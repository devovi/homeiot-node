sensorRouter = function(app){

  const colors = require('colors');

  //**************************** Collections ****************************
  // Inserts given collection data
  app.route('/sensor/create')
  .post(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const createsensorController=require('../../sensormaster/controller/create_sensor_contr.js');
    createsensorController.create_sensor_contr_fn(req, res);
  });

  // Updates collections deleted data by given ID
  app.route('/sensor/delete')
  .delete(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const deletesensorController=require('../../sensormaster/controller/delete_sensor_contr.js');
    deletesensorController.delete_sensor_contr_fn(req, res);
  });

  // Updates collections data by given ID
  app.route('/sensor/update')
  .patch(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const updatesensorController=require('../../sensormaster/controller/update_sensor_contr.js');
    updatesensorController.update_sensor_contr_fn(req, res);
  });


  // Fetches all data of collections
  app.route('/sensor/findall')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));
    const findAllsensorController=require('../../sensormaster/controller/findall_sensor_contr.js');
    findAllsensorController.findall_sensor_contr_fn(req, res);
  });


  // Fetches data from collections by given ID
  app.route('/sensor/findbyid')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const findByIDsensorController=require('../../sensormaster/controller/findbyid_sensor_contr.js');
    findByIDsensorController.findbyid_sensor_contr_fn(req, res);
  });



///////////////////////////////////////////////////////////
}

module.exports = sensorRouter;
