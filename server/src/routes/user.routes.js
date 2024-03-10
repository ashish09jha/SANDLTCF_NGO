import { Router } from "express";
import { addVolunteer,fetchVolunteer,fetchVolunteerById } from "../controllers/volunteer.controller.js";
import { addGaleryPhoto,deleteGalleryPhoto,fetchGalleryPhoto} from "../controllers/gallery.controller.js";4
import {addMediaPhoto,deleteMediaPhoto,fetchMediaPhoto} from "../controllers/media.controller.js";

const router=Router();

router.route("/Volunteer").post(addVolunteer);
router.route("/Volunteer").get(fetchVolunteer);
router.route("/Volunteer/c/:id").get(fetchVolunteerById);

router.route("/Gallery").get(fetchGalleryPhoto);
router.route("/Gallery/c/:id").get(addGaleryPhoto);
router.route("/Gallery/c/:id").get(deleteGalleryPhoto);

router.route("/Media").get(fetchMediaPhoto);
router.route("/Media/c/:id").get(adMediaPhoto);
router.route("/Media/c/:id").get(deleteMediaPhoto);

export default router;
