
import {model,Schema} from 'mongoose'

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        default:0
    },
    address:{
        type:String,

    },
    gender:{
        type:String,
        default:"not to say ......"
    }
})

const User = model('User',UserSchema)

export default User