import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lavazza';
 
  serverElements = [{type:'server',content:'Just a test Content',name:'test Name'}];

}

