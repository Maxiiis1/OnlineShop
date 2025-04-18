import { Column, CreateDateColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Customer } from '../../customers/entities/customer.entity';
import { OrderItem } from '../entities/order-item.entity';

export class OrderDto {

  customer: Customer;

  items: OrderItem[];

  total_price: number;

  status: string;

  shipping_address: string;

  created_at: Date;
}
