//Dependecies
const express = require('express')
const router = express.Router()
const friends = require('../data/friends')
var path = require("path");


//Default route loads home.html
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/home.html'));
});

//Survey Route
router.get("/survey", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/survey.html'));
});

//Get and display all Friends
router.get('/api/friends', (req, res) => {
  res.json(friends)
})

//Add New Friend
router.post('/api/friends', (req, res) => {
    const newFriend = req.body
    
    friends.push(newFriend);
    res.json(friends)

});



module.exports = router