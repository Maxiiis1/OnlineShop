import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderDto } from './dto/create-order.dto';
import { DtoMapperService } from '../dto-mapper.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly dtoMapper: DtoMapperService,
  ) {}

  create(dto: OrderDto) {
    const order = this.dtoMapper.mapOrderFromDto(dto);
    return this.orderRepository.save(order);
  }

  async update(id: number, dto: OrderDto) {
    const updatedOrder = this.dtoMapper.mapOrderFromDto(dto);
    updatedOrder.id = id;
    return this.orderRepository.save(updatedOrder);
  }

  findAll() {
    return this.orderRepository.find();
  }

  findOne(id: number) {
    return this.orderRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.orderRepository.delete(id);
  }
}
