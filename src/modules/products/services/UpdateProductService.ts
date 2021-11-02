import AppError from '@shared/errors/AppError';
import Product from '../typeorm/entities/Product';
import { getCustomRepository } from 'typeorm';
import ProductRepository from '../typeorm/repositories/ProductRepeository';

interface IRequest {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
class UpdateProductService {
  public async execute({
    id,
    name,
    price,
    quantity,
  }: IRequest): Promise<Product | undefined> {
    const produtsRepository = getCustomRepository(ProductRepository);
    const product = await produtsRepository.findOne(id);
    if (!product) {
      throw new AppError('Product not found');
    }
    const productExists = await produtsRepository.findByName(name);
    if (productExists) {
      throw new AppError('There is alredy one product whit this name');
    }
    product.name = name;
    product.price = price;
    product.quantity = quantity;
    await produtsRepository.save(product);
    return product;
  }
}
export default UpdateProductService;
