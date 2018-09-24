import { Component, ViewChild, Renderer, Input} from '@angular/core';
import { Storage } from '@ionic/storage';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';

/**
 * Generated class for the EshComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'esh',
  templateUrl: 'esh.html'
})
export class EshComponent {
  accordionExpanded = false;

  @ViewChild("eshForms") eshFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  dateOfEshAssessment: any;
  totalNumberOfEshPrem: any;
  totalNumberOfEshRep: any;
  electricityTerrif: any;
  locOfEsh: any;
  typeOfEsh: any;
  eshResponsive: any;
  eshBrandAndModel: any;
  eshSerialNumber: any;

  eshCostScore: any;
  // eshPPES: any;
  // eshPIBI: any;
  // eshPICP: any;
  // eshPICA: any;

  numberOfFields: number[] = [];

  constructor(public renderer: Renderer,
              public storage: Storage,
              public sharedObject: SharedobjectserviceProvider) {
    console.log('Hello EshComponent Component');

  }

  ionViewDidLoad(){

    console.log(this.eshFormContent.nativeElement);
    this.renderer.setElementStyle(this.eshFormContent.nativeElement, "webkitTransition", "max-height 1600ms, padding 500ms");

  }

  // Toggle Form For ESH
  toggleAccordionESH() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "max-height", "1600px");
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }

  saveEshObject(){
    let obj = {
      dateOfEshAssessment: this.dateOfEshAssessment,
      totalNumberOfEshPrem: this.totalNumberOfEshPrem,
      totalNumberOfEshRep: this.totalNumberOfEshRep,
      electricityTerrif: this.electricityTerrif,
      locOfEsh: this.locOfEsh,
      typeOfEsh: this.typeOfEsh,
      eshResponsive: this.eshResponsive,
      eshBrandAndModel: this.eshBrandAndModel,
      eshSerialNumber: this.eshSerialNumber
    };
    console.log(JSON.stringify(obj));
    this.sharedObject.setSharedEshObject(obj);
  }


}
