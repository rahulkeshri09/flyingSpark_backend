const User=require('../models/user');
// login and send user details
module.exports.login=async function(req,res){
    try{
        let user=await User.findOne({email:req.body.email});
        //check user and verify password
        if(!user || user.password!=req.body.password){
            return res.json(200,{
                message:"inavlid user name or password",
                user:false
            })
        }
        //if user verified the return their details
        return res.json(200,{
            message:"log in successful",
            email:user.email,
            hobbies:user.hobbies,
            gender:user.gender,
            user:true
        })
    }catch(err){
        return res.json(500,{
            message:"internal server error"
        });
    }
}