import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDevice } from '../catalog/device.model';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent {
@Input() device!:IDevice; // data will be inputed by the parent(catalog) to the child (device Details)
@Output() buy = new EventEmitter() // this will tell the parent (catalog) when the button is clicked

buyButtonClicked(){
  this.buy.emit()
}

}
