import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { Review } from './entities/review.entity';
import { DtoMapperService } from '../dto-mapper.service';

@Module({
  imports: [TypeOrmModule.forFeature([Review])],
  controllers: [ReviewsController],
  providers: [ReviewsService, DtoMapperService],
})
export class ReviewsModule {}
