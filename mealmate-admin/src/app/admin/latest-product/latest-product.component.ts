import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-latest-product',
  templateUrl: './latest-product.component.html',
  styleUrl: './latest-product.component.css'
})
export class LatestProductComponent {

  ProductData: any[] = [];
  form: FormGroup;
  data: any = [];
  forLOOPIMage : any[] = [];
  groupedData: any;
  successMessage: string | null = null;
  Categorydetails: any = [];


  constructor(private fb: FormBuilder,private http: HttpClient) {
    this.form = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      stockQuantity: [''],
      categoryId: [],
      image: [null, Validators.required]
     });
     this. Categorydata();
   
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        image: file
      });
    } 
  }

  Categorydata() {
    this.http.get('http://localhost:3000/user/getcategory').subscribe((response) => {
      console.log('response: ', response);
      this.Categorydetails = response;
      console.log('this.Categorydetails: ', this.Categorydetails);
    });
  }

  onSubmit() {
    const formData = new FormData();
      formData.append('name',this.form.get('name')?.value)
      formData.append('description',this.form.get('description')?.value)
      formData.append('price',this.form.get('price')?.value);
      formData.append('stockQuantity',this.form.get('stockQuantity')?.value)
      formData.append('files', this.form.get('image')?.value);
      formData.append('categoryId',this.form.get('categoryId')?.value)
      
      this.http.post('http://localhost:3000/user/product',formData).subscribe(
        response => {
          console.log('response: ', response);
          console.log('response: ', response);
          console.log('Success!', response);
          this.successMessage = 'Product is added successfully!';
          this.form.reset();
          setTimeout(() => {
            this.successMessage = null;
          }, 2000); 
        }
      );
    }
  }
 


