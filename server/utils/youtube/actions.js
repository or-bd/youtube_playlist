const { google } = require('googleapis');
const moment = require('moment');
const GoogleAuth = require('../googleAuth');

const isoStringToTime = (isoString) => {
  const durationInSec = moment.duration(isoString).asSeconds();
  const sec_num = parseInt(durationInSec, 10);
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  let seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours < 10) { hours = `0${hours}`; }
  if (minutes < 10) { minutes = `0${minutes}`; }
  if (seconds < 10) { seconds = `0${seconds}`; }
  return `${hours}:${minutes}:${seconds}`;
};

const searchVideo = async (videoId) => {
  const auth = await GoogleAuth.getClient();
  const service = google.youtube('v3');

  return new Promise((resolve, reject) => {
    service.videos.list({
      auth,
      id: videoId,
      part: 'snippet,contentDetails',
    }, (err, { data: { items } }) => {
      if (err) {
        reject(new Error(`The API returned an error: ${err}`));
        return;
      }
      const [video] = items;

      if (!video) {
        resolve({});
        return;
      }

      resolve({
        id: video.id,
        title: video.snippet.title,
        duration: isoStringToTime(video.contentDetails.duration),
        thumbnail: video.snippet.thumbnails.default.url,
      });
    });
  });
};

module.exports = {
  searchVideo,
};
