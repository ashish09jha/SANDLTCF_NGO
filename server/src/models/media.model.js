import mongoose from 'mongoose'

const mediaSchema=new mongoose.Schema({
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

export const media=mongoose.model('media',mediaSchema);