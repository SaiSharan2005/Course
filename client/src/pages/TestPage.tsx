import * as React from 'react';
import Gemini from "../components/Gemini"

export interface ITestPageProps {
}

export default function TestPage (props: ITestPageProps) {
  return (
  

    <div className="chat-notification">
      {/* <h1 className='text-7xl text-center'>Testing</h1> */}
  <div className="chat-notificavcdtion-logo-wrapper">
    <img className="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo" />
  </div>
  <div className="chat-notification-content">
    <h4 className="chat-notification-title">ChitChat</h4>
    <p className="chat-notification-message">You have a new message!</p>
  </div>
</div>
  );
}
