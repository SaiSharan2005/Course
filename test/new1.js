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
        "topicId": 1,
        "subTopicId": 4,
        "topicName": "Topic 1 for Course 1",
        "subTopicName": "SubTopic 3 for Topic 1",
        "yotubeLink": "youtube_link_2",
        "createdDateTime": "2024-01-20T13:09:14.000Z",
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



const currentSubTopicId = 3;


const findIndexBySubTopicId = (subTopicId) => {
    return data.findIndex(item => item.subTopicId === subTopicId);
  };
  

const currentSubTopicIdIndex = findIndexBySubTopicId(currentSubTopicId);
console.log(currentSubTopicIdIndex,data.length)
let back,next;
if (currentSubTopicIdIndex===0){
    back = null
    next = data[currentSubTopicIdIndex+1].subTopicId
}
else if(currentSubTopicIdIndex === data.length-1){
    back = data[currentSubTopicIdIndex-1].subTopicId
    next = null;
}
else{
    back = data[currentSubTopicIdIndex-1].subTopicId
    next = data[currentSubTopicIdIndex+1].subTopicId
}

console.log(back,next);