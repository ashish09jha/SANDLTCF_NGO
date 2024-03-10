import mongoose from 'mongoose'

const volunteerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
},{timestamps:true})

export const volunteer= mongoose.model('volunteer',volunteerSchema); 