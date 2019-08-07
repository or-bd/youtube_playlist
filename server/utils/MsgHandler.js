const newMsg = (type, code, msg) => ({ type, code, msg });

module.exports = {
  General: {
    InvalidParams: newMsg('error', 400, 'Invalid input params'),
  },
  Video: {
    NotFound: newMsg('error', 404, 'Video not found.'),
    Added: newMsg('success', 201, 'Video added successfully!'),
    AlreadyExist: newMsg('success', 200, 'Video already on list.'),
    Removed: newMsg('success', 200, 'Video removed successfully!'),
  },
};
