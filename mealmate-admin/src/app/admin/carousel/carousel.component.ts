import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  
  form: FormGroup;

  constructor(private fb: FormBuilder,private http: HttpClient) {
    this.form = this.fb.group({
      carouselTitle: ['', Validators.required],
      description: ['', Validators.required],
      image: [null, Validators.required]
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        image: file
      });
    } 
  }
  onSubmit() {
      const formData = new FormData();
      formData.append('carouselTitle', this.form.get('carouselTitle')?.value);
      formData.append('description', this.form.get('description')?.value);
      formData.append('files', this.form.get('image')?.value);

      this.http.post('http://localhost:3000/user/carousel',formData).subscribe(
        response => {
          console.log('Success!', response);
        }
      );
   
  }
}
