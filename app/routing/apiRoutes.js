
  // var friend = require("../data/friends.js");
  // Displays all friends

  module.exports = function (app) {
  app.get("/api/friends", function(req, res) {
    return res.json(users);
  });
  
 
  // Create New Characters - takes in JSON input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newUser = req.body;
  
    
  
    console.log(newUser);
  
    users.push(newUser);
  
    res.json(newUser);
  });
}