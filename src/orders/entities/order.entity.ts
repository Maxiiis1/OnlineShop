import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { OrderItem } from './order-item.entity';
import { Customer } from '../../customers/entities/customer.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, { cascade: true })
  items: OrderItem[];

  @Column('decimal')
  total_price: number;

  @Column({ default: 'new' })
  status: string;

  @Column()
  shipping_address: string;

  @CreateDateColumn()
  created_at: Date;
}
