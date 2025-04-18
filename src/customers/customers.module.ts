import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { Customer } from './entities/customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DtoMapperService } from '../dto-mapper.service';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomersController],
  providers: [CustomersService, DtoMapperService],
})
export class CustomersModule {}
