import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { Customer } from '../../customers/entities/customer.entity';


@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @Column('decimal')
  rating: number;

  @Column('text')
  comment: string;

  @CreateDateColumn()
  created_at: Date;
}
