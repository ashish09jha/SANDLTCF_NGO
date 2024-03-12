import {asyncHandler} from "../utils/asyncHandler.js"
import {apiResponse} from "../utils/apiResponse.js"
import {apiError} from "../utils/apiError.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {media} from "../models/media.model.js"

const fetchMediaPhoto=asyncHandler(async(req,res)=>{
    try{
        const data=await media.find();
        res.status(200).json(new apiResponse(200,data,"data send successfully"))
    }catch(error){
        throw new apiError(400,`Error:${error}`);
    }
})

const addMediaPhoto=asyncHandler(async(req,res)=>{
    console.log("called")
    const image=req.file;
    if(!image){
        throw new apiError(400,"image is required");
    }
    const resp1=await uploadOnCloudinary(image.path);
    const resp2={image:resp1.url}

    try{
        const data=new media(resp2);
        const resp=data.save()
        res.status(200).json(new apiResponse(200,resp,"image stored successfully"));
    }catch(error){
        throw new apiError(400,`Error:${error}`);
    }
})

const deleteMediaPhoto=asyncHandler(async(req,res)=>{
})

export{
    addMediaPhoto,
    deleteMediaPhoto,
    fetchMediaPhoto,
}