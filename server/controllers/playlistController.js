const MsgHandler = require('../utils/MsgHandler');
const videoHelper = require('../helpers/videoHelper');

const playlist = [];

const getAll = () => playlist;

const add = async (videoId) => {
  const videoIndex = playlist.findIndex(v => v.id === videoId);

  if (videoIndex > -1) {
    throw MsgHandler.Video.AlreadyExist;
  }

  const video = await videoHelper.findVideo(videoId);

  if (video.id) {
    playlist.push(video);
    return MsgHandler.Video.Added;
  }
  throw MsgHandler.Video.NotFound;
};

const remove = async (videoId) => {
  const videoIndex = playlist.findIndex(v => v.id === videoId);
  if (videoIndex > -1) {
    playlist.splice(videoIndex, 1);
    return MsgHandler.Video.Removed;
  }
  throw MsgHandler.Video.NotFound;
};

module.exports = {
  getAll,
  add,
  remove,
};
