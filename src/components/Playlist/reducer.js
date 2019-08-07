import { APP } from '../../store/actions';

const initialState = {
  videos: [],
  activeVideoId: null,
  alert: {},
};

const playlist = (state = initialState, action) => {
  switch (action.type) {
    case APP.SET_PLAYLIST:
      return {
        ...state,
        videos: action.playlist,
        activeVideoId: action.playlist[0] ? action.playlist[0].id : null,
      };
    case APP.SET_ACTIVE_VIDEO:
      return {
        ...state,
        activeVideo: action.activeVideo,
      };
    case APP.SET_ALERT:
      return {
        ...state,
        alert: action.alert,
      };
    case APP.REMOVE_ALERT:
      return {
        ...state,
        alert: {},
      };
    default:
      return state;
  }
};

export default playlist;
