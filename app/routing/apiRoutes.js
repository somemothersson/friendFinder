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

//*** EXTRA Get Data of Friend by Name*/
router.get('/:name', (req, res) => {
  const found = friends.some(friend => friend.name === parseInt(req.params.name));
  if (found) {
      res.json(friends.filter(friend => friend.name === parseInt(req.params.name)));
  } else {
      res.status(400).json({ msg: `No friend with the id of ${req.params.name}`});
  }
  console.log('single mem')
  
});


module.exports = router