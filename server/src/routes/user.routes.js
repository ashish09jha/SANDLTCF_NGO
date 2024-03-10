import { Router } from "express";
import { addVolunteer,fetchVolunteer,fetchVolunteerById } from "../controllers/volunteer.controller.js";

const router=Router();
router.route("/Volunteer").post(addVolunteer);
router.route("/Volunteer").get(fetchVolunteer);
router.route("/Volunteer/c/:id").get(fetchVolunteerById);

export default router;
