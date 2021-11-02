import AppError from '@shared/errors/AppError';
import Product from '../typeorm/entities/Product';
import { getCustomRepository } from 'typeorm';
import ProductRepository from '../typeorm/repositories/ProductRepeository';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const produtsRepository = getCustomRepository(ProductRepository);
    const products = await produtsRepository.find(); //uso o fin() e ele traz todos
    if (!products) {
      throw new AppError('There is alredy one product whit this name');
    }
    return products;
  }
}
export default ListProductService;
