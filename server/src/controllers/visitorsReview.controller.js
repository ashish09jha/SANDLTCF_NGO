import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { visitorsReview } from "../models/visitorsReview.models.js";

const fetchVisitorsReview = asyncHandler(async (req, res, next) => {
    try {
        const data = await visitorsReview.find();
        res.status(200).json(new apiResponse(200, data, "Data sent successfully"));
    } catch (error) {
        next(new apiError(400, `Error: ${error}`));
    }
});

const addVisitorsReview = asyncHandler(async (req, res, next) => {
    const { name, email, suggestion } = req.body;
    if (!name || !email || !suggestion) {
        return next(new apiError(400, "All fields are required"));
    }
    try {
        const data = {
            date: new Date(),
            personalDetail: name,
            email: email,
            suggestion: suggestion,
        };
        const newReview = new visitorsReview(data);
        const savedReview = await newReview.save();
        res.status(200).json(new apiResponse(200, savedReview, "Review added successfully"));
    } catch (error) {
        next(new apiError(400, `Error: ${error}`));
    }
});

export {
    fetchVisitorsReview,
    addVisitorsReview
};
