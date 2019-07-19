sensordataRouter = function(app){

  const colors = require('colors');

  //**************************** Collections ****************************
  // Inserts given collection data
  app.route('/sensordata/create')
  .post(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const createsensordataController=require('../../sensordata/controller/create_sensordata_contr.js');
    createsensordataController.create_sensordata_contr_fn(req, res);
  });

  // Updates collections deleted data by given ID
  app.route('/sensordata/delete')
  .delete(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const deletesensordataController=require('../../sensordata/controller/delete_sensordata_contr.js');
    deletesensordataController.delete_sensordata_contr_fn(req, res);
  });

  // Updates collections data by given ID
  app.route('/sensordata/update')
  .patch(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const updatesensordataController=require('../../sensordata/controller/update_sensordata_contr.js');
    updatesensordataController.update_sensordata_contr_fn(req, res);
  });

  // Fetches all data of collections
  app.route('/sensordata/findall')
  .get(function(req, res){

    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));
    const findAllsensordataController=require('../../sensordata/controller/findall_sensordata_contr.js');
    findAllsensordataController.findall_sensordata_contr_fn(req, res);
  });


  // Fetches data from collections by given ID
  app.route('/sensordata/findbyid')
  .get(function(req, res){
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));

    const findByIDsensordataController=require('../../sensordata/controller/findbyid_sensordata_contr.js');
    findByIDsensordataController.findbyid_sensordata_contr_fn(req, res);
  });



///////////////////////////////////////////////////////////
}

module.exports = sensordataRouter;
