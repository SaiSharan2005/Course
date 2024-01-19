import * as React from 'react';
import { Link } from 'react-router-dom';
export interface ICourseBoxProps {
  courseId: number;
  creatorId: number,
  courseName: string,
  description: string,
  createdDateTime: Date,
  courseImage:string
}

export function CourseBox({ courseId,creatorId, courseName, description, createdDateTime ,courseImage }: ICourseBoxProps) {
  return (
    <Link to= {`/Course/${courseId}`} className = "removeLinkEffect">
    <div className="d-flex flex-column course ">
      <div className="card-image">
        <img src={"http://localhost:3001/images/"+courseImage} alt="" />
      </div>
      <div className="d-flex flex-column">

        <h3 className="courseName">{courseName}</h3>

        <div className="courseDescription">
          <p>{description}</p>
        </div> 
      </div>
    </div>
    </Link>
  );
}
