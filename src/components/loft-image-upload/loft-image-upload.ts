import { Component } from '@angular/core';

/**
 * Generated class for the LoftImageUploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'loft-image-upload',
  templateUrl: 'loft-image-upload.html'
})
export class LoftImageUploadComponent {

  text: string;

  constructor() {
    console.log('Hello LoftImageUploadComponent Component');
    this.text = 'Hello World';
  }

}
