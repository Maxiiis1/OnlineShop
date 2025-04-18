import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';
import { PaymentDto } from './dto/create-payment.dto';
import { DtoMapperService } from '../dto-mapper.service';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
    private readonly dtoMapper: DtoMapperService,
  ) {}

  create(dto: PaymentDto) {
    const payment = this.dtoMapper.mapPaymentFromDto(dto);
    return this.paymentRepository.save(payment);
  }

  async update(id: number, dto: PaymentDto) {
    const updatedPayment = this.dtoMapper.mapPaymentFromDto(dto);
    updatedPayment.id = id;
    return this.paymentRepository.save(updatedPayment);
  }
  findAll() {
    return this.paymentRepository.find();
  }

  findOne(id: number) {
    return this.paymentRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.paymentRepository.delete(id);
  }
}
