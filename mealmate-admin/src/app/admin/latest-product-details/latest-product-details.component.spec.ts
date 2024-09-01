import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestProductDetailsComponent } from './latest-product-details.component';

describe('LatestProductDetailsComponent', () => {
  let component: LatestProductDetailsComponent;
  let fixture: ComponentFixture<LatestProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestProductDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
