import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { CustomerDto } from './dto/create-customer.dto';
import { DtoMapperService } from '../dto-mapper.service';


@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
    private readonly dtoMapper: DtoMapperService,
  ) {}

  create(dto: CustomerDto) {
    const customer = this.dtoMapper.mapCustomerFromDto(dto);
    return this.customerRepository.save(customer);
  }

  async update(id: number, dto: CustomerDto) {
    const updatedCustomer = this.dtoMapper.mapCustomerFromDto(dto);
    updatedCustomer.id = id;
    return this.customerRepository.save(updatedCustomer);
  }


  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  async findOne(id: number): Promise<Customer> {
    const res = await this.customerRepository.findOneBy({ id });
    if (!res) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }
    return res;
  }

  async remove(id: number): Promise<void> {
    await this.customerRepository.delete(id);
  }

}
