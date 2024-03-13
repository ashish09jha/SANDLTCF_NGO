import mongoose from 'mongoose'

const adminSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    priority:{
        type:Number,
        required:true,
    }
},{timestamps:true});

export const admin=mongoose.model('admin',adminSchema);