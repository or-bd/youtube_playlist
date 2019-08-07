import React from 'react';
import VideoList from './ActionPanel';
import VideoPlayer from './VideoPlayer';
import './style.scss';

const App = () => (
  <div id="playlist-container">
    <VideoList />
    <VideoPlayer />
  </div>
);

export default App;
