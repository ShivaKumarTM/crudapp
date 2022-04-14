import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsService } from 'src/app/service/products.service';
import { ProductEditComponent } from './product-edit.component';

describe('ProductEditComponent', () => {
  let component: ProductEditComponent;
  let fixture: ComponentFixture<ProductEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, ReactiveFormsModule, FormsModule],
      declarations: [ ProductEditComponent ],
      providers: [ProductsService, FormBuilder, Validators]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should Match title', () => {
    const fixture = TestBed.createComponent(ProductEditComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Edit Product');
  });
  it('Form invalid when fields are empty', () => {
    expect(component.editProductForm.valid).toBeFalsy();
  });
  it('Category field validity', () => {
    let errors: any = {};
    let categ = component.editProductForm.controls['category'];
    expect(categ.valid).toBeFalsy();
    errors = categ.errors || {};
    expect(errors.required).toBeTruthy();
  });
  it('Name field validity', () => {
    let errors: any = {};
    let name = component.editProductForm.controls['name'];
    expect(name.valid).toBeFalsy();
    errors = name.errors || {};
    expect(errors.required).toBeTruthy();
  });
  it('Price field validity', () => {
    let errors: any = {};
    let price = component.editProductForm.controls['price'];
    expect(price.valid).toBeFalsy();
    errors = price.errors || {};
    expect(errors.required).toBeTruthy();

    // Set Price to something
    price.setValue("aaaa");
    errors = price.errors || {};
    expect(errors.required).toBeFalsy();
    expect(errors.pattern).toBeTruthy();

    // Set Price to something correct
    price.setValue("123456789");
    errors = price.errors || {};
    expect(errors.required).toBeFalsy();
    expect(errors.pattern).toBeFalsy();
  });
  it('submitting a form emits a data', () => {
    expect(component.editProductForm.valid).toBeFalsy();
    component.editProductForm.controls['category'].setValue("asfsdf");
    component.editProductForm.controls['name'].setValue("aas");
    component.editProductForm.controls['price'].setValue(121);
    expect(component.editProductForm.valid).toBeTruthy();
  });
  it('When no inputs are Entered than AreAllFieldsEmpty should return true', () => {
    const allfieldEmpty: boolean = component.areAllFieldsEmpty();
    expect(allfieldEmpty).toBeTruthy();
  });
});
