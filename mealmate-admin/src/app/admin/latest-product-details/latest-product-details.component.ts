import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-latest-product-details',
  templateUrl: './latest-product-details.component.html',
  styleUrl: './latest-product-details.component.css'
})
export class LatestProductDetailsComponent {

  ProductData: any[] = [];
  data: any = [];
  forLOOPIMage : any[] = [];
  baseImageUrl = 'http://localhost:3000/upl/'

  constructor(private http: HttpClient) {
    this.refreshData();
  }


  refreshData() {
    this.http.get('http://localhost:3000/user/getProduct').subscribe((result) => {
      this.data = result;
      console.log('result: ', result);
      this.ProductData = this.data
      console.log('ProductData: ', this.ProductData);
    this.ProductData.forEach((ele : any) => {
      this.forLOOPIMage = ele.ProductImage
      
      
    })
    console.log('forLOOPIMage: ', this.forLOOPIMage);


    });
  }

  deleteproduct(productId: number) {
    this.http.delete(`http://localhost:3000/user/delete/${productId}`).subscribe(() => {
      console.log('Product deleted:', productId);
      this.refreshData(); 
    }, (error) => {
      console.error('Failed to delete product', error);
    });
  }
}
