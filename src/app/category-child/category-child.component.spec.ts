import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryChildComponent } from './category-child.component';

describe('CategoryChildComponent', () => {
  let component: CategoryChildComponent;
  let fixture: ComponentFixture<CategoryChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryChildComponent]
    });
    fixture = TestBed.createComponent(CategoryChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
