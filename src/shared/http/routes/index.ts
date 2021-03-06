import { Router } from 'express';
import productsRouter from '@modules/products/routes/Products.routes';


const routes = Router();

routes.use('/products', productsRouter);
routes.get('/', (request, response) => {
  return response.json({ message: 'Sales api on' });
});
export default routes;
