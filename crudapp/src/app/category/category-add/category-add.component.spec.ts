import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CategorysService } from 'src/app/service/category.service';
import { CategoryAddComponent } from './category-add.component';

describe('CategoryAddComponent', () => {
  let component: CategoryAddComponent;
  let fixture: ComponentFixture<CategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, ReactiveFormsModule, FormsModule],
      declarations: [ CategoryAddComponent ],
      providers: [CategorysService, FormBuilder, Validators]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should Match title', () => {
    const fixture = TestBed.createComponent(CategoryAddComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Add Category');
  });
  it('Form invalid when fields are empty', () => {
    expect(component.addCategoryForm.valid).toBeFalsy();
  });
  it('Category field validity', () => {
    let errors: any = {};
    let categ = component.addCategoryForm.controls['category'];
    expect(categ.valid).toBeFalsy();
    errors = categ.errors || {};
    expect(errors.required).toBeTruthy();
  });
  it('submitting a form emits a data', () => {
    expect(component.addCategoryForm.valid).toBeFalsy();
    component.addCategoryForm.controls['category'].setValue("asfsdf");
    expect(component.addCategoryForm.valid).toBeTruthy();
  });
  it('When no inputs are Entered than AreAllFieldsEmpty should return true', () => {
    const allfieldEmpty: boolean = component.areAllFieldsEmpty();
    expect(allfieldEmpty).toBeTruthy();
  });
});
