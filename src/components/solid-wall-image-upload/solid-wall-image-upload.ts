import { Component } from '@angular/core';

/**
 * Generated class for the SolidWallImageUploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'solid-wall-image-upload',
  templateUrl: 'solid-wall-image-upload.html'
})
export class SolidWallImageUploadComponent {

  text: string;

  constructor() {
    console.log('Hello SolidWallImageUploadComponent Component');
    this.text = 'Hello World';
  }

}
