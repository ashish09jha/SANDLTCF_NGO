import mongoose from 'mongoose'

const certificatesSchema=new mongoose.Schema({
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

export const certificates=mongoose.model('certificates',certificatesSchema);