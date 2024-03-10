import {asyncHandler} from "../utils/asyncHandler.js"
import {apiError} from "../utils/apiError.js"
import {apiResponse} from "../utils/apiResponse.js"
import { upcommingEvent } from "../models/upcommingEvent.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"

const UpcommingEvent=asyncHandler(async(req,res)=>{
    const {image}=req.file;
    const {name,description,regitrationDate,eventDate}=req.body;
    if(!(name||description||regitrationDate||eventDate)){
        throw new apiError(400,"All fields required");
    }
    if(!image){
        throw new apiError(400,"Image is required");
    }
    const imageURL=uploadOnCloudinary(image);
    const data={
        image:imageURL,
        name:name,
        description:description,
        regitrationDate:regitrationDate,
        eventDate:eventDate,
    }
    const resp= upcommingEvent.createUser(data);
    res.status(200).json(new apiResponse(200,resp,"Data send succesfully"));
})

export {UpcommingEvent} 