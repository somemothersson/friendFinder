//Dependecies
const express = require('express')
const router = express.Router()
const friends = require('../data/friends')

//Get and display all Friends
router.get('/', (req, res) => {
  res.json(friends)
})

//Add New Friend
router.post('/', (req, res) => {
    const newFriend = req.body
    
    friends.push(newFriend);
    res.json(friends)

});



module.exports = router