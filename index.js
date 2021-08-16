const express=require('express');
const app=express();
const port=8000;
//db connection
const db=require('./config/mongoose');
const cors=require('cors');
app.use(cors());
app.use(express.urlencoded());
//use express router
app.use('/',require('./routes'));
//opening server
app.listen(port,function(err){
    if(err){
        console.log(`error:${err}`);
        return;
    }
    console.log(`server running succesfully on port ${port}`);
})