//Dependecies
const express = require('express')
const uuid = require('uuid')
const router = express.Router()
const friends = require('../data/friends')

router.get('/', (req, res) => {
  res.json(friends)
})


//***Get Single friend */
router.get('/:id', (req, res) => {
    const found = friends.some(friend => friend.id === parseInt(req.params.id));
    if (found) {
        res.json(friends.filter(friend => friend.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No friend with the id of ${req.params.id}`});
    }
    console.log('single mem')
    
});

router.post('/', (req, res) => {
    const newFriend = {
        id: uuid.v4(),
        name: req.body.name,
    }

    if(!newFriend.name){
        return res.status(400).json({msg: 'Please include a name'});
    } 
    friends.push(newFriend);
    res.json(friends)

});
//Update friend
router.put('/:id', (req, res) => {
    const found = friends.some(friend => friend.id === parseInt(req.params.id));
    if (found) {
        const updFriend = req.body;
        friends.forEach(friend => {
            if(friend.id === parseInt(req.params.id)) {
                friend.name = updFriend.name ? updFriend.name: friend.name;

                res.json({ msg: `friend updated:${friend.name}`})
            }
        });
    } else {
        res.status(400).json({ msg: `No friend with the id of ${req.params.id}`});
    }
    console.log('single mem')
    
});

router.delete('/:id', (req, res) => {
    const found = friends.some(friend => friend.id === parseInt(req.params.id));

    if (found) {
        res.json({
            msg: `friend ${req.params.id} Deleted`, 
            friends: friends.filter(friend => friend.id !== parseInt(req.params.id))
        });
    } else {
        res.status(400).json({ msg: `No friend with the id of ${req.params.id}`});
    }
    console.log('single mem')
    
});




module.exports = router