import { Component } from '@angular/core';

/**
 * Generated class for the LoftComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'loft',
  templateUrl: 'loft.html'
})
export class LoftComponent {

  text: string;

  constructor() {
    console.log('Hello LoftComponent Component');
    this.text = 'Hello World';
  }

}
