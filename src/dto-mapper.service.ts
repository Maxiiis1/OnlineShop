import { Injectable } from '@nestjs/common';
import { Product } from './products/entities/product.entity';
import { ProductDto } from './products/dto/create-product.dto';

import { Category } from './categories/entities/category.entity';
import { CategoryDto } from './categories/dto/create-category.dto';

import { Customer } from './customers/entities/customer.entity';
import { CustomerDto } from './customers/dto/create-customer.dto';

import { Order } from './orders/entities/order.entity';
import { OrderDto } from './orders/dto/create-order.dto';

import { Payment } from './payments/entities/payment.entity';
import { PaymentDto } from './payments/dto/create-payment.dto';

@Injectable()
export class DtoMapperService {
  mapProductFromDto(dto: ProductDto): Product {
    const product = new Product();
    product.name = dto.name;
    product.price = dto.price;
    product.description = dto.description;
    product.mainImage = dto.mainImage;
    product.images = typeof dto.images === 'string' ? dto.images.split(',').map(i => i.trim()) : dto.images;
    return product;
  }

  mapCategoryFromDto(dto: CategoryDto): Category {
    const category = new Category();
    category.name = dto.name;
    category.description = dto.description;
    return category;
  }

  mapCustomerFromDto(dto: CustomerDto): Customer {
    const customer = new Customer();
    customer.username = dto.username;
    customer.email = dto.email;
    customer.password = dto.password;
    customer.role = dto.role ?? 'user';
    return customer;
  }

  mapOrderFromDto(dto: OrderDto): Order {
    const order = new Order();
    order.customer = dto.customer as any;
    order.items = dto.items as any;
    order.total_price = dto.total_price;
    order.status = dto.status ?? 'new';
    order.shipping_address = dto.shipping_address;
    return order;
  }

  mapPaymentFromDto(dto: PaymentDto): Payment {
    const payment = new Payment();
    payment.order = dto.order as any;
    payment.payment_method = dto.payment_method;
    payment.payment_status = dto.payment_status ?? 'pending';
    payment.amount = dto.amount;
    return payment;
  }
}
