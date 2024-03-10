import { Router } from "express";
import { instagram } from "../controllers/instagramPosts.controller.js";

const router=Router();
router.route("/instagram").get(instagram);

export default router;
