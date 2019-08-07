import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeVideo } from '../actions';
import './style.scss';

const VideoPlayer = () => {
  const videoId = useSelector(state => state.playlist.activeVideoId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (videoId) {
      embeddedVideoPlayer();
    }
  }, [videoId]);

  const embeddedVideoPlayer = () => {
    new YT.Player('embedded-video=player', {
      height: '100%',
      width: '100%',
      videoId,
      playerVars: {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
      },
      events: {
        onStateChange: onVideoEnded,
      },
    });
  };

  const onVideoEnded = (event) => {
    if (event.data === YT.PlayerState.ENDED) {
      dispatch(removeVideo(videoId, dispatch));
      event.target.destroy();
    }
  };

  return (
    <div id="video-player-container">
      <div id="embedded-video=player" />
      {!videoId && <h3>Waiting for the first video...</h3>}
    </div>
  );
};

export default VideoPlayer;
