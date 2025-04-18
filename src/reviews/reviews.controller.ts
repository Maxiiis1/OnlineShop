import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewDto } from './dto/create-review.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  create(@Body() createReviewDto: ReviewDto) {
    return this.reviewsService.create(createReviewDto);
  }

  @Get()
  findAll() {
    return this.reviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() ReviewDto: ReviewDto) {
    return this.reviewsService.update(+id, ReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(+id);
  }
}
