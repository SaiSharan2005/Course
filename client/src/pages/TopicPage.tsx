import React, { useEffect, useState } from 'react';
import { SideBar } from '../components/SideBar';
import { useParams } from 'react-router-dom';

export interface ITopicPageProps { }

export default function TopicPage(props: ITopicPageProps) {
    const [topic, setTopic] = useState([]);
    const { courseId, TopicId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const responseAllTutorial = await fetch("http://localhost:3001/api/getTutorial", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "courseId": courseId })
            });
            setTopic(await responseAllTutorial.json());
        }
        fetchData();
    }, [])
    return (
        <div className='d-flex flex-row'>
            <div className="topic-sidebar">
                <SideBar tutorialData={topic} />
            </div>
            <div className="youtube-player">

            </div>
        </div>
    );
}
