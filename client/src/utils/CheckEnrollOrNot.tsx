import * as React from 'react';

export interface ICheckEnrollProps {
    courseId: Number;
    userId: Number;
}

export async function CheckEnroll ( courseId: Number,userId: Number) {
    const response = await fetch("http://localhost:3001/api/getEnrollOrNot",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({
            "courseId":1,
            "userId":27
           })
    })
    const responseFromServer = await response.json();
    // console.log(responseFromServer.)
    if (responseFromServer){
        return responseFromServer.result
        
    }
    else{
        
        // console.log("damed",responseFromServer)
    }
    
}
