// import { Component } from '@angular/core';
// import { IDevice } from '../catalog/device.model';
// import { CartService } from './cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent {
//   private cart: IDevice[] = [];
//   constructor(private cartSvc:CartService) { }

//   ngOnInit() {
//     this.cartSvc.getCart().subscribe({
//       next: (cart) => (this.cart = cart),
//       error: (err) => console.error("Failed to load cart", err)
//     });
//   }

//   get cartItems() {
//     return this.cart;
//   }

//   get cartTotal() {
//     return this.cart.reduce((prev, next) => {
//       let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
//       return prev + next.price * discount;
//     }, 0);
//   }

//   removeFromCart(device: IDevice) {
//     this.cartSvc.deleteDevice(device);
    
//    }

//   getImageUrl(device: IDevice) {
//     if (!device) return '';
//     return device.image
//   }
// }
import { Component, OnInit } from '@angular/core';
import { IDevice } from '../catalog/device.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: IDevice[] = [];

  constructor(private cartSvc: CartService) {}

  ngOnInit() {
    // Subscribe to the cart changes via the BehaviorSubject
    this.cartSvc.cart$.subscribe({
      next: (cart) => {
        this.cart = cart; // Update local cart array
        console.log('Cart updated:', this.cart);
      },
    });
  }
  
  get cartItems() {
        return this.cart;
      }

      
  get cartTotal() {
    let result=0
      this.cart.map((device)=>{
      let price= device.discount>0 
      ?device.price-device.discount 
      :device.price
      result+=price
    }
  )
  return result
  
  }

  removeFromCart(device: IDevice) {
    this.cartSvc.deleteDevice(device);
  }

  getImageUrl(device: IDevice) {
    if (!device) return '';
    return  device.image
  }
}
