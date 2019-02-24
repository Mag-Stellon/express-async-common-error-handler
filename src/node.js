function syntaxErrorHandler(error, req, res, next) {
  if (error instanceof SyntaxError) {
    return res.status(400).json({
      type: 'Syntax Error',
      message: error.message
    });
  }
  next(error);
}

function rangeErrorHandler(error, req, res, next) {
  if (error instanceof RangeError) {
    return res.status(400).json({
      type: 'Range Error',
      message: error.message
    });
  }
  next(error);
}

function referenceErrorHandler(error, req, res, next) {
  if (error instanceof ReferenceError) {
    return res.status(500).json({
      type: 'Reference Error',
      message: error.message
    });
  }
  next(error);
}

function typeErrorHandler(error, req, res, next) {
  if (error instanceof TypeError) {
    return res.status(400).json({
      type: 'Type Error',
      message: error.message
    });
  }
  next(error);
}

function errorHandler(error, req, res, next) {
  if (error instanceof Error) {
    return res.status(500).json({
      type: 'Error',
      message: error.message
    });
  }
  next(error);
}

module.exports = [
  syntaxErrorHandler,
  rangeErrorHandler,
  referenceErrorHandler,
  typeErrorHandler,
  errorHandler,
];