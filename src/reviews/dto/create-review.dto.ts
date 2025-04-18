import { Product } from '../../products/entities/product.entity';
import { Customer } from '../../customers/entities/customer.entity';

export class ReviewDto {
  product: Product;

  customer: Customer;

  rating: number;

  comment: string;

  created_at: Date;
}
