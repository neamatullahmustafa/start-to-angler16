import { Injectable } from '@angular/core';

@Injectable(
  // {
  // providedIn: 'root'
  // }
)
export class UserContextService {

  constructor() { } 
  
    dataStr: string[] = ["one", "tow", "three", "four", "five"];
   dataFun(params:string):void {
      alert(params);
  
  }
}
