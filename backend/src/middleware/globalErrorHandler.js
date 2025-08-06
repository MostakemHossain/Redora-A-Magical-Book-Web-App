import httpStatus from 'http-status';
const globalErrorHandler = (
  err,
  req,
  res,
  next
) => {
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message || 'Something went wrong',
    error: err,
  });
};
export default globalErrorHandler;