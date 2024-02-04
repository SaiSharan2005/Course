// // import { Result } from "express-validator";
// import sql from "../../config/mysql";
// // import { OkPacket } from "mysql";

// interface ITopics{
//     topicId:number,
//     courseId:number,
//     topicName:string,
//     createdDateTime:Date
// }
// type TError= null|Error|{message:string};

// class Topics{
//     private topicId:number;
//     private courseId:number;
//     private topicName:string;
//     private createdDateTime:Date;

//     constructor(topic:ITopics){
//         this.topicId = topic.topicId;
//         this.courseId = topic.courseId;
//         this.topicName = topic.topicName;
//         this.createdDateTime = topic.createdDateTime;
//         // this.description = course.description;
//         // this.createdDateTime = course.createdDateTime;
//     }

//     createTable(result: (err: TError, data: any | null) => void): void {
//         sql.query("INSERT INTO topics SET ?", this, (err: Error | null, res: any) => {
//             if (err) {
//                 console.log("error: ", err);
//                 result(err, null);
//                 return;
//             }
//             result(null, this);
//             return
//         });
//     }


//     static findCourseById(topicId:number,result:(err:TError, data:any)=>void):void{
//         sql.query("SELECT * FROM topics WHERE topicId = ?" ,[topicId],(err:TError,res:any)=>{
//             if(err){
//                 result(err,null);
//             }
//             else{
//                 result(null,res)
//             }
//         })
//     } 

// }


// export {Topics}