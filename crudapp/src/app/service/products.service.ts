import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Router } from '@angular/router';

@Injectable()
export class ProductsService {

  private MyProducts: Array<Product> = [];
  private EditProduct: any;
  constructor(private router: Router,) { }

  // to test with local mock data
  public getProductsMockData(): Product[] {
    return this.MyProducts;
  }

  public setProductsMockData(value: Product[]) {
    this.MyProducts = value;
  }

  public getEditProduct(): Product {
    return this.EditProduct;
  }

  public setEditProduct(value: Product) {
    this.EditProduct = value;
  }
  public back(value: any) {
    this.router.navigate([value])
  }
}