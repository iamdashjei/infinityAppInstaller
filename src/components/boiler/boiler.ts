import { Component } from '@angular/core';

/**
 * Generated class for the BoilerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'boiler',
  templateUrl: 'boiler.html'
})
export class BoilerComponent {

  text: string;

  constructor() {
    console.log('Hello BoilerComponent Component');
    this.text = 'Hello World';
  }

}
