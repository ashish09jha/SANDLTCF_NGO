import mongoose from 'mongoose'

const newsClippingSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
        default:0,
    }
},{timestamps:true})

export const newsClipping=mongoose.model('newsClipping',newsClippingSchema);