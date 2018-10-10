import { Component, ViewChild, Renderer, Input} from '@angular/core';
import { Storage } from '@ionic/storage';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { ToastController } from 'ionic-angular';

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
  boilerFuelOfNewHeatSystem: any;
  boilerQualifying: any;
  boilerHeatProperly: any;
  boilerDateOfAssessment: any;
  boilerFuelBrandAndModel: any;
  boilerModelQualifier: any;
  boilerFuelType: any;
  boilerYearOfOrigCommission: any;
  boilerCombinationBoiler: any;
  boilerOtherBoilerProp: any;
  preboilerFuelType: any;
  preboilerSerialNumber: any;
  boilerCorrosion: any;
  boilerNoBoilerIgnition: any;
  boilerOtherMechOrElect: any;
  boilerResultsFuelGas: any;
  boilerResultOfTheBurner: any;
  boilerAndSystemSludge: any;
  boilerPrimaryFlow: any;
  boilerPrimaryFlowRateTemp: any;
  boilerForCombinationBoilers: any;
  boilerExternalCorrosion: any;
  boilerImmediatelyDangerous: any;
  boilerOtherFaults: any;
  boilerEfficiency: any;
  boilerActualRepairCost: any;
  boilerActualReplaceCost: any;
  boilerRepairOrReplaceIdentified: any;
  boilerExistingBoiler: any;
  boilerRepairOrReplace: any;
  boilerCostScore: any;

  constructor(private renderer: Renderer,
              private storage: Storage,
              private toastCtrl: ToastController,
              private sharedObject: SharedobjectserviceProvider) {
    console.log('Hello BoilerComponent Component');

  }

  ionViewDidLoad(){
    console.log(this.boilerFormContent.nativeElement);
    this.renderer.setElementStyle(this.boilerFormContent.nativeElement, "webkitTransition", "max-height 3200ms, padding 500ms");

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_boilerDataInst").then((data) => {
      let boiler = data;
      this.boilerFuelOfNewHeatSystem =  boiler.boilerFuelOfNewHeatSystem;
      this.boilerQualifying =  boiler.boilerQualifying;
      this.boilerHeatProperly=  boiler.boilerHeatProperly;
      this.boilerDateOfAssessment=  boiler.boilerDateOfAssessment;
      this.boilerFuelBrandAndModel=  boiler.boilerFuelBrandAndModel;
      this.boilerModelQualifier=  boiler.boilerModelQualifier;
      this.boilerFuelType=  boiler.boilerFuelType;
      this.boilerYearOfOrigCommission=  boiler.boilerYearOfOrigCommission;
      this.boilerCombinationBoiler=  boiler.boilerCombinationBoiler;
      this.boilerOtherBoilerProp=  boiler.boilerOtherBoilerProp;
      this.preboilerFuelType=  boiler.preboilerFuelType;
      this.preboilerSerialNumber=  boiler.preboilerSerialNumber;
      this.boilerCorrosion=  boiler.boilerCorrosion;
      this.boilerNoBoilerIgnition=  boiler.boilerNoBoilerIgnition;
      this.boilerOtherMechOrElect=  boiler.boilerOtherMechOrElect;
      this.boilerResultsFuelGas=  boiler.boilerResultsFuelGas;
      this.boilerResultOfTheBurner=  boiler.boilerResultOfTheBurner;
      this.boilerAndSystemSludge=  boiler.boilerAndSystemSludge;
      this.boilerPrimaryFlow=  boiler.boilerPrimaryFlow;
      this.boilerPrimaryFlowRateTemp = boiler.boilerPrimaryFlowRateTemp;
      this.boilerForCombinationBoilers=  boiler.boilerForCombinationBoilers;
      this.boilerExternalCorrosion=  boiler.boilerExternalCorrosion;
      this.boilerImmediatelyDangerous=  boiler.boilerImmediatelyDangerous;
      this.boilerOtherFaults=  boiler.boilerOtherFaults;
      this.boilerEfficiency=  boiler.boilerEfficiency;
      this.boilerActualRepairCost=  boiler.boilerActualRepairCost;
      this.boilerActualReplaceCost=  boiler.boilerActualReplaceCost;
      this.boilerExistingBoiler=  boiler.boilerExistingBoiler;
      this.boilerRepairOrReplaceIdentified = boiler.boilerRepairOrReplaceIdentified;
      this.boilerRepairOrReplace=  boiler.boilerRepairOrReplace;
      this.boilerCostScore=  boiler.boilerCostScore;
      this.sharedObject.setSharedBoilerObject(data);
    });
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

  saveBoiler(){
    const data = {
      boilerFuelOfNewHeatSystem: this.boilerFuelOfNewHeatSystem,
      boilerQualifying: this.boilerQualifying,
      boilerHeatProperly: this.boilerHeatProperly,
      boilerDateOfAssessment: this.boilerDateOfAssessment,
      boilerFuelBrandAndModel: this.boilerFuelBrandAndModel,
      boilerModelQualifier: this.boilerModelQualifier,
      boilerFuelType: this.boilerFuelType,
      boilerYearOfOrigCommission: this.boilerYearOfOrigCommission,
      boilerCombinationBoiler: this.boilerCombinationBoiler,
      boilerOtherBoilerProp: this.boilerOtherBoilerProp,
      preboilerFuelType: this.preboilerFuelType,
      preboilerSerialNumber: this.preboilerSerialNumber,
      boilerCorrosion: this.boilerCorrosion,
      boilerNoBoilerIgnition: this.boilerNoBoilerIgnition,
      boilerOtherMechOrElect: this.boilerOtherMechOrElect,
      boilerResultsFuelGas: this.boilerResultsFuelGas,
      boilerResultOfTheBurner: this.boilerResultOfTheBurner,
      boilerAndSystemSludge: this.boilerAndSystemSludge,
      boilerPrimaryFlow: this.boilerPrimaryFlow,
      boilerPrimaryFlowRateTemp: this.boilerPrimaryFlowRateTemp,
      boilerForCombinationBoilers: this.boilerForCombinationBoilers,
      boilerExternalCorrosion: this.boilerExternalCorrosion,
      boilerImmediatelyDangerous: this.boilerImmediatelyDangerous,
      boilerOtherFaults: this.boilerOtherFaults,
      boilerEfficiency: this.boilerEfficiency,
      boilerActualRepairCost: this.boilerActualRepairCost,
      boilerActualReplaceCost: this.boilerActualReplaceCost,
      boilerRepairOrReplaceIdentified: this.boilerRepairOrReplaceIdentified,
      boilerExistingBoiler: this.boilerExistingBoiler,
      boilerRepairOrReplace: this.boilerRepairOrReplace,
      boilerCostScore: this.boilerCostScore
    };
    this.storage.set(this.sharedObject.getSharedSlugSelectedCM() +"_boilerDataInst", data);
    this.sharedObject.setSharedBoilerObject(data);
    this.presentSave();
  }


  presentSave(){
    let toast = this.toastCtrl.create({
      message: 'Saved Successfully!',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
