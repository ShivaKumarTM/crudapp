import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';
import { CategorysService } from 'src/app/service/category.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  categoryLbls = GlobalConstants;
  categorys: Array<Category> = [];
  deleteId: any;
  displayBasic: boolean = false;
  constructor(
    private categorysService: CategorysService
    ) { }

  ngOnInit(): void {
    this.categorys = this.categorysService.getCategorysMockData();
  }
  edit(value: Category) {
    this.categorysService.setEditCategory(value);
    this.categorysService.back('/categories/:id/edit');
  }
  delete(value: any) {
    this.deleteId = value.id;
    this.displayBasic = true;
  }
  hide(value: any) {
    this.displayBasic = false;
    if (value === 'yes') {
      this.categorys = this.categorys.filter((cate: Category) => {
        return this.deleteId != cate.id;
      });
      this.categorysService.setCategorysMockData(this.categorys);
    }
  }
  back(){
    this.categorysService.back('/home')
  }
}
