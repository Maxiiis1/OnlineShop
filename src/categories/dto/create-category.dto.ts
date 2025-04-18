import { Product } from '../../products/entities/product.entity';

export class CategoryDto {

  name: string;
  description: string;
  products: Product[];
}
