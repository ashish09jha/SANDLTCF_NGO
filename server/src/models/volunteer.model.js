import mongoose from 'mongoose'

const volunteerSchema=new mongoose.Schema({
    name:{
        type:string,
        required:true,
    },
    email:{
        type:string,
        required:true,
    },
    description:{
        type:string,
        required:true,
    }
},{timestamps:true})

export const volunteer= mongoose.model(volunteer,volunteerSchema); 