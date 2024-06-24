import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { Post } from '../post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit,OnDestroy {

  subscribeApi!: Subscription;
  dataPosts:Post[] =[]
  constructor(private _ApiDataService: ApiDataService)
  {
    
  }
  ngOnDestroy(): void {
    this.subscribeApi.unsubscribe;  }
  ngOnInit(): void {
    this.subscribeApi = this._ApiDataService.gitProduct().subscribe({
      next: (res) => {
        this.dataPosts = res;
        console.log(this.dataPosts)
      }
      , error: (err) => { console.log(err) }
    });
 }
}
