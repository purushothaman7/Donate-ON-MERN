const mongoose=require("mongoose")

const mongoConnect = async() => {
    await mongoose.connect("mongodb://localhost:27017")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log(e);
})
}

const userSchema=new mongoose.Schema({
    roll:{
        type:Number,
        required:true
    },
    password:{
        type:String
    },  
    marks: {
        type: Number, 
        default: null,
      },
      subject: {
        type: String, 
        default: null,
      },
      name : {
        type:String,
        default:null,
      },
      dept : {
        type:String,
        default:null,
      },
})

const User=new mongoose.model('User',userSchema)

module.exports={
    mongoConnect ,
    User
}