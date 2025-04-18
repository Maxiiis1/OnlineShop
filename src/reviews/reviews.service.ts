import { Injectable } from '@nestjs/common';
import { ReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {
  create(createReviewDto: ReviewDto) {
    return 'This action adds a new review';
  }

  findAll() {
    return `This action returns all reviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  update(id: number, updateReviewDto: ReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
