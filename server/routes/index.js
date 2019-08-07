const express = require('express');
const playlistCtrl = require('../controllers/playlistController');

const router = express.Router();

const catcher = fn => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    res.status(err.code).json(err);
  }
};

/*
  This route should be removed and replaced by websocket connection foreach client
  to get push data from the server only when the playlist updated instead of interval requests.
*/
router.get('/playlist', catcher(async (req, res) => {
  const playlist = await playlistCtrl.getAll();
  res.json(playlist);
}));

router.post('/playlist', catcher(async (req, res) => {
  const { videoId } = req.body;
  const playlist = await playlistCtrl.add(videoId);
  res.status(201).json(playlist);
}));

router.delete('/playlist', catcher(async (req, res) => {
  const { videoId } = req.body;
  const playlist = await playlistCtrl.remove(videoId);
  res.json(playlist);
}));

module.exports = router;
