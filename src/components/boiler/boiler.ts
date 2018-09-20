import { Component, ViewChild, Renderer, Input} from '@angular/core';
import { Storage } from '@ionic/storage';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';

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
  accordionExpanded = false;

  @ViewChild("boilerForms") boilerFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer,
              public storage: Storage,
              public sharedObject: SharedobjectserviceProvider) {
    console.log('Hello BoilerComponent Component');

  }

  ionViewDidLoad(){
    console.log(this.boilerFormContent.nativeElement);
    this.renderer.setElementStyle(this.boilerFormContent.nativeElement, "webkitTransition", "max-height 3200ms, padding 500ms");

  }

  // Toggle Form For ESH
  toggleAccordionBoiler() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.boilerFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.boilerFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.boilerFormContent.nativeElement, "max-height", "2400px");
      this.renderer.setElementStyle(this.boilerFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }

}
