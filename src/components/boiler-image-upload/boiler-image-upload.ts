import { Component } from '@angular/core';

/**
 * Generated class for the BoilerImageUploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'boiler-image-upload',
  templateUrl: 'boiler-image-upload.html'
})
export class BoilerImageUploadComponent {

  text: string;

  constructor() {
    console.log('Hello BoilerImageUploadComponent Component');
    this.text = 'Hello World';
  }

}
