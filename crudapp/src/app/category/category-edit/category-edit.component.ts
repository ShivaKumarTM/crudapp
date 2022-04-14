import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { GlobalConstants } from 'src/app/common/global-constants';
import { Category } from 'src/app/model/category';
import { CategorysService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  categoryLbls = GlobalConstants;
  submitted: boolean = false;
  categorys: Array<Category> = [];
  category: any;

  constructor(public fb: FormBuilder,
    private categorysService: CategorysService
  ) { }

  ngOnInit(): void {
    this.categorys = this.categorysService.getCategorysMockData();
    this.category = this.categorysService.getEditCategory();
    this.patchForm();
  }
  patchForm() {
    this.editCategoryForm.patchValue(this.category)
  }
  editCategoryForm = this.fb.group({
    category: ['', [Validators.required]],
  });
  // Getter method to access formcontrols
  get categoryForm() {
    return this.editCategoryForm.controls;
  }
  submit() {
    this.submitted = true;
    if (this.editCategoryForm.valid) {
      this.categorys.forEach((prod: Category) => {
        if (prod.id === this.category.id) {
          prod.category = this.editCategoryForm.value.category;
        }
      });
      this.categorysService.setCategorysMockData(this.categorys);
      this.back();
    }
  }
  back() {
    this.categorysService.back('/categories');
  }
  areAllFieldsEmpty(): boolean {
    let allFieds: boolean = true;
    Object.keys(this.editCategoryForm.controls).map((key) => {
      if (this.editCategoryForm?.get(key)?.value) {
        allFieds = false;
      }
    })
    return allFieds;
  }
}
