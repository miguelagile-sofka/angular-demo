import { Component } from '@angular/core';
import { Type } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-test';

  pruebaCode(params) {
    return params;

  }
}


