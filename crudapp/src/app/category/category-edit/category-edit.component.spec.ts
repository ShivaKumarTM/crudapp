import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CategorysService } from 'src/app/service/category.service';
import { CategoryEditComponent } from './category-edit.component';

describe('CategoryEditComponent', () => {
  let component: CategoryEditComponent;
  let fixture: ComponentFixture<CategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, ReactiveFormsModule, FormsModule],
      declarations: [ CategoryEditComponent ],
      providers: [CategorysService, FormBuilder, Validators]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should Match title', () => {
    const fixture = TestBed.createComponent(CategoryEditComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Edit Category');
  });
  it('Form invalid when fields are empty', () => {
    expect(component.editCategoryForm.valid).toBeFalsy();
  });
  it('Category field validity', () => {
    let errors: any = {};
    let categ = component.editCategoryForm.controls['category'];
    expect(categ.valid).toBeFalsy();
    errors = categ.errors || {};
    expect(errors.required).toBeTruthy();
  });
  it('submitting a form emits a data', () => {
    expect(component.editCategoryForm.valid).toBeFalsy();
    component.editCategoryForm.controls['category'].setValue("asfsdf");
    expect(component.editCategoryForm.valid).toBeTruthy();
  });
  it('When no inputs are Entered than AreAllFieldsEmpty should return true', () => {
    const allfieldEmpty: boolean = component.areAllFieldsEmpty();
    expect(allfieldEmpty).toBeTruthy();
  });
});
