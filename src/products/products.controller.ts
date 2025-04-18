import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Sse } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/create-product.dto';
import { Response } from 'express';
import { Observable } from 'rxjs';




@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Sse('events')
  productEvents(): Observable<{ data: string }> {
    return this.productsService.getProductUpdates();
  }

  @Post()
  async create(@Body() createProductDto: ProductDto, @Res() res: Response) {
    const createdProduct = await this.productsService.create(createProductDto);

    return res.json({
      message: 'Product created successfully',
      product: createdProduct,
    });
  }

  @Get()
  async findAll(@Res() res: Response) {
    const products = await this.productsService.findAll();
    res.render('catalog', { products });
  }

  @Get('new')
  getCreateForm(@Res() res: Response) {
    res.render('new-product-form', {
      isEdit: false,
      product: {}
    });
  }

  @Get(':id/edit')
  async getEditForm(@Param('id') id: number, @Res() res: Response) {
    const product = await this.productsService.findOne(+id);
    res.render('new-product-form', { isEdit: true, product });
  }

  @Get(':id')
  async getProductPage(@Param('id') id: number, @Res() res: Response) {
    const product = await this.productsService.findOne(id);
    res.render('product-page', { product });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: ProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
