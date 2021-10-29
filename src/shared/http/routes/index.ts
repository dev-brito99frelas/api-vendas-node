import { Router } from 'express';

const routes = Router();
routes.get('/', (request, response) => {
  return response.json({ message: 'Sales api on' });
});
export default routes;
