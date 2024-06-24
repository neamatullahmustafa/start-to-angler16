import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  title = 'my-angular-project';
  data: string[] = ["hhhhh", "jjjjjjj", "kkkkkkk"];
  users: User[] = [{ name: "neama", age: 25, marred: false },
    { name: "neama", age: 25, marred: false },
    { name: "neama", age: 26, marred: false },
    { name: "neama", age: 24, marred: false },
    { name: "neama", age: 23, marred: false },
    { name: "neama", age: 27, marred: false }]
}
