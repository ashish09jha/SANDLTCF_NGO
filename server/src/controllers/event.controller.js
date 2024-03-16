import {asyncHandler} from "../utils/asyncHandler.js"
import {apiError} from "../utils/apiError.js"
import {apiResponse} from "../utils/apiResponse.js"
import { event } from "../models/event.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"

const addEvent=asyncHandler(async(req,res)=>{
    const image=req.file;
    const {eventName,description,registrationDate,eventDate,time,location}=req.body;
    console.log(req.body);
    if(!(eventName||description||registrationDate||eventDate||time||location)){
        throw new apiError(400,"All fields required");
    }
    if(!image){
        throw new apiError(400,"Image is required");
    }
    const image1=await uploadOnCloudinary(image.path);
    const imageURL=image1.url;
    const data={
        image:imageURL,
        name:eventName,
        description:description,
        registrationDate:registrationDate,
        eventDate:eventDate,
        time:time,
        location:location,
    }
    const evt=new event(data);
    const resp=await evt.save();
    res.status(200).json(new apiResponse(200,resp,"Data send succesfully"));
}) 

const changeEventStatus=asyncHandler(async(req,res)=>{
    const {id,status}=req.body;
    if(!id){
        throw new apiError(400,"Id is required");
    }
    try{
        const data=await event.findByIdAndUpdate(
            id,
            {
                $set:{
                    status:status,
                }
            },
            {
                new:true,
            }
        )
        res.status(200,data,"Status changed successfully");
    }catch(error){
        throw new apiError(400,`Error:${error}`);
    }
})
 
const fetchEvent=asyncHandler(async(req,res)=>{
    console.log("called");
    try{
        const data=await event.find();
        res.status(200).json(new apiResponse(200,data,"data send successfully"));
    }catch(error){
        throw new apiError(400,`Error:${error}`);
    }
})

const deleteEvent=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    if(!id){
        throw new apiError(400,"Id is required");
    }
    try{
        const data=await event.deleteOne({id:id});
        res.status(200).json(new apiResponse(200,data,"event deleted successfully"));
    }catch(error){
        throw new apiError(400,`Error:${error}`);
    }
})

export{
    addEvent,
    changeEventStatus,
    fetchEvent,
    deleteEvent,
}