const User=require('../models/user');

module.exports.signup=async function(req,res){
    try{
        let user=await User.findOne({email:req.body.email});
        //check user is found or not
        if(!user){
            //create user
            let userData=User.create(req.body);
            return res.json(200,{
                message:"new user created",
                email:req.body.email
            })
        }
        //return if user already exists
        return res.json(200,{
            message:"user already exists",
            email:req.body.email
        })
    }catch(err){
        return res.json(500,{
            message:"internal server error"
        });
    }
}