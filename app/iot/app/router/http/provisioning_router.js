provisioningRouter = function(app){
 const colors = require('colors');
  // Fetches all data of collections
  app.route('/provisioning/findall')
  .get(function(req, res){
    console.log("in router");
    console.log(colors.bgBlue(req.method+" "+req.route.path+" "+res.statusCode));
    const findAllprovisioningController=require('../../provisioning/controller/findall_provisioning_contr.js');
    findAllprovisioningController.findall_provisioning_contr_fn(req, res);
  });

}

module.exports = provisioningRouter;
