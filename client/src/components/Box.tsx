import React from 'react'

type Box = {
    heading: string;
    count?: number;
    func1: () => void;
}
function Box(props: Box) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <h2>{props.count && <p>{props.count}</p>}</h2>
            <button onClick={props.func1}>If you click i will log the data</button>
        </div>
    )
}

export default Box