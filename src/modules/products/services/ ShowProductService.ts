import AppError from '@shared/errors/AppError';
import Product from '../typeorm/entities/Product';
import { getCustomRepository } from 'typeorm';
import ProductRepository from '../typeorm/repositories/ProductRepeository';

interface IRequest {
 id: string;
}
class ShowProductService {
 public async execute({ id }: IRequest): Promise<Product | undefined> {
   const produtsRepository = getCustomRepository(ProductRepository);
   const product = await produtsRepository.findOne(id);
   if (!product) {
     throw new AppError('Product not found');
   }
   return product;
 }
}
export default ShowProductService;
