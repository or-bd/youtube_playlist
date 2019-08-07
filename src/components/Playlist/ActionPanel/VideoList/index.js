import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPlaylist } from '../../actions';
import VideoEntity from '../VideoEntity';

let playlistInterval;

const VideoList = () => {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.playlist.videos);

  useEffect(() => {
    watchPlaylist();

    return () => {
      clearTimeout(playlistInterval);
    };
  }, []);

  const watchPlaylist = () => {
    dispatch(getPlaylist(dispatch, () => {
      playlistInterval = setTimeout(watchPlaylist, 2000);
    }));
  };

  return (
    <div id="video-list-container">
      <ul>{videos.map(video => <VideoEntity key={video.id} {...video} />)}</ul>
      {!videos.length && <h3>Add YouTube video ID from the search field above :)</h3>}
    </div>
  );
};

export default VideoList;
