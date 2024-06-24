import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable } from 'rxjs';
HttpClientModule
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private _HttpClient:HttpClient) { 
    
  }
  gitProduct():Observable< any> {
  return  this._HttpClient.get< any>(`https://jsonplaceholder.typicode.com/posts`)
  }
}
