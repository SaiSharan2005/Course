// import { Result } from "express-validator";
import sql from "../config/mysql";
import { OkPacket ,} from "mysql";

interface ICourses{
    creatorId:number,
    courseName:string,
    description:string,
    createdDateTime:Date
}
type TError= null|Error|{message:string};

class Courses{
    private creatorId:number;
    private courseName:string;
    private description:string;
    private createdDateTime:Date;

    constructor(course:ICourses){
        this.creatorId = course.creatorId;
        this.courseName= course.courseName;
        this.description= course.description;
        this.createdDateTime= course.createdDateTime;

    }

    createCourse(result: (err: TError, data: any | null) => void): void {
        sql.query("INSERT INTO courses SET ?", this, (err: Error | null, res: any) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            // console.log("created user: ", { id: res.insertId, ...this });
            // console.log('res', res)
            result(null, this);
        });
    }


    static findCourseById(courseId:number,result:(err:TError, data:any)=>void):void{
        sql.query("SELECT c.courseId,u.username,c.courseName,c.description,c.createdDateTime,c.courseImage  FROM courses c JOIN users u ON u.userId = c.creatorId WHERE  c.courseId= ?" ,[courseId],(err:TError,res:any)=>{
            if(err){
                result(err,null);
            }
            else{
                result(null,res)
            }
        })
    } 
    static allCourse(result:(err:TError,data:any)=>void):void{
        sql.query("SELECT * FROM courses",(err:TError,res:any)=>{
            if(err){
                result(err,null);
            }
            else{
                result(null,res)
            }
        })
    }
    static EveryTutorial(courseId:number,result:(err:TError,data:any)=>void):void{
        sql.query("SELECT s.topicId, s.subTopicId,t.topicName,s.subTopicName,s.yotubeLink,s.createdDateTime,s.duration FROM subTopics s JOIN topics t ON s.topicId = t.topicId WHERE t.courseId = ?",[courseId],(err:TError,res:any)=>{
            if(err){
                result(err,null);
            }
            else{
                result(null,res)
            }
        })
    }

}


export {Courses}