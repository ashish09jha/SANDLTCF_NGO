import mongoose from 'mongoose'

const upcommingEventSchema=new mongoose.Schema({
    image:{
        type:string,
        required:true,
    },
    name:{
        type:string,
        required:true,
    },
    description:{
        type:string,
        required:true,
    },
    regitrationDate:{
        type:string,
        required:true,
    },
    eventDate:{
        type:string,
        required:true,
    }
},{timestamps:true})

export const  upcommingEvent= mongoose.model(upcommingEvent,upcommingEventSchema); 