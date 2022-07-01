import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCellarPortsComponent } from './show-cellar-ports.component';

describe('ShowCellarPortsComponent', () => {
  let component: ShowCellarPortsComponent;
  let fixture: ComponentFixture<ShowCellarPortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCellarPortsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCellarPortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
