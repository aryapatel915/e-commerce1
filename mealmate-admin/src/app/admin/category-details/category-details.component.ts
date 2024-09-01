import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css'
})
export class CategoryDetailsComponent implements OnInit {

  Categorydata: any = [];

  constructor (private http: HttpClient) {
  
  }

  ngOnInit(): void {
    this. ShowCategory();
  }
  

  ShowCategory() {
    this.http.get('http://localhost:3000/user/getcategory').subscribe((response) => {
    console.log('response: ', response);
      this.Categorydata = response;
   });
  }
}
