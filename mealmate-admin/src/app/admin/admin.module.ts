import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouseldetailsComponent } from './carouseldetails/carouseldetails.component';
import { LatestProductComponent } from './latest-product/latest-product.component';
import { LatestProductDetailsComponent } from './latest-product-details/latest-product-details.component';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';



@NgModule({
  declarations: [
    CarouselComponent,
    CarouseldetailsComponent,
    LatestProductComponent,
    LatestProductDetailsComponent,
    CategoryComponent,
    CategoryDetailsComponent,
    OrderDetailsComponent,
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class AdminModule { }
