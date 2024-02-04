import { Result } from "express-validator";
import { Courses } from "../../models/old/courseModel";
import { Response, Request } from "express";

type TError= null|Error|{message:string};

export const getCourseById = async (req:Request,res:Response):Promise<void> =>{
    let courseId:number = req.body.courseId;
    if (!req.body){
         res.status(400).send({
            message:"Content can not be empty !" ,success:false
        })
        return;
    }
    Courses.findCourseById(courseId,async(err,result)=>{
        if(err){
            return res.status(500).json({
                message:err.message || "Some error occured while retiving the data"
            })
        }
        else{
             res.status(200).json(result);
             return
        }
    })
    
}

export const getAllCourses =async (req:Request,res:Response):Promise<void> => {
    Courses.allCourse(async(err,result)=>{
        if(err){
            return res.status(500).json({
                message:err.message || "Some error occured while retiving the data"
            })
        }
        else{
             res.status(200).json(result);
             return
        }
    })
    
}

export const getAllTutorial =async (req:Request,res:Response):Promise<void> => {
    const courseId:number = req.body.courseId;
    Courses.EveryTutorial(courseId,async(err,result)=>{
        if(err){
            return res.status(500).json({
                message:err.message || "Some error occured while retiving the data"
            })
        }
        else{
             res.status(200).json(result);
             return
        }
    })
    
}

