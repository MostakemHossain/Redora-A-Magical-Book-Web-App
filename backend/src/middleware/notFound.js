import httpStatus from 'http-status';

const notFound = (req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API not Found',
    error: {
      path: req.originalUrl,
      message: 'Your requested path is not found',
    },
  });
};

export default notFound;