import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(private readonly productService: ProductsService) { }

  async runSeed() {
    await this.insertNewProducts();
    return 'seed execute';
  }

  private async insertNewProducts() {
    this.productService.deleteAllProducts();

    const product = initialData.products;
    const insertPromises = [];
    product.forEach((product) => {
      insertPromises.push(this.productService.create(product));
    });
    await Promise.all(insertPromises);

    return insertPromises;
  }
}
