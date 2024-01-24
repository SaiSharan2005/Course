// const updatedData = data.map((item, index) => {
//       const topicId = item.topicId;

//       // Find the index of the previous subTopic with the same topicId
//       const backIndex = data.slice(0, index).reverse().findIndex((prevItem) => prevItem.topicId === topicId);

//       // Find the index of the next subTopic with the same topicId
//       const nextIndex = data.slice(index + 1).findIndex((nextItem) => nextItem.topicId === topicId);

//       return {
//         ...item,
//         back: backIndex !== -1 ? data[backIndex + index - 1].subTopicId : null,
//         next: nextIndex !== -1 ? data[nextIndex + index + 1].subTopicId : null,
//       };
//     });

const data = [
    {
        "topicId": 1,
        "subTopicId": 1,
        "topicName": "Topic 1 for Course 1",
        "subTopicName": "SubTopic 1 for Topic 1",
        "yotubeLink": "youtube_link_1",
        "createdDateTime": "2024-01-15T12:22:25.000Z",
        "duration": "00:12:13"
    },
    {
        "topicId": 1,
        "subTopicId": 2,
        "topicName": "Topic 1 for Course 1",
        "subTopicName": "SubTopic 2 for Topic 1",
        "yotubeLink": "youtube_link_2",
        "createdDateTime": "2024-01-15T12:22:25.000Z",
        "duration": "00:12:13"
    },
    {
        "topicId": 2,
        "subTopicId": 3,
        "topicName": "Topic 2 for Course 1",
        "subTopicName": "SubTopic 1 for Topic 2",
        "yotubeLink": "youtube_link_3",
        "createdDateTime": "2024-01-15T12:22:25.000Z",
        "duration": "00:12:13"
    }
]



const SubTopic = 1;