import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { gallery } from "../models/gallery.model.js";
import { v2 as cloudinary } from 'cloudinary';

const fetchGalleryPhoto = asyncHandler(async (req, res, next) => {
  try {
    const data = await gallery.find();
    res.status(200).json(new apiResponse(200, data, "Data sent successfully"));
  } catch (error) {
    next(new apiError(400, `Error: ${error.message}`));
  }
});

const addGaleryPhoto = asyncHandler(async (req, res, next) => {
  const image = req.file;
  if (!image) {
    return next(new apiError(400, "Image is required"));
  }
  try {
    const resp1 = await uploadOnCloudinary(image.path);
    const resp2 = {
      image: resp1.url,
      public_id: resp1.public_id,
    };
    const data = await new gallery(resp2);
    const resp = await data.save();
    res.status(200).json(new apiResponse(200, resp, "Image stored successfully"));
  } catch (error) {
    next(new apiError(400, `Error: ${error.message}`));
  }
});

const changeGalleryStatus = asyncHandler(async (req, res, next) => {
  const { id, status } = req.body;
  if (!id) {
    return next(new apiError(400, "ID is required"));
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
    res.status(200).json(new apiResponse(200, data, "Status changed successfully"));
  } catch (error) {
    next(new apiError(400, `Error: ${error.message}`));
  }
});

const deleteGalleryPhoto = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new apiError(400, "ID is required"));
  }
  try {
    const data = await gallery.findById(id);
    if (!data) {
      return next(new apiError(404, "Image not found"));
    }
    const public_id = data.public_id;
    try {
      const response = await cloudinary.uploader.destroy(public_id);
      if (response.result === "ok") {
        await gallery.deleteOne({ _id: id });
        res.status(200).json(new apiResponse(200, "Image deleted successfully"));
      } else {
        return next(new apiError(400, "Failed to delete an image"));
      }
    } catch (error) {
      next(new apiError(400, `Error: ${error.message}`));
    }
  } catch (error) {
    next(new apiError(400, `Error: ${error.message}`));
  }
});

export {
  addGaleryPhoto,
  deleteGalleryPhoto,
  fetchGalleryPhoto,
  changeGalleryStatus,
};
