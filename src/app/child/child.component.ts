import { Component , Input, OnChanges, SimpleChanges  } from '@angular/core';
import { UserContextService } from '../user-context.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers:[UserContextService]
})
export class ChildComponent implements OnChanges {
  @Input({ required: true }) dataTransfer: string = '';
  dataFromMyService:string[] =[]
  constructor(_UserContextService:UserContextService) { 
    // let myService = new UserContextService();
    _UserContextService.dataFun("hiii my child");
    this.dataFromMyService =
      _UserContextService.dataStr;
console.log(this.dataFromMyService)

  }
  ngOnChanges(): void {
console.log("start")  }
}
