import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import {volunteer} from "../models/volunteer.model.js"

const addVolunteer=asyncHandler(async(req,res)=>{
    const formData=req.body[0];
    const name=formData[1];
    const email=formData[2];
    const description=formData[3];
    if(!(name||email||description)){
        new apiError(400,"All fields required");
    }
    const data={
        name:name,
        email:email,
        description:description,
    }
    try{
        const querry= new volunteer(data);
        const resp=querry.save();
        res.status(200).json(new apiResponse(200,resp,"data cretated successfully"));
    }catch(error){
        throw new apiError(400,`Error:${error}`);
    }
})

const fetchVolunteer=asyncHandler(async(req,res)=>{
    try{
        const data=await volunteer.find();
        res.status(200).json(new apiResponse(200,data,"data send successfully"))
    }catch(error){
        throw new apiError(400,`Error:${error}`);
    }

})

const fetchVolunteerById=asyncHandler(async(req,res)=>{
    const {id}=req.body;
    if(!id){
        throw new apiError(400,"User id is required");
    }
    try{
        const data=await volunteer.fetchVolunteerById(id);
        res.status(200).json(new apiResponse(200,data,"data send successfully"))
    }catch(error){
        throw new apiError(400,`Error:${error}`);
    }
})

export {
    addVolunteer,
    fetchVolunteer,
    fetchVolunteerById 
} 