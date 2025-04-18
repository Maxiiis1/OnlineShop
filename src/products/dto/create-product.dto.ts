import { Category } from '../../categories/entities/category.entity';

export class ProductDto {
  name: string;

  price: number;

  description: string;

  categoryId: number;

  mainImage: string;

  images: string[] | string;}
