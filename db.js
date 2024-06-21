const mongoose=require('mongoose');
// define the mongodb connection url
const mongoURL='mongodb://localhost:27017/hotelsDB';

//Set up mongoDB Connection
mongoose.connect(mongoURL);

const db=mongoose.connection;

// Define event listeners for database connection
db.on('connected',()=>{
    console.log('Connected to the MongoDB Server');
});

db.on('error',(err)=>{
    console.log('MongoDB connection error: ',err);
});

db.on('disconnected',()=>{
    console.log('MongoDB Disconnected');
});


module.exports=db;


 


