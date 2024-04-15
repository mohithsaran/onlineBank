const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const cors=require('cors')


const app=express()
const port=3001;

app.use(bodyparser.json())
app.use(cors())

const url="mongodb://localhost:27017/onlinebanking";
mongoose.connect(url)

const db=mongoose.connection

db.once('open',()=>{
    console.log("Connected to MongoDB")
})

const userSchema=new mongoose.Schema({
        username :String,
        email:String,
        password:String,
        cpassword:String,
        accountno:Number,
        branch:String,
        phno:Number
})

const customer=mongoose.model('customer',userSchema)

app.post('/signup',async(req,res)=>{
    try{
        const {username,email,password,cpassword,accountno,branch,phno}=req.body
        const newCustomer=new customer({
            username,
            email,
            password,
            cpassword,
            accountno,
            branch,
            phno
        })
        await newCustomer.save()
        res.status(201).json({message:'User created successfully'})
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:'Server error'})
    }
}
)


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})