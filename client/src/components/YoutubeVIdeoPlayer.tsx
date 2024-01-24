import React, { useState } from 'react';

export interface IYoutubeVidePlayerProps {
  videoId:string;
}

export default function YoutubeVidePlayer({videoId}: IYoutubeVidePlayerProps) {
  // const videoId = "ZzaPdXTrSb8";
  
  return (

      <div className="video-responsive">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>

  );
}
