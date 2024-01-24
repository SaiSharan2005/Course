
import * as React from 'react';
import "../assets/css/Courses.css"
import { CourseBox } from './CourseBox';
export interface ICoursesProps {
}

interface ICourses{
  courseId: number;
    creatorId:number,
    courseName:string,
    description:string,
    createdDateTime:Date,
    courseImage:string
}

export function Courses (props: ICoursesProps) {

    const [courses,setCourses] = React.useState<ICourses[]>([]);


    React.useEffect(()=>{
        const fetchData= async ()=>{
            const response =  await fetch("http://localhost:3001/api/getAllCourses",{
                method: "GET",
                headers:{"Content-Type": "application/json"},
            });
            setCourses(await response.json());
        };
        fetchData();
    },[])
  return (
    <div className=''>
        {/* {JSON.stringify(courses)} */}
        <div className="d-flex flex-row courses-all">
        {courses.map((course) => (
  <CourseBox
  courseId={course.courseId}
    creatorId={course.creatorId}
    courseName={course.courseName}
    description={course.description}
    createdDateTime={course.createdDateTime}
    courseImage={course.courseImage}
  />
))}
        </div>
      
    </div>
  );
}