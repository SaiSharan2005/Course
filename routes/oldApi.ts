import { SignUp,getUserById,Login ,getUserIdWithAuthToken} from '../controllers/old/userController';
import {getCourseById ,getAllCourses, getAllTutorial} from "../controllers/old/courseController"
import { getTopicById } from '../controllers/old/topicController';
import express, { Request, Response } from 'express';
import { getCourseUser,getUserCourses, enrollment,getEnrollOrNot } from '../controllers/old/enrollController';
import { addProfile, getProfile, getFewProfile } from "../controllers/old/profileController";
import {addDocument, getDocument,getAllDocument,removeDocument, removeAllDocument, updateDocument} from "../controllers/old/document-controller"
const router = express.Router();

router.post('/SignUp', SignUp); 
router.post('/getUserById', getUserById);
router.post("/Login",Login);
router.post("/getUserIdWithAuthToken",getUserIdWithAuthToken);

router.post("/addProfile", addProfile);
router.post("/getProfile", getProfile);
router.post("/getFewProfile", getFewProfile);

router.post("/courseId",getCourseById);
router.get("/getAllCourses",getAllCourses);
router.post("/getTutorial",getAllTutorial);

router.post("/topicId",getTopicById);

router.post("/Enroll",enrollment);
router.post("/UserEnrolledIn",getUserCourses);
router.post("/getCourseUser",getCourseUser)
router.post("/getEnrollOrNot",getEnrollOrNot)



router.post("/addDocument",addDocument);









router.post("/test",(req:Request,res:Response)=>{
    console.log(req.body);
    res.json(req.body)
    console.log("akjghl")

})




export default router;
