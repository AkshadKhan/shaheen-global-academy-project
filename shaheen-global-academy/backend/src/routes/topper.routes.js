import express from "express";
const router = express.Router();

import {topper,getToppers,getTopper,updateTopper,deleteTopper} from "../controllers/topper.controller.js"
import verifyToken from "../middleware/admin.middleware.js"
import {upload} from "../utils/multer.js"

router.post('/toppers', verifyToken,upload.single('profilePicture'),topper)
router.get('/getToppers', verifyToken,getToppers)
router.get('/getTopper/:id', verifyToken,getTopper);
router.put('/verify/:id', verifyToken, upload.single('profilePicture'),updateTopper);
router.delete('/delTopper/:id', verifyToken,deleteTopper);


export default router;