const express=require('express');
const router=express.Router();
const Person = require('./../model/Person');


//Get method to get the perosn data
router.get('/', async (req, res) => {
    try {
      const data = await Person.find();
      console.log('Data Fetched');
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  
  });



//post method to send person data to the databse
  router.post('/', async (req, res) => {
    try {
      const data = req.body //Assuming that the request body contains the persons data
  
      //create a new Person document using the Mongoose model
      const newPerson = new Person(data);
  
      //save the new person to the databse
      const response = await newPerson.save();
      console.log('data saved', response);
      res.status(200).json(response);
    }
    catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });




//get method for fetching data using work typeor sprecific type of data
  router.get('/:workType',async(req,res)=>{
    try{
      const workType=req.params.workType; //extract the worktype from url parameter
    if(workType=='chef'||workType=='waiter'||workType=='manager'){
       const response=await Person.find({work: workType});
       console.log('response fetched');
       res.status(200).json(response);
    }else{
      res.status(404).json({error:'Invalid Work Type'});
    }
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal server error'});
    }
  });


  //update data
  router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const updatedPersonData=req.body;

        const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true, 
            runValidators: true
        });

        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }

        console.log('Data updated');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
  })


// delete data
  router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const response=await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data deleted successfully');
        res.status(200).json({message: 'person deleted successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
  })


  module.exports=router;
