import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {
  ProductData: any[] = [];

  UserDetailsData: any = {};
  data: any = [];
  forLOOPIMage : any[] = [];
  ProductDetails: any[] = [];
  baseImageUrl = 'http://localhost:3000/upl/'
  userid = localStorage.getItem('userid');

  constructor(private http: HttpClient) {
    this.refreshData();
    this.UserDetails();
  }
  refreshData() {
    this.http.get(`http://localhost:3000/user/getorder/${this.userid}`).subscribe((result: any) => {
      console.log('API Response:', result);
  
      // Assuming you want to use the `productYEAH` array
      if (result && Array.isArray(result.productYEAH)) {
        this.ProductData = result.productYEAH.map((item: any) => {
          return {
            name: item.name,
            description: item.description,
            price: item.price,
            stockQuantity: item.stockQuantity,
            ProductImage: item.ProductImage
          };
        });
      } else {
        console.error('Unexpected response structure:', result);
        // Handle unexpected response structure
      }
  
      console.log('ProductData:', this.ProductData);
    }, error => {
      console.error('Error fetching product data:', error);
    });
  }
  
  UserDetails() {
    this.http.get<any>(`http://localhost:3000/user/getUserId/${this.userid}`).subscribe(
      data => {
        console.log('User Data==>: ', data);
        this.UserDetailsData = data.userDetails[0]; // Assuming you're taking the first element from userDetails array
        this.UserDetailsData.email = data.email; // Adding email from the main object
        console.log('UserDetailsData:', this.UserDetailsData);
      },
      error => {
        console.error('Error fetching user data:', error);
      }
    );
  }
  
  deleteProduct(productId: number) {
    // Implement delete logic here
    console.log('Deleting product with ID:', productId);
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
