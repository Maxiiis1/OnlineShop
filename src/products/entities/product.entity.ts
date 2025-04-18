import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal')
  price: number;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category | null;

  @Column({ nullable: true })
  mainImage: string;

  @Column('text', { array: true, nullable: true })
  images: string[];
}
