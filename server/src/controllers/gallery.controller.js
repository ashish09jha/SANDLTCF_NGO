import asyncHandler from "../utils/asyncHandler.js"
import apiResponse from "../utils/apiResponse.js"
import apiError from "../utils/apiError.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"

const addGaleryPhoto=asyncHandler(async(req,res)=>{
    const {image}=req.file;
    if(!image){
        throw new apiError(400,"image is required");
    }
    var imageUrl;
    try{
        imageUrl=uploadOnCloudinary(req.file.image.path);
    }catch(error){
        new apiError(400,`Error:${error}`);
    }


})

const deleteGalleryPhoto=asyncHandler(async(req,res)=>{

})

export{
    addGaleryPhoto,
    deleteGalleryPhoto
}