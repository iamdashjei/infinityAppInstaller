import { Component, ViewChild, Renderer, Input} from '@angular/core';
import { Storage } from '@ionic/storage';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';

/**
 * Generated class for the SolidWallComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'solid-wall',
  templateUrl: 'solid-wall.html'
})
export class SolidWallComponent {
  accordionExpanded = false;

  @ViewChild("solidwallForms") solidwallFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer,
              public storage: Storage,
              public sharedObject: SharedobjectserviceProvider) {
    console.log('Hello SolidWallComponent Component');
  }

  ionViewDidLoad(){
    console.log(this.solidwallFormContent.nativeElement);
    this.renderer.setElementStyle(this.solidwallFormContent.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");

  }

  // Toggle Form For ESH
  toggleAccordionSolidWall() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.solidwallFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.solidwallFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.solidwallFormContent.nativeElement, "max-height", "1200px");
      this.renderer.setElementStyle(this.solidwallFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }
}
