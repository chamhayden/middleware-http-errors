import { Request, Response, NextFunction } from 'express';

const errorHandler = (opts = {}) => (err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || err.statusCode || 500;
  console.log(statusCode === 500 ? err : err.message);
  res.status(statusCode).json({
    error: {
      message: err.message,
    },
  });
  return next();
};

export default errorHandler;
