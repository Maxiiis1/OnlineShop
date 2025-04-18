import { Order } from '../../orders/entities/order.entity';

export class PaymentDto {

  order: Order;

  payment_method: string;

  payment_status: string;

  amount: number;

  payment_date: Date;
}
