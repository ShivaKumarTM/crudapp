import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';
import { ProductsService } from 'src/app/service/products.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productsLbls = GlobalConstants;
  products: Array<Product> = [];
  displayBasic: boolean = false;
  deleteId: any;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.products = this.productsService.getProductsMockData();
  }
  edit(value: Product) {
    this.productsService.setEditProduct(value);
    this.productsService.back('/products/:id/edit');
  }
  delete(value: any) {
    this.deleteId = value.id;
    this.displayBasic = true;
  }
  hide(value: any) {
    this.displayBasic = false;
    if (value === 'yes') {
      this.products = this.products.filter((prod: Product) => {
        return this.deleteId != prod.id;
      });
      this.productsService.setProductsMockData(this.products);
    }
  }
  back() {
    this.productsService.back('/home');
  }
}
