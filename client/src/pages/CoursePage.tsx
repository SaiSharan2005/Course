import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { SideBar } from '../components/SideBar';
import { InputItem } from '../utils/TutorialFormater';
import { UserContext } from 'src/context/userContext';
import { CheckEnroll } from 'src/utils/CheckEnrollOrNot';
interface ICoursePageProps { }

interface ICourses {
    username: number;
    courseName: string;
    description: string;
    createdDateTime: Date;
    courseImage: string;
}

interface ISubTopics {
    subTopicId: number;
    subTopicName: string;
    youtubeLink: string;
    createdDateTime: string;
}

interface ITopics {
    topicId: number;
    topicName: string;
    subTopics: ISubTopics[];
}


const CoursePage: React.FC<ICoursePageProps> = () => {
    const { userId, username  } = React.useContext(UserContext)!;
    const[user,setUser] = React.useState<number|null>(userId)
    // setUser(userId)
    const { courseIdNumber } = useParams();
    const [course, setCourse] = useState<ICourses>();
    const [topics, setTopics] = useState<InputItem[]>([]);
    const [courseIdn, setCourseId] = useState<number>(Number(courseIdNumber));
    const [enrollStatus,setEnrollStatus] = useState<boolean>();
    const styles = {
        tutorialBar: {
            width: "90vw",
            marginLeft: "5vw",
            marginBottom: "5vh"
        }
    }
    
    const enrollHandler = async () => {
        // setCourseId(Number(courseIdNumber))
        // console.log("feadngjnkjn")
        console.log({ "courseId": courseIdn, "userId": user })
        const response = await fetch("http://localhost:3001/api/Enroll", { method: "POST",
        headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ "courseId": courseIdn, "userId": userId }) });
          const enroll = await response.json();
          if (enroll.success) {
            alert(enroll.message);
        }
        else {
            alert(enroll.message);
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            setCourseId(Number(courseIdNumber));
            console.log(Number(courseIdNumber));
            const responseCourse = await fetch("http://localhost:3001/api/courseId", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "courseId": courseIdn })
            });
            const responseCourseData: ICourses[] = await responseCourse.json();
            console.log(courseIdn, responseCourseData)
            setCourse(responseCourseData[0]);

            const responseAllTutorial = await fetch("http://localhost:3001/api/getTutorial", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "courseId": courseIdn })
            });
            setTopics(await responseAllTutorial.json());
            console.log(topics);
            const enroll = await CheckEnroll(1,27);
            setEnrollStatus(enroll)
            
        };

        fetchData();
    }, [courseIdNumber]);
    return (
        <div>
            <div className="topic">
                <div className=" flex-column Course-child">
                    <p className="head">{course?.courseName}</p>
                    <p className="description">{course?.description}</p>
                    <p className="createdDateTime">Course Created on {course?.createdDateTime ? format(course.createdDateTime, 'MMMM dd, yyyy') : ''}</p>
                    <p className="createdBy">Course Created By{course?.username}</p>
                    {!enrollStatus?<button onClick={enrollHandler}>Enroll</button>:<></>}
                    
                </div>
                <div>
                    <img
                        className="topic-img"
                        src={"http://localhost:3001/images/" + course?.courseImage}
                        alt="Image has a problem"
                    />
                </div>
            </div>
            <div style={styles.tutorialBar} >
                <SideBar tutorialData={topics} courseId={courseIdn} />
            </div>
        </div>
    );
};

export default CoursePage;