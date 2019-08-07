const { google } = require('googleapis');
const GoogleAuth = require('../googleAuth');

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
        duration: video.contentDetails.duration,
        thumbnail: video.snippet.thumbnails.default.url,
      });
    });
  });
};

module.exports = {
  searchVideo,
};
