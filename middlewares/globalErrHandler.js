export const globalErrHandler = (err, req, res, next) => {
  // stack
  const stack = err?.stack;

  const statusCode = err?.statusCode ? err?.statusCode : 500;

  // message
  const message = err?.message;

  res.status(statusCode).json({
    stack,
    message
  });
};