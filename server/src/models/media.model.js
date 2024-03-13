import mongoose from 'mongoose'

const mediaSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
        default:0,
    }
},{timestamps:true})

export const media=mongoose.model('media',mediaSchema);