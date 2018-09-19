import { Component } from '@angular/core';

/**
 * Generated class for the CavityWallComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cavity-wall',
  templateUrl: 'cavity-wall.html'
})
export class CavityWallComponent {

  text: string;

  constructor() {
    console.log('Hello CavityWallComponent Component');
    this.text = 'Hello World';
  }

}
