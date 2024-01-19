import React, { useEffect, useState } from 'react';

export interface IYoutubeVidePlayerProps {}

export default function YoutubeVidePlayer(props: IYoutubeVidePlayerProps) {
  const videoId = "ZzaPdXTrSb8";
  
  return (
    <div>
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
    </div>
  );
}
