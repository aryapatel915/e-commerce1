import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCounterService {
    private cartItemCount = new BehaviorSubject<number>(0);
    cartItemCount$ = this.cartItemCount.asObservable();
  
    constructor() {}
  
    updateCartCount(count: number) {
      this.cartItemCount.next(count);
    }
  
    incrementCartCount() {
      this.cartItemCount.next(this.cartItemCount.value + 1);
    }
  }
  
