import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: number = 123465;
  img1:string="./assets/Screenshot from 2024-03-03 21-00-45.png"
  ok(eventInfo:any): void{
    console.log(eventInfo.key)
   }
  sayhellow(): void{
   alert("hellow")
  }
}