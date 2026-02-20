import { Injectable } from '@angular/core';
import * as uuid from "uuid";
@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }
  getTempId(){
          if(!localStorage.getItem("TEMP_DEVICE_ID")){
        localStorage.setItem("TEMP_DEVICE_ID",uuid.v4())
       
      }
      
       return localStorage.getItem("TEMP_DEVICE_ID")
  }
}
