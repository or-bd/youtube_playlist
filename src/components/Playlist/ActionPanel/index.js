import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlaylistVideo } from '../actions';
import SearchField from '../../App/SearchField';
import Alert from '../../App/Alert';
import VideoList from './VideoList';
import './style.scss';

const ActionPanel = () => {
  const dispatch = useDispatch();

  const onVideoSubmit = (videoId) => {
    if (videoId) {
      dispatch(addPlaylistVideo(videoId, dispatch));
    }
  };

  return (
    <div id="action-panel-container">
      <SearchField onSubmit={onVideoSubmit} />
      <Alert />
      <VideoList />
    </div>
  );
};

export default ActionPanel;
