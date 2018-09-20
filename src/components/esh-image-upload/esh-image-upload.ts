import { Component, ViewChild, Renderer, Input} from '@angular/core';
import { Storage } from '@ionic/storage';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';

/**
 * Generated class for the EshImageUploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'esh-image-upload',
  templateUrl: 'esh-image-upload.html'
})
export class EshImageUploadComponent {
  accordionExpanded = false;

  @ViewChild("eshImageForms") eshFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";


  constructor(public renderer: Renderer,
              public storage: Storage,
              public sharedObject: SharedobjectserviceProvider) {

  }


  ionViewDidLoad(){

    console.log(this.eshFormContent.nativeElement);
    this.renderer.setElementStyle(this.eshFormContent.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");

  }

  // Toggle Form For ESH
  toggleAccordionESHImage() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "max-height", "1200px");
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }


}