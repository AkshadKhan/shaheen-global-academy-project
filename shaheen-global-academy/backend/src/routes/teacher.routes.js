import express from "express";
const router = express.Router();

import {teacher,getTeachers,getTeacher,updateTeacher,deleteTeacher} from "../controllers/teacher.controller.js"
import verifyToken from "../middleware/admin.middleware.js"
import {upload} from "../utils/multer.js"

router.post('/teachers', verifyToken,upload.single('profilePicture'),teacher)
router.get('/getTeachers', verifyToken,getTeachers)
router.get('/getTeacher/:id', verifyToken,getTeacher);
router.put('/verify/:id', verifyToken, upload.single('profilePicture'),updateTeacher);
router.delete('/delTopper/:id', verifyToken,deleteTeacher);


export default router;