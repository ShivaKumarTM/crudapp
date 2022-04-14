import { CommonModule } from '@angular/common';
import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CategorysService } from './category.service';


describe('CategorysService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [CommonModule, RouterTestingModule],
    providers: [CategorysService]
  }));

  it('should create', inject([CategorysService], (service: CategorysService) => {
    expect(service).toBeTruthy();
  }));
});
