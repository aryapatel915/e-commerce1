import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouseldetailsComponent } from './carouseldetails.component';

describe('CarouseldetailsComponent', () => {
  let component: CarouseldetailsComponent;
  let fixture: ComponentFixture<CarouseldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouseldetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouseldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
