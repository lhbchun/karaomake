import React from 'react';
import logo from './logo.svg';
import './App.css';

interface YouTubeEmbedProps {
  videoId: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
}

var defaultEmbedProps: YouTubeEmbedProps = {
  videoId: 'Lg0Djk3DoQI',
  width: 560,
  height: 315,
  autoplay: true
};

function App(){
  return (
    <div>
      <h1>My YouTube Video</h1>
      <YouTubeEmbed videoId="Lg0Djk3DoQI" width={100} height={100} autoplay={true} />
    </div>
  );
};

function YouTubeEmbed(videoInfo: YouTubeEmbedProps = defaultEmbedProps) {

  const autoplayParam = videoInfo.autoplay ? '1' : '0';
  const url = `https://www.youtube.com/embed/${videoInfo.videoId}?autoplay=${autoplayParam}`;
  
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', margin: 'auto' }}>
      <iframe
        title="YouTube video player"
        width={videoInfo.width}
        height={videoInfo.height}
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      ></iframe>
    </div>
  );
}


export default App;
