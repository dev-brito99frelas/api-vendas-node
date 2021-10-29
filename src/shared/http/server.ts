import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '../errors/AppError';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
/**
 *  @description Middleware for error handling with our application's error class*/
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response
        .status(error.statuscode)
        .json({ status: 'error', message: error.message });
    }
    return response
      .status(500)
      .json({ status: 'error', message: 'Internal Server Error' });
  },
);

app.listen(3333, () => {
  console.log('Server started  on port 3333 ;) ');
});
