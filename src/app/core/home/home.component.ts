import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  items = [{
    title: 'Template Syntax',
    url: 'https://angular.io/guide/template-syntax'
  }, {
    title: 'Structural Directives',
    url: 'https://angular.io/guide/structural-directives'
  }];
  title: string;

  constructor() { }

}
