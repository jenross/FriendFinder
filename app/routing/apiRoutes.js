// ===============================================================================
// LOAD DATA

const friendData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Request

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  // API POST Request

  app.post("/api/friends", function(req, res) {
    // if (tableData.length < 5) {
      friendData.push(req.body);
      res.json(true);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });

//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     friendData.length = 0;

//     res.json({ ok: true });
//   });
// };
}