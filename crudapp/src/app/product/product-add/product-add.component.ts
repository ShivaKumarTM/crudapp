import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { GlobalConstants } from 'src/app/common/global-constants';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productsLbls = GlobalConstants;
  submitted: boolean = false;
  products: Array<Product> = [];

  constructor(public fb: FormBuilder,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.products = this.productsService.getProductsMockData();
  }
  addProductForm = this.fb.group({
    category: ['', [Validators.required]],
    name: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
  });
  // Getter method to access formcontrols
  get productForm() {
    return this.addProductForm.controls;
  }
  submit() {
    this.submitted = true;
    if (this.addProductForm.valid) {
      let prod: any = {
        category: this.addProductForm.value.category,
        name: this.addProductForm.value.name,
        price: this.addProductForm.value.price,
        id: this.products?.length + 1,
      }
      this.products.push(prod);
      this.productsService.setProductsMockData(this.products);
      this.back();
    }
  }
  back() {
    this.productsService.back('/products');
  }
  areAllFieldsEmpty(): boolean {
    let allFieds: boolean = true;
    Object.keys(this.addProductForm.controls).map((key) => {
      if (this.addProductForm?.get(key)?.value) {
        allFieds = false;
      }
    })
    return allFieds;
  }
}
