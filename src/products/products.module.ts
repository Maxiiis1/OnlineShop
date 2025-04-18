// src/products/products.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity'; // ✅ сущность
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { DtoMapperService } from '../dto-mapper.service';
import { Category } from '../categories/entities/category.entity';
import { Subject } from 'rxjs';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Category]),
  ],
  providers: [ProductsService,
    DtoMapperService,
    {
    provide: Subject,
    useValue: new Subject<MessageEvent>(),
    },
  ],
  controllers: [ProductsController],
  exports: [ProductsService],
})
export class ProductsModule {}
