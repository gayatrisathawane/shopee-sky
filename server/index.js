import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import User from './models/user.js'
import Product from './models/product.js'
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



// get all signUp user 
app.get('/users', async (req, res) => {

    const allUser = await User.find();

    res.json({
        data: allUser,
        message: "fetch all data"
    })
})

//sign up
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
// app.post('/login',async(req,res)=>{

//     const{ name, email,password}=req.body;

//     const loginUser = await User.findOne({email:email ,password:password}).select('name gmail gender address')


//     if(loginUser){
//         return res.json({
//             success:true,
//             data:loginUser,
//             message:"login successfully"

//         })
//     }
//    else{
//     return res.json({
//         success:false,
//         data:loginUser,


//     })

//    }
// })


//Product APIS

//get all products

app.get('/products', async (req, res) => {

    const products = await Product.find();

    res.json({
        success: true,
        data: products,
        message: "all fetched successfuly"

    })
})

// product Post api

app.post('/products', async (req, res) => {

    const { name, price, category, brand, productImg, description } = req.body

    const newProduct = new Product({
        name, price, category, brand, productImg, description
    })


    try {
        const savedProduct = await newProduct.save()

        return res.json({
            data: savedProduct,
            success: true,
            message: "product added"
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

//get data by id 

app.get('/products/:_id',async(req,res)=>{

    const{ _id }= req.params

    const findOneProduct = await Product.findOne({ _id:_id} )

    res.json({
        data:findOneProduct,
        message:"fetch product successfully"
    })


})

//delete api 
app.delete('/products/:_id',async(req,res)=>{

    const{ _id }= req.params

    await Product.deleteOne({_id:_id})

    res.json({
        success:true,
        message:"product delete successfully"
    })

})






app.listen(PORT, () => {
    console.log(`port running on Port no  ${PORT}`)
    mongoDb()
})