import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { SideBar } from '../components/SideBar';
import { InputItem } from '../utils/TutorialFormater';

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
    const [course, setCourse] = useState<ICourses>();
    const [topics, setTopics] = useState<InputItem[]>([]);
    const { courseId } = useParams();
    const styles = {
        tutorialBar: {
            width: "90vw",
            marginLeft: "5vw",
        }
    }

    const enrollHandler = async () => {
        const response = await fetch("/api/Enroll", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ "courseId": courseId, "userId": 4 }) });
        const enroll = await response.json();
        if (enroll.success){
            alert(enroll.message);
        }
        else{
            alert(enroll.message);
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const responseCourse = await fetch("http://localhost:3001/api/courseId", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "courseId": courseId })
            });

            const responseCourseData: ICourses[] = await responseCourse.json();
            setCourse(responseCourseData[0]);
            console.log("course:", course);

            const responseAllTutorial = await fetch("http://localhost:3001/api/getTutorial", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "courseId": courseId })
            });
            setTopics(await responseAllTutorial.json());



        };

        fetchData();
    }, [courseId]);


    return (
        <div>
            <div className="topic">
                <div className=" flex-column Course-child">
                    <p className="head">{course?.courseName}</p>
                    <p className="description">{course?.description}</p>
                    <p className="createdDateTime">{course?.createdDateTime ? format(course.createdDateTime, 'MMMM dd, yyyy') : ''}</p>
                    <p className="createdBy">{course?.username}</p>
                    <button onClick={enrollHandler}>Enroll</button>
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
                <SideBar tutorialData={topics} />
            </div>
        </div>
    );
};

export default CoursePage;