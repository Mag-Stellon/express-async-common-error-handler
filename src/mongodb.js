const { MongoError } = require('mongodb');

function handler(error, req, res, next) {
    if (error instanceof MongoError) {
      return res.status(503).json({
        type: 'MongoDB Error',
        message: error.message
      });
    }
    next(error);
}

module.exports = handler;