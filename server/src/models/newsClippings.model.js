import mongoose from 'mongoose'

const newsClippingsSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
        default:0,
    },
    public_id:{
        type:String,
        required:true,
    }
},{timestamps:true})

export const newsClippings=mongoose.model('newsClippings',newsClippingsSchema);