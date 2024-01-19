import * as React from 'react';


export interface InputItem {
    topicId: number;
    subTopicId: number;
    topicName: string;
    subTopicName: string;
    yotubeLink: string;
    createdDateTime: string;
    duration:string;
}

export interface OutputItem {
    topicId: number;
    topicName: string;
    subTopics: {
        subTopicId: number;
        subTopicName: string;
        youtubeLink: string;
        createdDateTime: string;
        duration:string;
    }[];
}

export function TutorialFormater(props: InputItem[]) {


    // const inputArray: InputItem[] = [
    //     {
    //         "topicId": 1,
    //         "subTopicId": 1,
    //         "topicName": "Topic 1 for Course 1",
    //         "subTopicName": "SubTopic 1 for Topic 1",
    //         "yotubeLink": "youtube_link_1",
    //         "createdDateTime": "2024-01-15T12:22:25.000Z"
    //     },
    //     {
    //         "topicId": 1,
    //         "subTopicId": 2,
    //         "topicName": "Topic 1 for Course 1",
    //         "subTopicName": "SubTopic 2 for Topic 1",
    //         "yotubeLink": "youtube_link_2",
    //         "createdDateTime": "2024-01-15T12:22:25.000Z"
    //     },
    //     {
    //         "topicId": 2,
    //         "subTopicId": 3,
    //         "topicName": "Topic 2 for Course 1",
    //         "subTopicName": "SubTopic 1 for Topic 2",
    //         "yotubeLink": "youtube_link_3",
    //         "createdDateTime": "2024-01-15T12:22:25.000Z"
    //     }
    // ];

    const resultArray: OutputItem[] = props.reduce((acc: OutputItem[], item: InputItem) => {
        const existingTopic = acc.find(topic => topic.topicId === item.topicId);

        if (existingTopic) {
            existingTopic.subTopics.push({
                subTopicId: item.subTopicId,
                subTopicName: item.subTopicName,
                youtubeLink: item.yotubeLink,
                createdDateTime: item.createdDateTime,
                duration: item.duration
            });
        } else {
            acc.push({
                topicId: item.topicId,
                topicName: item.topicName,
                subTopics: [
                    {
                        subTopicId: item.subTopicId,
                        subTopicName: item.subTopicName,
                        youtubeLink: item.yotubeLink,
                        createdDateTime: item.createdDateTime,
                        duration: item.duration
                    }
                ]
            });
        }

        return acc;
    }, []);

    return { resultArray };

}
