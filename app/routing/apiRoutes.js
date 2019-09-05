// ===============================================================================
// LOAD DATA 

const friendData = require("../data/friends.js");

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
    
    const name = req.body.name;
    const photo = req.body.photo; 
    const newScores = req.body.scores; 
    const newEntry = {
      "name": name,
      "photo": photo,
      "scores": []
    };

    const newScoresArr = newEntry.scores;
    newScores.forEach(function(index) {
      newScoresArr.push(parseInt(newScores[index]));
    });
    console.log(newScoresArr);

    const scoreDiffArr = [];
    for (let i = 0; i < friendData.length; i++) {
      let savedScores = friendData[i].scores; 
      let difference = 0;
      for (let j = 0; j < newScoresArr.length; j++) {
        difference += Math.abs(newScoresArr[j] - savedScores[j]);
      }
      scoreDiffArr.push(difference);
    }
    console.log(scoreDiffArr);

    let closest = Math.min.apply(null, scoreDiffArr);
    let match = scoreDiffArr.indexOf(closest);
    console.log(match);

    let matchedFriend = friendData[match];
    res.json(matchedFriend);
    friendData.push(newEntry);
  });

}