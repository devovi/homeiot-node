
// const modelbuilding =
exports.findall_provisioning_dao_fn = function(req, result){

   var resultData;
   var resultData1;
   var resultData2;
   var finaldata;
    var floorSchema=require('../../floor/model/floor_model.js')
  var currentdate=Date();
  const colors = require('colors');

   require('../../building/model/building_model.js')
  .model('building' ,floorSchema )


   .paginate( req.deleted ? {deleted: req.deleted } : {},
          { page: (parseInt(req.page) || 1), limit: (parseInt(req.limit) || 10000)
         },
          function(err, data) {

    if(!err){

      resultData = {
        "building" : data["docs"],
        "total" : data["total"],
        "limit" : data["limit"],
        "page" : data["page"],
        "pages" : data["pages"]
      }
      // result(resultData);
    }
    else {
      console.error(colors.red(err));

    }
  });

  require('../../floor/model/floor_model.js')
 .model('floor')


  .paginate( req.deleted ? {deleted: req.deleted } : {},
         { page: (parseInt(req.page) || 1), limit: (parseInt(req.limit) || 10000) }, function(err, data) {

   if(!err){

     resultData1 = {
       "floor" : data["docs"],
       "total" : data["total"],
       "limit" : data["limit"],
       "page" : data["page"],
       "pages" : data["pages"]
     }
  // result({finaldata:resultData,resultData1});
   }
   else {
     console.error(colors.red(err));

   }
 });


   require('../../unit/model/unit_model.js')
  .model('unit')


   .paginate( req.deleted ? {deleted: req.deleted } : {},
          { page: (parseInt(req.page) || 1), limit: (parseInt(req.limit) || 10000) }, function(err, data) {

    if(!err){

      resultData2 = {
        "unit" : data["docs"],
        "total" : data["total"],
        "limit" : data["limit"],
        "page" : data["page"],
        "pages" : data["pages"]
      }
   result({finaldata:[resultData,resultData1,resultData2]});
    }
    else {
      console.error(colors.red(err));

    }
  });

 // result({finaldata:resultData,resultData1});
}
