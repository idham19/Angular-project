
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { IDevice } from '../catalog/device.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
  
//   cart: IDevice[] = [];

//   constructor(private http: HttpClient) {
//     this.getCart()
//    }

//   getCart() {
//     return this.http.get<IDevice[]>("/api/carts");

//     // return this.http.get("/api/carts").subscribe((cartData) => {
//     //   console.log(cartData);
//     //   // Now you can use the cartData wherever necessary, such as storing it in a property or passing it to a component
//     //   this.cart = cartData as IDevice[]; // Assuming cartData is an array of devices
//     // });
//   }
//   add(device: IDevice) {
//     this.cart.push(device);
//     // Send the individual device object instead of the entire cart
//     this.http.post("/api/carts", device).subscribe(() => {
//       console.log(`Device ${device.model} added to cart`);
//     });
//   }
//   // deleteDevice(device:any){
//   // this.http.delete(`api/carts/${device.id}`).subscribe(()=>{
//   //   console.log(`Device ${device.model} deleted from the cart`);

//   // })
//   // }
//   deleteDevice(device: any) {
//     this.http.delete(`/api/carts/${device.id}`).subscribe(() => {
//       console.log(`Device ${device.model} deleted from the cart`);
//       // Update the local cart array
//       // this.cart = this.cart.filter((device) => device!.model !== device.model);
//       this.getCart().subscribe((cartData) => {
//         this.cart = cartData; // Update the local cart with the new data
//       });    });
//   }
  
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDevice } from '../catalog/device.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private cartSubject = new BehaviorSubject<IDevice[]>([]);
  cart$: Observable<IDevice[]> = this.cartSubject.asObservable(); // Expose the cart as an observable

  constructor(private http: HttpClient) {
    this.getCart().subscribe((cartData) => {
      this.cartSubject.next(cartData); // Set initial cart data
    });
  }

  getCart() {
    return this.http.get<IDevice[]>("/api/carts");
  }

  add(device: IDevice) {
    this.http.post("/api/carts", device).subscribe(() => {
      console.log(`Device ${device.model} added to cart`);
      // Refresh the cart and emit the new value
      this.getCart().subscribe((cartData) => {
        this.cartSubject.next(cartData); // Emit new cart data
      });
    });
  }

  deleteDevice(device: any) {
    this.http.delete(`/api/carts/${device.id}`).subscribe(() => {
      console.log(`Device ${device.model} deleted from the cart`);
      // Refresh the cart and emit the new value
      this.getCart().subscribe((cartData) => {
        this.cartSubject.next(cartData); // Emit new cart data
      });
    });
  }
}
