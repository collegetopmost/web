import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private router: Router,

  ) {
  
  }

 //frontendUrl="http://localhost:4200"

  
frontendUrl="https://collegetopmost.com/beta2222"
// rootUrl = 'http://localhost/collegetopmost/collegetopmost/CollegeTopMostWebConnect/';
rootUrl= "https://collegetopmost.com/adminad/backend/collegetopmost/CollegeTopMostWebConnect/"

  postapi(x: any, object: any): any {

    return this.http.post(this.rootUrl + x, object).pipe(map((res) => res));
  }
   get_staff() {
    return localStorage.getItem('userDetails') || null;
  }

 
 

  postapiCheckAccess(x: any, object: any): any {
    return this.http.post(this.rootUrl + x, object).pipe(map((res) => res));
  }
  getapi(x: any): Observable<any> {
    
    return this.http.get<any>(this.rootUrl + x).pipe(map((res) => res));
  }
}
