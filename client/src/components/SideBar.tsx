import React, { useState } from 'react';
import {InputItem, TutorialFormater,OutputItem } from '../utils/TutorialFormater';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

export function SideBar({ tutorialData,courseId}: { tutorialData: InputItem[],courseId:number }) {
    const { resultArray } = TutorialFormater(tutorialData);
    // console.log("result:",resultArray)

    const styles = {
        hrstyle: {
            margin: "0px",
            height: "2px",
            backgroundColor: "black",
            opacity: "1"
        }
    };

    const [expandedTopics, setExpandedTopics] = useState<number[]>([]);

    const toggleSubTopics = (topicId: number) => {
        setExpandedTopics((prevExpandedTopics) =>
            prevExpandedTopics.includes(topicId)
                ? prevExpandedTopics.filter((id) => id !== topicId)
                : [...prevExpandedTopics, topicId]
        );
    };

    return (
        <div className='sidebar'>
            {resultArray.map((topic) => (
                <div key={topic.topicId} className='sidebar-topic'>
                    <h4 className="topicName" onClick={() => toggleSubTopics(topic.topicId)}>
                        {topic.topicName}
                    </h4>

                    {expandedTopics.includes(topic.topicId) && (
                        <div className="subTopic">
                            {topic.subTopics.map((subTopic) => (
                             <>
                                    <Link to={`/Course/${Number(courseId)}/Topic/${subTopic.subTopicId}`} className='removeLinkEffect'>
                                <div key={subTopic.subTopicId} className={`${subTopic.subTopicId} subTopic d-flex flex-row justify-content-between`}>
                                    <p className="subTopicName">{subTopic.subTopicName}</p>
                                    <p className="subTopicDate">{subTopic.duration}</p>
                                </div>
                                    </Link>
                                    </>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}






// import * as React from 'react';
// import { TutorialFormater } from '../utils/TutorialFormater';


// interface InputItem {
//     topicId: number;
//     subTopicId: number;
//     topicName: string;
//     subTopicName: string;
//     yotubeLink: string;
//     createdDateTime: string;
// }
// interface OutputItem {
//     topicId: number;
//     topicName: string;
//     subTopics: {
//         subTopicId: number;
//         subTopicName: string;
//         youtubeLink: string;
//         createdDateTime: string;
//     }[];
// }

// export function SideBar ({tutorialData}: {tutorialData:InputItem[]}) {
//     const styles = {
//         hrstyle:{
//             margin:"0px",
//             height:"2px",
//             backgroundColor:"black",
//             opacity:"1"
//         }
//     }
//     const {resultArray} = TutorialFormater(tutorialData)
//     console.log(resultArray)
//   return (
//       <div className='sidebar'>
//       {resultArray.map((topic)=>(
//         <div>
//         <div key = {topic.topicId}>
//             <h4 className="topicName">{topic.topicName} </h4>
//             <hr  style={styles.hrstyle}/>

//             <div className="subTopic">
//                 {topic.subTopics.map((subTopic)=>(
//                     <div className={`${subTopic.subTopicId} subTopic`}>
//                         <p className="subTopicName">{subTopic.subTopicName}</p>                      
//                         <hr style={styles.hrstyle}/>
//                     </div>
//                 ))}
//             </div>
//             {/* <hr  style={styles.hrstyle}/> */}

//         </div>
        

//         </div>
//       ))}
//     </div>
//   );
// }
