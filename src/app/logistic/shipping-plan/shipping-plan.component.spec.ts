import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingPlanComponent } from './shipping-plan.component';

describe('ShippingPlanComponent', () => {
  let component: ShippingPlanComponent;
  let fixture: ComponentFixture<ShippingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
