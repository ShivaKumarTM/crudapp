import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { GlobalConstants } from 'src/app/common/global-constants';
import { Category } from 'src/app/model/category';
import { CategorysService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  categoryLbls = GlobalConstants;
  submitted: boolean = false;
  categorys: Array<Category> = [];

  constructor(public fb: FormBuilder,
    private categorysService: CategorysService
  ) { }

  ngOnInit(): void {
    this.categorys = this.categorysService.getCategorysMockData();
  }
  addCategoryForm = this.fb.group({
    category: ['', [Validators.required]],
  });
  // Getter method to access formcontrols
  get categoryForm() {
    return this.addCategoryForm.controls;
  }
  submit() {
    this.submitted = true;
    if (this.addCategoryForm.valid) {
      let prod: any = {
        category: this.addCategoryForm.value.category,
        id: this.categorys?.length + 1,
      }
      this.categorys.push(prod);
      this.categorysService.setCategorysMockData(this.categorys);
      this.back();
    }
  }
  back() {
    this.categorysService.back('/categories');
  }
  areAllFieldsEmpty(): boolean {
    let allFieds: boolean = true;
    Object.keys(this.addCategoryForm.controls).map((key) => {
      if (this.addCategoryForm?.get(key)?.value) {
        allFieds = false;
      }
    })
    return allFieds;
  }
}
