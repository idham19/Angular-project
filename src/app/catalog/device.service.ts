import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IDevice } from './device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http:HttpClient) {}

  getDevices():Observable<IDevice[]>{
   return this.http.get<IDevice[]>("/api/devices")
  }
}
