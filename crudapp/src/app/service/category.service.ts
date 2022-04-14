import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Router } from '@angular/router';

@Injectable()
export class CategorysService {

  private MyCategory: Category[] = [];
  private EditCategory: any;
  constructor(private router: Router) { }

  // to test with local mock data
  public getCategorysMockData(): Category[] {
    return this.MyCategory;
  }

  public setCategorysMockData(value: Category[]) {
    this.MyCategory = value;
  }

  public getEditCategory(): Category {
    return this.EditCategory;
  }

  public setEditCategory(value: Category) {
    this.EditCategory = value;
  }
  public back(value: any) {
    this.router.navigate([value])
  }

}