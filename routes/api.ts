import { SignUp,getUserById,Login } from '../controllers/userController';
import {getCourseById ,getAllCourses, getAllTutorial} from "../controllers/courseController"
import { getTopicById } from '../controllers/topicController';
import express, { Request, Response } from 'express';
import { getCourseUser,getUserCourses, enrollment } from '../controllers/enrollController';
const router = express.Router();

router.post('/SignUp', SignUp);
router.get('/getUserById', getUserById);
router.post("/Login",Login);



router.post("/courseId",getCourseById);
router.get("/getAllCourses",getAllCourses);
router.post("/getTutorial",getAllTutorial);

router.post("/topicId",getTopicById);

router.post("/Enroll",enrollment);
router.post("/UserEnrolledIn",getUserCourses);
router.post("/getCourseUser",getCourseUser)










router.post("/test",(req:Request,res:Response)=>{
    console.log(req.body);
    res.json(req.body)
    console.log("akjghl")

})




export default router;
