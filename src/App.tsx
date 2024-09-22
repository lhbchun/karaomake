import React, { ReactNode } from 'react';
import logo from './logo.svg';
import './App.css';
import { JsxElement } from 'typescript';

interface YouTubeEmbedProps {
  videoId: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
}

interface RibbonButton {
  text: string;
  directory: string;
}

var songButton = {text: 'Songs', directory: '/songs'};

var defaultEmbedProps: YouTubeEmbedProps = {
  videoId: 'Lg0Djk3DoQI',
  width: 560,
  height: 315,
  autoplay: true
};

function App(){
  let testVideo = {videoId: 'Lg0Djk3DoQI', width: 100, height: 100, autoplay: true};
  // dark grey background on everything
  return (
    <div className="two-column">
      <div className="column">
        {createMenu()}
      </div>
      <div className="column">
        {VideoPlayer(YouTubeEmbed(testVideo))}
      </div>
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

function VideoPlayer(videoInput: ReactNode){
  // a 960px x 540 px frane
  // The top 960px x 440px should be the video player, left the rest empty for now {videoInput}
  return(
    <div style={{width: '640px', height: '480px', margin: 'auto', textAlign: 'center', border: '10px solid red',borderRadius: '10px',  padding: '10px'}}>
      <div className="two-row">
        <div style={{height: 'calc(100% - 100px)'}}>{videoInput}</div>
        <div></div>
        
      </div>
    </div>
  );
}

function PageTitle(){
  return(
    <h1>Karaomake</h1>
  );
}

function createMenu(){
  // create a menu frame on the left side of the UI, it should be grey Color
  return(
    <div style={{backgroundColor: 'grey', width: '150px', height: '100%', position: 'fixed', top: 0, left: 0}}>
      <div style={{backgroundColor: 'grey', color: 'white', width: '100px', height: '50px', textAlign: 'center', lineHeight: '50px', margin: 'auto'}}>Songs</div>
    </div>
  );
}

export default App;
