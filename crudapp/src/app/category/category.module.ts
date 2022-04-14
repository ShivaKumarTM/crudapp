import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component'
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';


const routes: Routes = [
  {path: '', component: CategoryDetailsComponent},
  {path: 'new', component: CategoryAddComponent},
  {path: ':id/edit', component: CategoryEditComponent}
];


@NgModule({
  declarations: [
    CategoryDetailsComponent,
    CategoryAddComponent,
    CategoryEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DialogModule
  ],
  exports: [RouterModule]
})
export class CategoryModule { }
