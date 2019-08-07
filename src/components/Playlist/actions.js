import { API, APP } from '../../store/actions';

export const getPlaylist = (dispatch, callback) => ({
  type: API.GET_PLAYLIST,
  url: '/api/playlist',
  method: 'GET',
  onSuccess: (playlist) => {
    callback();
    dispatch({ type: APP.SET_PLAYLIST, playlist });
  },
  onFailure: callback,
});

export const removeVideo = (videoId, dispatch) => ({
  type: API.GET_PLAYLIST,
  url: '/api/playlist',
  method: 'DELETE',
  data: { videoId },
  onSuccess: alert => dispatch({ type: APP.SET_ALERT, alert }),
  onFailure: alert => dispatch({ type: APP.SET_ALERT, alert }),
});

export const addPlaylistVideo = (videoId, dispatch) => ({
  type: API.POST_VIDEO,
  url: '/api/playlist',
  method: 'POST',
  data: { videoId },
  onSuccess: alert => dispatch({ type: APP.SET_ALERT, alert }),
  onFailure: alert => dispatch({ type: APP.SET_ALERT, alert }),
});

export const add = (videoId, callback) => ({
  type: API.POST_VIDEO,
  url: '/api/playlist',
  method: 'POST',
  data: { videoId },
  onSuccess: callback,
  onFailure: callback,
});
