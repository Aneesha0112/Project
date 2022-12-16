const express = require('express');
const   User = require('../models/note');
const Note=require('../models/user');
const router = express.Router();
router


.post('/getnote', async (req, res) => {
  try {
    let noteget = await User.getnote(req.body);
    res.send(noteget)
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})

.put('/editnote', async (req, res) => {
  try {
    let noteedit= await User.editnote(req.body);
    res.send({noteedit});
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})
.delete('/deletenote', async (req, res) => {
  try {
    User.deletenote(req.body);
    res.send({success: "We'll Miss You... :("})
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})

.post('/createnote', async (req, res) => {
  try {
    let notecreates = await User.createnote(req.body);
    console.log(notecreates)
    res.send({notecreates})
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})

module.exports=router;