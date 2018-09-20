import { Component, ViewChild, Renderer, Input} from '@angular/core';
import { Storage } from '@ionic/storage';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';

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
  accordionExpanded = false;

  @ViewChild("cavwallImageForms") cavwallFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";
  constructor(public renderer: Renderer,
              public storage: Storage,
              public sharedObject: SharedobjectserviceProvider) {
    console.log('Hello CavityWallImageUploadComponent Component');

  }

  ionViewDidLoad(){
    console.log(this.cavwallFormContent.nativeElement);
    this.renderer.setElementStyle(this.cavwallFormContent.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");

  }

  // Toggle Form For ESH
  toggleAccordionCavityWall() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.cavwallFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.cavwallFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.cavwallFormContent.nativeElement, "max-height", "1200px");
      this.renderer.setElementStyle(this.cavwallFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }
}
