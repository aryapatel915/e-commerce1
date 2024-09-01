import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-carouseldetails',
  templateUrl: './carouseldetails.component.html',
  styleUrl: './carouseldetails.component.css'
})
export class CarouseldetailsComponent {
  loginForm!: FormGroup; 
  data: any = [];
  FinalData: any[] = [];
  forLOOPIMage : any[] = []
  groupedData: any;
  selectedFile: File | null = null;
  editingUser: any;
  currentValue: any;
  currentProfileImage: string | ArrayBuffer | null = null;
  baseImageUrl = 'http://localhost:3000/upl/'

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
   this.refreshData();
  }
  

  refreshData() {
    this.http.get('http://localhost:3000/user/getcarousel').subscribe((result) => {
      this.data = result;
      console.log('result: ', result);
      this.FinalData = this.data
      console.log('FinalData: ', this.FinalData);
      
    console.log('Finalarray: ', this.groupedData);

    this.FinalData.forEach((ele : any) => {
      this.forLOOPIMage = ele.carouselImage
      
      
    })
    console.log('forLOOPIMage: ', this.forLOOPIMage);


    });
  }

  
  
  deleteUser(carouselId: any) {
    this.http.delete(`http://localhost:3000/user/deletecarousel/${carouselId}`).subscribe(() => {
      console.log('carousel deleted:', carouselId);
      this.refreshData(); 
    }, (error) => {
      console.error('Failed to delete product', error);
    });
    
  }
  
}
