import { Courses } from "../../models/old/courseModel";
import { Response, Request } from "express";

type TError= null|Error|{message:string};




export const getTopicById = async (req:Request,res:Response):Promise<void> =>{
    let topciId:number = req.body.topciId;
    if (!req.body){
         res.status(400).send({
            message:"Content can not be empty !" ,success:false
        })
        return;
    }
    Courses.findCourseById(topciId,async(err,result)=>{
        if(err){
            return res.status(500).json({
                message:err.message || "Some error occured "
            })
        }
        else{
             res.status(200).json(result);
             return
        }
    })
    
}