
exports.findall_floor_dao_fn = function(req, result){

  var currentdate=Date();
  const colors = require('colors');

   require('../model/floor_model.js')
  .model('floor')
   
   .paginate( req.deleted ? {deleted: req.deleted } : {},
          { page: (parseInt(req.page) || 1), limit: (parseInt(req.limit) || 1000000) }, function(err, data) {

    if(!err){
      var resultData;
      resultData = {
        "data" : data["docs"],
        "total" : data["total"],
        "limit" : data["limit"],
        "page" : data["page"],
        "pages" : data["pages"]
      }
      result(resultData);
    }
    else {
      console.error(colors.red(err));
      result(err);
    }
  });
}
