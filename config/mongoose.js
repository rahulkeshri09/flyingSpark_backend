const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/flyingSpark_DB');
const db=mongoose.connection;
//check error
db.on('error',console.error.bind(console,"error in connecting to db"));
//check db is connected successful or not
db.once('open',function(){
    console.log('connected to database::mongodb');
})
module.exports=db;