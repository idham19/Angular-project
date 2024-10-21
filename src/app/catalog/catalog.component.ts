import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DeviceService } from './device.service';
import { CartService } from '../cart/cart.service';
import { IDevice } from './device.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
devices!:IDevice[]; // ! is non null assertion
filter:string='';

constructor(
  private deviceSvc:DeviceService,
  private cartSvc :CartService,
  private router :Router
){

}
ngOnInit(){
  this.deviceSvc.getDevices().subscribe((devices)=>{
    this.devices=devices
  })
}


getFiltredDevices(){
  return this.filter===''
  ? this.devices
  :this.devices.filter((device:IDevice)=>device.type===this.filter)
 }

 addDevice(device:IDevice){
  this.cartSvc.add(device)
  this.router.navigate(['/cart'])
 }

}
