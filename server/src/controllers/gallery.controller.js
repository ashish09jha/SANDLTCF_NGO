import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { gallery } from "../models/gallery.model.js";
import axios from 'axios';

const fetchGalleryPhoto = asyncHandler(async (req, res) => {
  try {
    const data = await gallery.find();
    console.log(data);
    res.status(200).json(new apiResponse(200, data, "data send successfully"));
  } catch (error) {
    throw new apiError(400, `Error:${error}`);
  }
});

const addGaleryPhoto = asyncHandler(async (req, res) => {
  const image = req.file;
  if (!image) {
    throw new apiError(400, "image is required");
  }
  const resp1 = await uploadOnCloudinary(image.path);
  const resp2 = {
    image: resp1.url,
    public_id: resp1.public_id,
  };

  try {
    const data = new gallery(resp2);
    const resp = data.save();
    res
      .status(200)
      .json(new apiResponse(200, resp, "image stored successfully"));
  } catch (error) {
    throw new apiError(400, `Error:${error}`);
  }
});

const changeGalleryStatus = asyncHandler(async (req, res) => {
  const { id, status } = req.body;
  if (!id) {
    throw new apiError(400, "ID is required");
  }
  try {
    const data = await gallery.findByIdAndUpdate(
      id,
      {
        $set: {
          status: status,
        },
      },
      {
        new: true,
      }
    );
    res
      .status(200)
      .json(new apiResponse(200, data, "Status changed successfully"));
  } catch (error) {
    throw new apiError(400, `ERROR:${error}`);
  }
});

const deleteGalleryPhoto = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!id) {
    throw new apiError(400, "ID is required");
  }
  try {
    const data = await gallery.find({ id: id });
    const public_id = data.public_id;
    try {
      const response = await axios.delete(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/delete_resources`,
        {
          data: {
            public_ids: [public_id],
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
          },
        }
      );
      if (response.data.result === "ok") {
        res
          .status(200)
          .json(new apiResponse(200,"image deleted successfully"));
      } else {
        throw new apiError(400,"Failed to delete an image");
      }
    } catch (error) {
      throw new apiError(400,`ERROR:${error}`);
    }
  } catch (error) {
    throw new apiError(400, `Error:${error}`);
  }
  gallery.deleteOne({ id: id });
});

export {
  addGaleryPhoto,
  deleteGalleryPhoto,
  fetchGalleryPhoto,
  changeGalleryStatus,
};
