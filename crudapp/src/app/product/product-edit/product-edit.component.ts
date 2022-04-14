import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { GlobalConstants } from 'src/app/common/global-constants';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productsLbls = GlobalConstants;
  submitted: boolean = false;
  products: Array<Product> = [];
  product: any;

  constructor(public fb: FormBuilder,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.products = this.productsService.getProductsMockData();
    this.product = this.productsService.getEditProduct();
    this.patchForm();
  }
  patchForm() {
    this.editProductForm.patchValue(this.product)
  }
  editProductForm = this.fb.group({
    category: ['', [Validators.required]],
    name: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
  });
  // Getter method to access formcontrols
  get productForm() {
    return this.editProductForm.controls;
  }
  submit() {
    this.submitted = true;
    if (this.editProductForm.valid) {
      this.products.forEach((prod: Product) => {
        if (prod.id === this.product.id) {
          prod.category = this.editProductForm.value.category;
          prod.name = this.editProductForm.value.name;
          prod.price = this.editProductForm.value.price;
        }
      });
      this.productsService.setProductsMockData(this.products);
      this.back();
    }
  }
  back() {
    this.productsService.back('/products');
  }
  areAllFieldsEmpty(): boolean {
    let allFieds: boolean = true;
    Object.keys(this.editProductForm.controls).map((key) => {
      if (this.editProductForm?.get(key)?.value) {
        allFieds = false;
      }
    })
    return allFieds;
  }
}
