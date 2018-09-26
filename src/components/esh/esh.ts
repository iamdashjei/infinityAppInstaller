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
  electricityTarrif: any;
  locOfEsh: any;
  typeOfEsh: any;
  eshResponsive: any;
  eshBrandAndModel: any;
  eshSerialNumber: any;

  eshCostScore: any;

  numberOfPremises: number[]   = [];
  // eshPPES: any;
  // eshPIBI: any;
  // eshPICP: any;
  // eshPICA: any;

  numberOfFields: number[] = [];
  numberOfReplace: number[] = [];
  dependentFields: any = [];

  premiseArray: any = [];

  constructor(public renderer: Renderer,
              public storage: Storage,
              public sharedObject: SharedobjectserviceProvider) {
    console.log('Hello EshComponent Component');
    sharedObject.setSharedMeasureToUpload("esh");
  }

  ionViewDidLoad(){

    console.log(this.eshFormContent.nativeElement);
    this.renderer.setElementStyle(this.eshFormContent.nativeElement, "webkitTransition", "max-height 10000ms, padding 500ms");
  }

  // Toggle Form For ESH
  toggleAccordionESH() {

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_eshFields").then((esh) => {
      if(esh != null){
        let data = esh;

        this.dateOfEshAssessment = data.dateOfEshAssessment;
        this.totalNumberOfEshPrem = data.totalNumberOfEshPrem;
        this.totalNumberOfEshRep = data.totalNumberOfEshRep;
        this.electricityTarrif = data.electricityTarrif;
        this.locOfEsh = data.locOfEsh;
        this.typeOfEsh = data.typeOfEsh;
        this.eshResponsive = data.eshResponsive;
        this.eshBrandAndModel = data.eshBrandAndModel;
        this.eshSerialNumber = data.eshSerialNumber;
        this.eshCostScore = data.eshCostScore;
      }
    });

    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "max-height", "10000px");
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }

  addFieldsPremises(count: number){
    
    for(let i = 1; i <= count; i++){
      this.numberOfPremises.push(i);
    }

   
  }

  addFieldsReplace(count: number){
    for(let i = 1; i <= count; i++){
      this.numberOfReplace.push(i);
    }

  }

  saveEshObject(){
    let obj = {
      dateOfEshAssessment: this.dateOfEshAssessment,
      totalNumberOfEshPrem: this.totalNumberOfEshPrem,
      totalNumberOfEshRep: this.totalNumberOfEshRep,
      electricityTarrif: this.electricityTarrif,
      locOfEsh: this.locOfEsh,
      typeOfEsh: this.typeOfEsh,
      eshResponsive: this.eshResponsive,
      eshBrandAndModel: this.eshBrandAndModel,
      eshSerialNumber: this.eshSerialNumber,
      eshCostScore: this.eshCostScore
    };
    //console.log(JSON.stringify(this.sharedObject.getSharedSelectedLeadObject()));
    this.sharedObject.setSharedEshObject(obj);
    console.log("ESH OBJECT => " + JSON.stringify(obj));

    this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_eshFields", obj);
  }

  saveEshArray(){
    alert(this.premiseArray);
  }

}
