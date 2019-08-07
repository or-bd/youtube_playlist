const NodeCache = require('node-cache');
const youtube = require('../utils/youtube/actions');

/*
  For this specific project process cache is enough,
  for a scalable solution I would use a third-party cache like Redis.
*/

const appCache = new NodeCache();

const findVideo = async (videoId) => {
  const existVideo = await appCache.get(videoId);

  if (existVideo) {
    return existVideo;
  }

  const video = await youtube.searchVideo(videoId);
  await appCache.set(videoId, video);
  return video;
};

module.exports = {
  findVideo,
};
