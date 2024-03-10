import asyncHandler from "../utils/asyncHandler.js"
import apiResponse from "../utils/apiResponse.js"
import apiError from "../utils/apiError.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import media from "../models/media.model.js"

const addGaleryPhoto=asyncHandler(async(req,res)=>{
    const {image}=req.file;
    if(!image){
        throw new apiError(400,"image is required");
    }
    var imageUrl;
    if(req.file && req.file.image && req.file.image.path){
        imageUrl=await uploadOnCloudinary( req.file.image.path)
    }

    try{
        const data=new media(imageUrl);
        const resp=data.save()
        res.status(200).json(new apiResponse(200,resp,"image stored successfully"));
    }catch(error){
        throw new apiError(400,`Error:${error}`);
    }
})

const deletemediaPhoto=asyncHandler(async(req,res)=>{
    
})

export{
    addGaleryPhoto,
    deletemediaPhoto
}