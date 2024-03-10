import {asyncHandler} from "../utils/asyncHandler.js";
import {apiError} from "../utils/apiError.js";
import {apiResponse} from "../utils/apiResponse.js"
import axios from "axios";

const instagram=asyncHandler(async(req,res)=>{
    const data=axios.get("https://graph.instagram.com/{sanyam_singh09}?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token={access-token}");

    console.log(data);
})

export {instagram}; 