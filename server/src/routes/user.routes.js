import { Router } from "express";
import { addVolunteer,fetchVolunteer,fetchVolunteerById } from "../controllers/volunteer.controller.js";
import { addGaleryPhoto,deleteGalleryPhoto,fetchGalleryPhoto,changeGalleryStatus} from "../controllers/gallery.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import {addMediaPhoto,deleteMediaPhoto,fetchMediaPhoto} from "../controllers/media.controller.js";

const router=Router();

router.route("/Volunteer").post(addVolunteer);
router.route("/Volunteer").get(fetchVolunteer);
router.route("/Volunteer/c/:id").get(fetchVolunteerById); 

router.route("/Gallery").get(fetchGalleryPhoto);
router.route("/Gallery").post(upload.single("image"),addGaleryPhoto);
router.route("/Gallery").patch(changeGalleryStatus);
router.route("/Gallery/C/:id").delete(deleteGalleryPhoto);

router.route("/Media").get(fetchMediaPhoto);
router.route("/Media").post(upload.single("image"),addMediaPhoto);
// router.route("/Media/c/:id").get(deleteMediaPhoto);

export default router;
