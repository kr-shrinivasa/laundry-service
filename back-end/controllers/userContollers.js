

const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const JWT_SECRET="laundry-service"


//create user

const createUser =async(req,res)=>{
    // check user already there or not
    try{
        const user= await User.findOne({email:req.body.email})

        if (!user){
        
        const salt = await bcrypt.genSalt(10)
        const securePassword = await bcrypt.hash(req.body.password,salt)

        //new usr creadentials

        const newUseInfo={
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:securePassword,
            pincode:req.body.pincode,
            district:req.body.district,
            address:req.body.address
        }

        const newuser =await User.create(newUseInfo)

        const data ={
            newuser:{
                id:newuser.id
            }
        }

        const authtoken =jwt.sign(data,JWT_SECRET)

        const success=true
        res.send({success,authtoken})

    }else{
        res.status(400).send("sorry this user alredy rigistered")}

    }catch(err){
        console.log(err)
        res.status(500).json({error:"internal server error"})
    }
}





const checkLogin = async(req,res)=>{

     //checking validation
    const {email, password }=req.body
    const user =await User.findOne({email})

    let success=false
//check email present or not
    if (!user){
        res.status(400).json({success,error:"try to login with correct credintials"})
    }
    
    const password_compare_res= await bcrypt.compare(password,user.password)
//checking password
    if (!password_compare_res){
        res.status(400).json({success,error:"wrong password"})
    }

    const data = {
        user: {
          id: user.id
        }
      }

    const authtoken =jwt.sign(data,JWT_SECRET)

    success=true

    res.json({success,authtoken})

}


module.exports={createUser,checkLogin}