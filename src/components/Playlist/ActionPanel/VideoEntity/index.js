import React from 'react';
import { useDispatch } from 'react-redux';
import { removeVideo } from '../../actions';

const VideoList = ({ id, title, thumbnail, duration }) => {
  const dispatch = useDispatch();
  return (
    <li className="video-entity">
      <img src={thumbnail} alt={title} />
      <div className="video-info">
        <span className="video-title">{title}</span>
        <span className="video-duration">Duration: {duration}</span>
        <span className="remove-video" onClick={() => dispatch(removeVideo(id, dispatch))}>X</span>
      </div>
    </li>
  );
};

export default VideoList;
