import {asyncHandler} from "../utils/asyncHandler.js"
import {apiError} from "../utils/apiError.js"
import {apiResponse} from "../utils/apiResponse.js"
import {visitorsReview} from "../models/visitorsReview.models.js"

const fetchVisitorsReview=asyncHandler(async(req,res)=>{
    try{
        const data=visitorsReview.find();
        res.status(200).json(new apiResponse(200,data,"Data send successfully"));
    }catch(error){
        throw new apiError(400,`Error:${error}`);
    }
})

const addVisitorsReview=asyncHandler(async(req,res)=>{
    const {date,personalDetail,email,suggesstion}=req.body;
    try{
        const data={
            date:date,
            personalDetail:personalDetail,
            email:email,
            suggesstion:suggesstion,
        }
        const resp1=new visitorsReview.createUser(data);
        const resp=resp1.save();
        res.status(200).json(new apiResponse(200,resp,"Review added succssfully"));
    }catch(error){
        throw new apiError(400,`Error:${error}`);
    }
})

export {
    fetchVisitorsReview,
    addVisitorsReview
}