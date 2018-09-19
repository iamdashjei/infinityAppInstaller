import { Component } from '@angular/core';

/**
 * Generated class for the CavityWallImageUploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cavity-wall-image-upload',
  templateUrl: 'cavity-wall-image-upload.html'
})
export class CavityWallImageUploadComponent {

  text: string;

  constructor() {
    console.log('Hello CavityWallImageUploadComponent Component');
    this.text = 'Hello World';
  }

}
