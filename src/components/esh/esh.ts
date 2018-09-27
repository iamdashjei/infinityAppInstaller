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
  premiseTypeOfEshArray: any = [];
  premiseEshResponsiveArray: any = [];
  premiseEshBrandAndModelArray: any = [];
  premiseEshSerialNumArray: any = [];

  replaceLocOfEshArray: any = [];
  replaceBrandOfEshArray: any = [];
  replaceSerialNumberEshArray: any = [];
  replaceSTypeOfEshArray: any = [];
  replaceAutomaticChargeCtrlEshArray: any = [];
  replaceKwRatingEshArray: any = [];


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
        this.numberOfPremises = [];
        this.numberOfReplace = [];

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
        this.premiseTypeOfEshArray = data.eshPremiseType;
        this.premiseEshBrandAndModelArray = data.eshPremiseBrandAndModel;
        this.premiseEshResponsiveArray = data.eshPremiseResponsive;
        this.premiseEshSerialNumArray = data.eshPremiseSerialNumber;
        this.dependentFields = data.eshPremiseSteps;
        this.replaceLocOfEshArray = data.eshReplaceLocOfesh;
        this.replaceAutomaticChargeCtrlEshArray = data.eshReplaceAutoChargeCtrl;
        this.replaceBrandOfEshArray = data.eshReplaceBrandOfEsh;
        this.replaceSerialNumberEshArray = data.eshReplaceSerialNumber;
        this.replaceSTypeOfEshArray = data.eshReplaceTypeOfEsh;
        this.replaceKwRatingEshArray = data.eshReplaceKWRating;


        for(let i = 1; i <= this.totalNumberOfEshPrem; i++){
         
          this.numberOfPremises.push(i);
          //this.premiseTypeOfEshArray.push(data.eshPremiseType);
          
          //console.log("Data Premise => " + data.eshPremiseType[i]);
        }

        for(let i = 1; i <= this.totalNumberOfEshRep; i++){
         
          this.numberOfReplace.push(i);
          //console.log("Data Premise => " + data.eshPremiseType[i]);
        }

        //console.log("Premise Type Esh => " + data.eshPremiseType);
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
    this.numberOfPremises = [];
    for(let i = 1; i <= count; i++){
      this.numberOfPremises.push(i);
    }

   
  }

  addFieldsReplace(count: number){
    this.numberOfReplace = [];
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
      eshCostScore: this.eshCostScore,
      eshPremiseType: this.filter_array(this.premiseTypeOfEshArray),
      eshPremiseResponsive: this.filter_array(this.premiseEshResponsiveArray),
      eshPremiseBrandAndModel: this.filter_array(this.premiseEshBrandAndModelArray),
      eshPremiseSerialNumber: this.filter_array(this.premiseEshSerialNumArray),
      eshPremiseSteps: this.filter_array(this.dependentFields),
      eshReplaceLocOfesh: this.filter_array(this.replaceLocOfEshArray),
      eshReplaceBrandOfEsh: this.filter_array(this.replaceBrandOfEshArray),
      eshReplaceSerialNumber: this.filter_array(this.replaceSerialNumberEshArray),
      eshReplaceTypeOfEsh: this.filter_array(this.replaceSTypeOfEshArray),
      eshReplaceAutoChargeCtrl: this.filter_array(this.replaceAutomaticChargeCtrlEshArray),
      eshReplaceKWRating: this.filter_array(this.replaceKwRatingEshArray)
    };
    //console.log(JSON.stringify(this.sharedObject.getSharedSelectedLeadObject()));
    this.sharedObject.setSharedEshObject(obj);
    console.log("ESH OBJECT => " + JSON.stringify(obj));

    this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_eshFields", obj);
  }

  // saveEshArray(){
  //   console.log("Type Of Esh Premise =>" + this.premiseTypeOfEshArray);
  //   console.log("Responsive Esh Premise =>" + this.premiseEshResponsiveArray);
  //   console.log("Brand And Model ESH Premise =>" + this.premiseEshBrandAndModelArray);
  //   console.log("Serial Number ESH Premise =>" + this.premiseEshSerialNumArray);
  //   console.log("Steps Premise =>" + this.dependentFields);
  //   console.log("Location of Esh Replace =>" + this.replaceLocOfEshArray);
  //   console.log("Brand Of Esh Replace =>" + this.replaceBrandOfEshArray);
  //   console.log("Serial Number of Esh Replace =>" + this.replaceSerialNumberEshArray);
  //   console.log("Type of Esh Replace =>" + this.replaceSTypeOfEshArray);
  //   console.log("Automatic Charge Ctrl Replace =>" + this.replaceAutomaticChargeCtrlEshArray);
  //   console.log("KW Rating Esh Replace =>" + this.replaceKwRatingEshArray);
    
  // }

  filter_array(test_array){
    var index = -1,
    arr_length = test_array ? test_array.length : 0,
    resIndex = -1,
    result = [];

    while (++index < arr_length) {
      var value = test_array[index];

      if (value) {
          result[++resIndex] = value;
      }
      }

      return result;
  }

}
