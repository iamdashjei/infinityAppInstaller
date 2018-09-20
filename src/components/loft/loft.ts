import { Component, ViewChild, Renderer, Input} from '@angular/core';
import { Storage } from '@ionic/storage';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';

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
  accordionExpanded = false;

  @ViewChild("loftForms") loftFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer,
              public storage: Storage,
              public sharedObject: SharedobjectserviceProvider) {
    console.log('Hello LoftComponent Component');
  }

  ionViewDidLoad(){

    console.log(this.loftFormContent.nativeElement);
    this.renderer.setElementStyle(this.loftFormContent.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");

  }

  // Toggle Form For ESH
  toggleAccordionLoft() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.loftFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.loftFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.loftFormContent.nativeElement, "max-height", "1200px");
      this.renderer.setElementStyle(this.loftFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }

}
