import mongoose from "mongoose"
const UserSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        unique:true,
        index:1,
        trim:true,
        min:[3,"min 3 letter is required"],
        max:50,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    }
})

export const UserModel=mongoose.model("User",UserSchema)