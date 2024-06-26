import mongoose from 'mongoose'

const gallerySchema=new mongoose.Schema({
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

export const gallery=mongoose.model('gallery',gallerySchema);