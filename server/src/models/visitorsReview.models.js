import mongoose from 'mongoose'

const visitorsReviewSchema=new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    personalDetail:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    suggestion:{
        type:String,
        required:true
    }
},{timestamps:true})

export const visitorsReview=mongoose.model('visitorsReview',visitorsReviewSchema)