import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Res } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerDto } from './dto/create-customer.dto';
import { Response } from 'express';


@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() createCustomerDto: CustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const customer = await this.customersService.findOne(+id);

      return res.render('customers/show', { customer });

    } catch (error) {
      if (error instanceof NotFoundException) {
        return res.status(404).render('error', {
          message: error.message,
        });
      }
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: CustomerDto) {
    return this.customersService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }
}
