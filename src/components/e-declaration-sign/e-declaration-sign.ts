import { Component, ViewChild, Renderer, Input} from '@angular/core';
import { Storage } from '@ionic/storage';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';

/**
 * Generated class for the EDeclarationSignComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'e-declaration-sign',
  templateUrl: 'e-declaration-sign.html'
})
export class EDeclarationSignComponent {
  accordionExpanded = false;

  @ViewChild("decForms") decFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer,
              public storage: Storage,
              public sharedObject: SharedobjectserviceProvider) {
    console.log('Hello EDeclarationSignComponent Component');

  }

  ionViewDidLoad(){
    console.log(this.decFormContent.nativeElement);
    this.renderer.setElementStyle(this.decFormContent.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");

  }

  // Toggle Form For ESH
  toggleAccordionDeclaration() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.decFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.decFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.decFormContent.nativeElement, "max-height", "1200px");
      this.renderer.setElementStyle(this.decFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }


}
