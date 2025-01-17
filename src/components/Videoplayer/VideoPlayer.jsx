

import React from 'react';
import ReactPlayer from 'react-player/youtube';





const VideoPlayer = ({ url, onPlay, className }) => {
  return (
    <ReactPlayer
      url={url}
      onPlay={onPlay}
      loop
      // className={className}
       width={className}
          height='450px'
          
  
    />
  );
};

export default VideoPlayer;
