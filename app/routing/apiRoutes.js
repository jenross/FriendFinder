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
    console.log(friendData);
  });


  // API POST Request

  app.post("/api/friends", function(req, res) {
      friendData.push(req.body);
      res.json(true);
      
      for (let i = 0; i < friendData.length; i++) {
          let scores = friendData[i].scores;
          console.log(scores);
      }

  });

//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     friendData.length = 0;

//     res.json({ ok: true });
//   });
// };
}