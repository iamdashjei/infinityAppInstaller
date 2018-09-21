import { Component, ViewChild, Renderer, Input} from '@angular/core';
import { Storage } from '@ionic/storage';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { SignaturePage } from '../../pages/signature/signature';

import { NavController, NavParams, ModalController } from 'ionic-angular';
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
  accordionExpanded2 = false;
  accordionExpanded3 = false;

  @ViewChild("decForms") decFormContent: any;
  @ViewChild("dec2Forms") dec2FormContent: any;
  @ViewChild("dec3Forms") dec3FormContent: any;

  @Input('title') title: string;

  @ViewChild(SignaturePad) public signaturePad : SignaturePad;


  icon: string = "arrow-forward";
  icon2: string = "arrow-forward";
  icon3: string = "arrow-forward";

  dec3Warranty: any;
  public signatureImage : any;
  public signatureImage2 : any;
  public signatureImage3 : any;

  public signaturePadOptions : Object = {
    'minWidth': 1,
    'canvasWidth': 1000,
    'canvasHeight': 200
  }

  constructor(public renderer: Renderer,
              public storage: Storage,
              public navParams: NavParams,
              public modalController: ModalController,
              public sharedObject: SharedobjectserviceProvider) {
    console.log('Hello EDeclarationSignComponent Component');

    // if(navParams.get('tag') == 'declare1'){
    //   this.signatureImage = navParams.get('signatureImage');
    //
    //
    // } else if(navParams.get('tag') == 'declare2') {
    //   this.signatureImage2 = navParams.get('signatureImage');
    // 
    //
    // } else if(navParams.get('tag') == 'declare3'){
    //   this.signatureImage3 = navParams.get('signatureImage');
    //
    // }

    this.storage.get('declare1').then((declare1) => {
      if(declare1 != null){
          this.signatureImage = declare1;
      }
     });

     this.storage.get('declare2').then((declare2) => {
       if(declare2 != null){
           this.signatureImage2 = declare2;
       }
    });

    this.storage.get('declare3').then((declare3) => {
      if(declare3 != null){
          this.signatureImage3 = declare3;
      }
   });

  }

  ionViewDidLoad(){

    this.renderer.setElementStyle(this.decFormContent.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");
    this.renderer.setElementStyle(this.dec2FormContent.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");
    this.renderer.setElementStyle(this.dec3FormContent.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");
  }

  canvasResize() {
    let canvas = document.querySelector('canvas');
    this.signaturePad.set('minWidth', 1);
      console.log(canvas.offsetWidth);
    this
      .signaturePad
      .set('canvasWidth', canvas.offsetWidth);

    this
      .signaturePad
      .set('canvasHeight', canvas.offsetHeight);
  }

  drawClear() {
    this
      .signaturePad
      .clear();
  }

  drawComplete() {
  //  this.storage.set("FloorPlan", this.signaturePad.toDataURL());
  }

  // Toggle Form For Declaration
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

  // Toggle Form For Declaration
  toggleAccordionDeclaration2() {
    if(this.accordionExpanded2){
      this.renderer.setElementStyle(this.dec2FormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.dec2FormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.dec2FormContent.nativeElement, "max-height", "1200px");
      this.renderer.setElementStyle(this.dec2FormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded2 = !this.accordionExpanded2;
    this.icon2 = this.icon2 == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }

  // Toggle Form For Declaration
  toggleAccordionDeclaration3() {
    if(this.accordionExpanded3){
      this.renderer.setElementStyle(this.dec3FormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.dec3FormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.dec3FormContent.nativeElement, "max-height", "1200px");
      this.renderer.setElementStyle(this.dec3FormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded3 = !this.accordionExpanded3;
    this.icon3 = this.icon3 == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }

  openSignatureModel(tag){
    setTimeout(() => {
       let modal = this.modalController.create(SignaturePage, { tag: tag});
    modal.present();
    }, 300);

  }


}
