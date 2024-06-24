import { Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
 data: string = "data from my parent ";
  conditionTrue: boolean = true;
  conditionFalse:boolean=false;
   welcome(params:HTMLParagraphElement):void {
     alert(params.innerHTML);
  }

}
