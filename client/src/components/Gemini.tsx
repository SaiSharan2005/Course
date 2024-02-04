// import React, { useState, useRef, useEffect } from 'react';
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI('AIzaSyA35cj_5z_yNdX-eE14e7uUKB7hOJnXDOA');
// const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// const Chatbot = () => {
//   const [userInput, setUserInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [botResponse, setBotResponse] = useState('');
//   const responseContainerRef = useRef<HTMLDivElement>(null);

//   const handleChangeUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setUserInput(e.target.value);
//   }

//   const handleSend = () => {
//     if (userInput.trim() === '') {
//       return; // Don't send empty messages
//     }

//     // Perform your Generative AI logic here
//     aiRun();
//   }

//   // Generative AI Call to fetch bot response
//   async function aiRun() {
//     setLoading(true);

//     const prompt = `user: ${userInput}`;
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = await response.text();

//     setBotResponse(text);
//     setLoading(false);
//   }

//   // Scroll to the bottom of the response container when bot responds
//   useEffect(() => {
//     if (responseContainerRef.current) {
//       responseContainerRef.current.scrollTop = responseContainerRef.current.scrollHeight;
//     }
//   }, [botResponse]);

//   return (
//     <div style={{backgroundColor:"white", padding:"2px",border:"2px solid black",borderRadius:"4px"}}>
//       <h4>Ask Your Doubts</h4>

//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <input
//           style={{ marginLeft:'10px' ,padding: '5px' }} // Adjust width and padding as needed
//           placeholder='Type a message...'
//           value={userInput}
//           onChange={(e) => handleChangeUserInput(e)}
//         />

//         <button style={{ marginLeft: '5px', borderRadius: "3px" }} onClick={() => handleSend()}>Ask</button>
//       </div>

//       <div
//         style={{
//           maxHeight: '200px', // Set a maximum height for the container
//           overflowY: 'auto',  // Add a vertical scroll bar when content overflows
//           margin: '10px 0',
//         }}
//         ref={responseContainerRef}
//       >
//         {loading && userInput !== '' ? (
//           <p style={{ margin: '10px 0', fontSize:"12px" }}>Bot is typing...</p>
//         ) : (
//           <p style={{ margin: '10px 0', fontSize:"12px" }}>{botResponse}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI('AIzaSyA35cj_5z_yNdX-eE14e7uUKB7hOJnXDOA');
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [botResponse, setBotResponse] = useState('');
  const responseContainerRef = useRef<HTMLDivElement>(null);

  const handleChangeUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  }

  const handleSend = () => {
    if (userInput.trim() === '') {
      return; // Don't send empty messages
    }

    // Perform your Generative AI logic here
    aiRun();
  }

  // Generative AI Call to fetch bot response
  async function aiRun() {
    setLoading(true);

    const prompt = `user: ${userInput}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    setBotResponse(text);
    setLoading(false);
  }

  // Scroll to the bottom of the response container when bot responds
  useEffect(() => {
    if (responseContainerRef.current) {
      responseContainerRef.current.scrollTop = responseContainerRef.current.scrollHeight;
    }
  }, [botResponse]);

  return (
    <div style={{ backgroundColor: "#f4f4f4", padding: "15px", border: "2px solid #ddd", borderRadius: "8px", margin: "auto" }}>
      <h4 style={{ marginBottom: "10px", textAlign: "center", color: "#333" }}>Ask Your Doubts</h4>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          style={{ flex: 1, padding: '10px', borderRadius: "5px", border: "1px solid #ddd", marginRight: "10px" }}
          placeholder='Type a message...'
          value={userInput}
          onChange={(e) => handleChangeUserInput(e)}
        />

        <button
          style={{ padding: '10px', borderRadius: "5px", backgroundColor: "#4CAF50", color: "#fff", cursor: "pointer" }}
          onClick={() => handleSend()}
        >
          Ask
        </button>
      </div>

      <div
        style={{
          maxHeight: '200px',
          overflowY: 'auto',
          margin: '10px 0',
        }}
        ref={responseContainerRef}
      >
        {loading && userInput !== '' ? (
          <p style={{ margin: '10px 0', fontSize: "12px", color: "#777" }}>Bot is typing...</p>
        ) : (
          <p style={{ margin: '10px 0', fontSize: "0.8em", color: "#333" }}>{botResponse}</p>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
