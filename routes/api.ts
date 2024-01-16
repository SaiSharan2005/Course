import { SignUp,getUserById,Login } from '../controllers/userController';
import {getCourseById ,getAllCourses, getAllTutorial} from "../controllers/courseController"
import { getTopicById } from '../controllers/topicController';
import express, { Request, Response } from 'express';
const router = express.Router();

router.post('/SignUp', SignUp);
router.get('/getUserById', getUserById);
router.post("/Login",Login);



router.post("/courseId",getCourseById);
router.post("/getAllCourses",getAllCourses);
router.post("/getTutorial",getAllTutorial);

router.post("/topicId",getTopicById);

router.post("/test",(req:Request,res:Response)=>{
    console.log(req.body);
    res.json(req.body)
    console.log("akjghl")

})




export default router;
