import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  form!: FormGroup;
  
 categories = [
  { id: 1, name: 'Burger' },
  { id: 2, name: 'Pizza' },
  { id: 3, name: 'Sandwich' }
];

  constructor(private fb: FormBuilder,private http: HttpClient) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      parent_category_id: null
    });
}

onSubmit(): void {
  let obj = {
    name: this.form.get('name')?.value,
        description: this.form.get('description')?.value,
        category: this.form.get('category')?.value
  }

  this.http.post('http://localhost:3000/user/category',obj).subscribe((response) => {
    console.log('response: ', response);

  })


}

}