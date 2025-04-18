import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './database.service';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { ReviewsModule } from './reviews/reviews.module';
import { PaymentsModule } from './payments/payments.module';
import { OrdersModule } from './orders/orders.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({ useClass: DatabaseService }), CustomersModule, ProductsModule, ReviewsModule, PaymentsModule, OrdersModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
