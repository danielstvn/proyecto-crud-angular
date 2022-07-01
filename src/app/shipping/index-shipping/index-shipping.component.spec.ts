import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexShippingComponent } from './index-shipping.component';

describe('IndexShippingComponent', () => {
  let component: IndexShippingComponent;
  let fixture: ComponentFixture<IndexShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexShippingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
