import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

import User from './models/user.js'


const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000


//mongodb connection 
const mongoDb = async () => {

    const connect = await mongoose.connect(process.env.MONGODB_URL)

    if (connect) {
        console.log("mongodb connected")
    }

}
mongoDb()

//sin up
app.post('/signup', async (req, res) => {

    const { name, email, mobile, address, password, gender } = req.body

    const newUser = new User({
        name, email, mobile, address, password, gender
    })



    try {
        const saveUser = await newUser.save()
        return res.json({
            data: saveUser,
            success: true,
            message: "successfully created signup"
        })
    }
    catch (e) {
        return res.json(
            {
                message: (e.message)
            }
        )
    }
})



// Login 
app.post('/login',async(req,res)=>{

    const{ name, email,password}=req.body;

    const loginUser = await User.findOne({email:email ,password:password}).select('name gmail gender address')


    if(!loginUser){
        return res.json({
            success:false,
            message:"Invalid credintial"

        })

    }

    res.json({
        data:loginUser,
        message:"login successfully"

    })
})









app.listen(PORT, () => {
    console.log(`port running on Port no  ${PORT}`)
})