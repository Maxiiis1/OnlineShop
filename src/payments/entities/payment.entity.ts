import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column()
  payment_method: string;

  @Column({ default: 'pending' })
  payment_status: string;

  @Column('decimal')
  amount: number;

  @CreateDateColumn()
  payment_date: Date;
}
