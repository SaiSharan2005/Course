import React, { useEffect, useState } from 'react';
import { SideBar } from '../components/SideBar';
import { useParams } from 'react-router-dom';
import YoutubeVidePlayer from '../components/YoutubeVIdeoPlayer';
import { Link } from 'react-router-dom';
import Gemini from "../components/Gemini"

export interface ITopicPageProps { }

interface ISubTopics {
    "topicId": number,
    "subTopicId": number,
    "topicName": string,
    "subTopicName": string,
    "yotubeLink": string,
    "createdDateTime": string,
    "duration": string
}

export default function TopicPage(props: ITopicPageProps) {
    const { courseId, subTopicId } = useParams();
    const [topics, setTopics] = useState<ISubTopics[]>([]);
    const [topic, setTopic] = useState<ISubTopics>();
    const [sidebarStatus,setSideBarStatus] = useState<boolean>(true);
    const [next, setNext] = useState<number | null>(1);
    const [back, setBack] = useState<number | null>(1);

    useEffect(() => {
        const fetchData = async () => {
            const responseAllTutorial = await fetch("http://localhost:3001/api/getTutorial", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "courseId": Number(courseId) })
            });

            const tutorials: ISubTopics[] = await responseAllTutorial.json();

            const findIndexBySubTopicId = (subTopicId: number) => {
                return tutorials.findIndex((item: ISubTopics) => item.subTopicId === subTopicId);
            };

            setTopics(tutorials);

            const currentSubTopicIdIndex = findIndexBySubTopicId(Number(subTopicId));

            let back, next;
            if (currentSubTopicIdIndex === 0) {
                back = null;
                next = tutorials[currentSubTopicIdIndex + 1]?.subTopicId || null;
            } else if (currentSubTopicIdIndex === tutorials.length - 1) {
                back = tutorials[currentSubTopicIdIndex - 1]?.subTopicId || null;
                next = null;
            } else {
                back = tutorials[currentSubTopicIdIndex - 1]?.subTopicId || null;
                next = tutorials[currentSubTopicIdIndex + 1]?.subTopicId || null;
            }

            setBack(back);
            setNext(next);

            // Update the current topic based on the subTopicId
            setTopic(tutorials[currentSubTopicIdIndex]);
        };

        fetchData();
    }, [subTopicId, courseId]); // Add subTopicId as a dependency

    return (
        <div className='d-flex flex-row topic-page'>
            {sidebarStatus?<div className="topic-sidebar">
                <SideBar tutorialData={topics} courseId={Number(courseId)} />
            </div>:<></>}
                 <button className="hide-show-sidebar" style={{display:"inline"}}onClick={()=>{setSideBarStatus(!sidebarStatus)}}>{sidebarStatus?"Hide":"Show"}</button>

            <div className="youtube-player ">
                <YoutubeVidePlayer videoId={topic?.yotubeLink || ""} />
                <div className="d-flex justify-content-between back-next-button">
                    {back && (
                        <Link className = "removeLinkEffect" to={`/Course/${courseId}/Topic/${back}`}>
                            <div className="topic-back videoplay">
                                <p className="fs-5">Back</p>
                            </div>
                        </Link>
                    )}
                    {next && (
                        <Link  className = "removeLinkEffect" to={`/Course/${courseId}/Topic/${next}`}>
                            <div className="topic-next videoplay">
                                <p className="fs-5">Next</p>
                            </div>
                        </Link>
                    )}
                </div>
                <div className="gemini-bot">
                <Gemini/>
                </div>
            </div>

        </div>
    );
}
