import {asyncHandler} from "../utils/asyncHandler.js"
import {apiError} from "../utils/apiError.js"
import {apiResponse} from "../utils/apiResponse.js"
import {admin} from "../models/admin.model.js"
import {verification} from "../utils/emailVerification.js"

const fetchAdmin=asyncHandler(async(req,res)=>{
    try{
        const data=await admin.find();
        res.status(200).json(new apiResponse(200,data,"data send successfully"));
    }catch(error){
        throw new apiError(400,`Error:${error}`);
    }
})

const addAdmin=asyncHandler(async(req,res)=>{
    const {name,email,priority}=req.body;
    if(!name){
        throw new apiError(400,"name is required");
    }
    if(!email){
        throw new apiError(400,"Email is required");
    }
    if(!priority){
        throw new apiError(400,"Priority is required");
    }
    try{
        const data={
            name:name,
            email:email,
            priority:parseInt(priority)+1,
        }
        const resp1=new admin(data);
        const resp=await resp1.save();
        // verification(email,"http:/{localhost}:8000/volunteer");
        res.status(200).json(new apiResponse(200,resp,"admin created successfully"));
    }catch(error){
        throw new apiError(400,`Data not stored:${error}`);
    }
})

const deleteAdmin=asyncHandler(async(req,res)=>{
    const {id,priority_Deleter,priority}=req.params;
    if(!id){
        throw new apiError(400,"Id is required");
    }
    if(!priority){
        throw new apiError(400,"priority is required");
    }
    if(!priority_Deleter){
        throw new apiError(400,"priority of deleter is required");
    }
    if(parseInt(priority_Deleter)>=parseInt(priority)){
        throw new apiError(400,"You are not able to delete");
    }
    else{
        try{
            const resp=await admin.deleteOne({_id:id});
            console.log(resp);
            res.status(200).json(new apiResponse(200,resp,"Admin Deleted Successfully"));
        }catch(error){
            throw new apiError(400,`Error in Admin Deletion:${error}`);
        }
    }
})

export {
    addAdmin,
    fetchAdmin,
    deleteAdmin,
}