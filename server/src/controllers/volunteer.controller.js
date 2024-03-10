import { asyncHandler } from "../utils/asyncHandler";
import { apiError } from "../utils/apiError";
import { apiResponse } from "../utils/apiResponse";
import {volunteer} from "../models/volunteer.model.js"

const Volunteer=asyncHandler(async(req,res)=>{
    const {name,email,description}=req.body;
    if(!(name||email||description)){
        new apiError(400,"All fields required");
    }
    const data={
        name:name,
        email:email,
        description:description,
    }
    try{
        const resp=await volunteer.createUser(data);
        res.status(200).json(new apiResponse(200,resp,"data cretated successfully"));
    }catch(error){
        throw new apiError(400,`Error:${error}`);
    }
})

export {Volunteer} 