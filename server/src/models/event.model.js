import mongoose from 'mongoose'

const eventSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true, 
    },
    regitrationDate:{ 
        type:String,
        required:true,
    },
    eventDate:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    time:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
        default:0,
    }
},{timestamps:true})

export const  event= mongoose.model('event',eventSchema); 