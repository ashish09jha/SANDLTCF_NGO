import asyncHandler from "../utils/asyncHandler.js"
import apiResponse from "../utils/apiResponse.js"
import apiError from "../utils/apiError.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import gallery from "../models/gallery.model.js"

const fetchGalleryPhoto=asyncHandler(async(req,res)=>{
    try{
        const data=await gallery.find();
        res.status(200).json(new apiResponse(200,data,"data send successfully"))
    }catch(error){
        throw new apiError(400,`Error:${error}`);
    }
})

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
        const data=new gallery(imageUrl);
        const resp=data.save()
        res.status(200).json(new apiResponse(200,resp,"image stored successfully"));
    }catch(error){
        throw new apiError(400,`Error:${error}`);
    }
})

const deleteGalleryPhoto=asyncHandler(async(req,res)=>{
})

export{
    addGaleryPhoto,
    deleteGalleryPhoto,
    fetchGalleryPhoto,
}