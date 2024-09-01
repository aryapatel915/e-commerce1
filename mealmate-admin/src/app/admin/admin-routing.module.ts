import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouseldetailsComponent } from './carouseldetails/carouseldetails.component';
import { LatestProductComponent } from './latest-product/latest-product.component';
import { LatestProductDetailsComponent } from './latest-product-details/latest-product-details.component';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'carousel',
    pathMatch : 'full'
  },
  {
    path : '',
    children : [
      {
        path : 'carousel',
        component : CarouselComponent
      },
      {
        path : 'carouseldetails',
        component : CarouseldetailsComponent
      },
      {
        path : 'latest-product',
        component : LatestProductComponent
      },
      {
        path : 'latest-product-details',
        component : LatestProductDetailsComponent
      },
      {
        path : 'category',
        component : CategoryComponent
      },
      {
        path : 'category-details',
        component : CategoryDetailsComponent
      },
      {
        path: 'order-details',
        component: OrderDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
