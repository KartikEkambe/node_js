const express=require('express');
const router=express.Router();
const menuItem=require('./../model/Menu');



//Get method to get the Menu data
router.get('/', async (req, res) => {
    try {
      const data = await menuItem.find();
      console.log('Data Fetched');
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  
  });


//get data according to taste
  router.get('/:taste', async (req, res) => {
    try {
      const taste=req.params.taste;
      if(taste=='sweet'||taste=='spicy'||taste=='sour'){
        const response=await menuItem.find({taste: taste});
        console.log('response fetched');
        res.status(200).json(response);
      }else{
        res.status(404).json({error:'Invalid Taste Type'});
      }

    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  
  });
  
  //Post method to add the Menu data
  router.post('/', async (req, res) => {
    try {
      const data = req.body;
      const newMenu=new menuItem(data);
      const response=await newMenu.save();
      console.log('Data saved');
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  
  });


  module.exports=router;