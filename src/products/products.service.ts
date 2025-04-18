import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductDto } from './dto/create-product.dto';
import { DtoMapperService } from '../dto-mapper.service';
import { Category } from '../categories/entities/category.entity';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ProductsService {

  private readonly productUpdates = new Subject<{ data: string }>();

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly dtoMapper: DtoMapperService,
) {}

  getProductUpdates(): Observable<{ data: string }> {
    return this.productUpdates.asObservable();
  }

  notifyProductUpdate(product: any) {
    this.productUpdates.next({
      data: JSON.stringify(product),
    });
  }

  async create(dto: ProductDto) {
    const product = this.dtoMapper.mapProductFromDto(dto);
    product.category = await this.categoryRepository.findOne({ where: { id: dto.categoryId } });
    const saved = await this.productRepository.save(product);

    this.notifyProductUpdate(saved);
    return saved;
  }

  async update(id: number, dto: ProductDto) {
    const updatedProduct = this.dtoMapper.mapProductFromDto(dto);
    updatedProduct.id = id;
    return this.productRepository.save(updatedProduct);
  }

  findAll() {
    return this.productRepository.find({ relations: ['category'] });
  }

  async findOne(id: number) {
    return this.productRepository.findOne({ where: { id }, relations: ['category'] });
  }

  async remove(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    return this.productRepository.delete(id);
  }
}
