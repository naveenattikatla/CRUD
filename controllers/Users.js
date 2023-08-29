const aliegn = require("../Model/UserSchema");

const UserInfo = async (req,res)=>{
        const { name , tech , subscriber } = req.body;
        try{
            const user = await aliegn.create({ name , tech , subscriber})
            res.json({
              name :   user.name ,tech : user.tech , id : user._id,subscriber : user.subscriber
            })
        }catch(err){
            throw new Error("unable to proceed user request")
        }
}

const AliensInfo =  async (req,res)=>{
    try{
       const users = await aliegn.find();
        res.json(users)
    }catch(err){
        throw new Error("unable to proceed user request")
    }
}
const AlienInfo = async (req,res)=>{
    
    const { name } = req.params;
    try{
        const user = await aliegn.findOne({name})

        res.json({
            name : user.name,
            id: user._id,
            tech : user.tech,
            subscriber : user.subscriber
        })
    }catch(err){
        throw new Error("unable to proceed user request")
    }
}
const Updatealiegn = async (req,res)=>{
    const {name } = req.params;
    try{
        const user = await aliegn.findOne({name})
        user.subscriber = false;
        res.json(user)
    }
    catch(err){
        throw new Error("unable to proceed user request")
       
    }
}
const Deletealiegn = async(req,res)=>{
    const { name } = req.params ;
    try{
        const user = await aliegn.findOneAndDelete({ name })
        res.json({name : user.name, tech : user.tech, id : user._id})
    }catch(err){
        throw new Error("No such user existed....")
    }
}
module.exports = { UserInfo  , AliensInfo ,AlienInfo , Updatealiegn , Deletealiegn}
