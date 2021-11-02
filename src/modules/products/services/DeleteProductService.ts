import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProductRepository from '../typeorm/repositories/ProductRepeository';

interface IRequest {
 id: string;
}
class DeleteProductService {
 public async execute({ id }: IRequest): Promise<void> {
   const produtsRepository = getCustomRepository(ProductRepository);
   const product = await produtsRepository.findOne(id);
   if (!product) {
     throw new AppError('Product not found');
   }
   await produtsRepository.remove(product);
 }
}
export default DeleteProductService;

