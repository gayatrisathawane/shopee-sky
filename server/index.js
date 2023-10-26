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






//login user







app.listen(PORT, () => {
    console.log(`port running on Port no  ${PORT}`)
})