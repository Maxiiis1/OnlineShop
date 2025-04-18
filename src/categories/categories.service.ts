import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CategoryDto } from './dto/create-category.dto';
import { DtoMapperService } from '../dto-mapper.service';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly dtoMapper: DtoMapperService,
  ) {}

  create(dto: CategoryDto) {
    const category = this.dtoMapper.mapCategoryFromDto(dto);
    return this.categoryRepository.save(category);
  }

  async update(id: number, dto: CategoryDto) {
    const updatedCategory = this.dtoMapper.mapCategoryFromDto(dto);
    updatedCategory.id = id;
    return this.categoryRepository.save(updatedCategory);
  }

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(id: number) {
    return this.categoryRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.categoryRepository.delete(id);
  }
}
