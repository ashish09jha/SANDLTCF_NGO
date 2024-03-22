import { Router } from "express";
import {upload} from "../middlewares/multer.middleware.js"
import { fetchAdmin,deleteAdmin,addAdmin } from "../controllers/admin.controller.js";
import {addVolunteer,fetchVolunteer,fetchVolunteerById } from "../controllers/volunteer.controller.js";
import {addGaleryPhoto,deleteGalleryPhoto,fetchGalleryPhoto,changeGalleryStatus} from "../controllers/gallery.controller.js";
import {addMediaPhoto,deleteMediaPhoto,fetchMediaPhoto,changeMediaStatus} from "../controllers/media.controller.js";
import {addNewsClippingsPhoto,deleteNewsClippingsPhoto,fetchNewsClippingsPhoto,changeNewsClippingsStatus} from "../controllers/newsClippings.controller.js";
import {addCertificatesPhoto,deleteCertificatesPhoto,fetchCertificatesPhoto,changeCertificatesStatus} from "../controllers/certificates.controller.js";
import {fetchEvent,addEvent,changeEventStatus,deleteEvent} from "../controllers/event.controller.js";
import {fetchVisitorsReview,addVisitorsReview} from "../controllers/visitorsReview.controller.js";

const router=Router();

router.route("/visitorsReview").get(fetchVisitorsReview);
router.route("/visitorsReview").post(addVisitorsReview);

router.route("/admin").get(fetchAdmin);
router.route("/admin").post(addAdmin);
router.route("/admin").delete(deleteAdmin);

router.route("/Volunteer").post(addVolunteer);
router.route("/Volunteer").get(fetchVolunteer);
router.route("/Volunteer/c/:id").get(fetchVolunteerById); 

router.route("/Gallery").get(fetchGalleryPhoto);
router.route("/Gallery").post(upload.single("image"),addGaleryPhoto);
router.route("/Gallery").patch(changeGalleryStatus);
router.route("/Gallery/C/:id").delete(deleteGalleryPhoto);

router.route("/NewsClippings").get(fetchNewsClippingsPhoto);
router.route("/NewsClippings").post(upload.single("image"),addNewsClippingsPhoto);
router.route("/NewsClippings").patch(changeNewsClippingsStatus);
router.route("/NewsClippings/C/:id").delete(deleteNewsClippingsPhoto);

router.route("/Media").get(fetchMediaPhoto);
router.route("/Media").post(upload.single("image"),addMediaPhoto);
router.route("/Media").patch(changeMediaStatus); 
router.route("/Media/C/:id").delete(deleteMediaPhoto); 
 
router.route("/Certificates").get(fetchCertificatesPhoto);
router.route("/Certificates").post(upload.single("image"),addCertificatesPhoto);
router.route("/Certificates").patch(changeCertificatesStatus);
router.route("/Certificates/C/:id").delete(deleteCertificatesPhoto);

router.route("/event").get(fetchEvent)
router.route("/event").post(upload.single("image"),addEvent)
router.route("/event").patch(changeEventStatus)
router.route("/event/C/:id").delete(deleteEvent)
 
export default router;
