import { Component, ViewChild, Renderer, Input} from '@angular/core';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';

/**
 * Generated class for the EshImageUploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'esh-image-upload',
  templateUrl: 'esh-image-upload.html'
})
export class EshImageUploadComponent {
  accordionExpanded = false;

  @ViewChild("eshImageForms") eshFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  progressPPES: {percentage: number} = {percentage: 0};
  progressPPESStatus: string = "Not yet completed";
  colorPPES: string = "danger";

  progressPICP: {percentage: number} = {percentage: 0};
  progressPICPStatus: string = "Not yet completed";
  colorPICP: string = "danger";

  progressPIBI: {percentage: number} = {percentage: 0};
  progressPIBIStatus: string = "Not yet completed";
  colorPIBI: string = "danger";

  progressPICA: {percentage: number} = {percentage: 0};
  progressPICAStatus: string = "Not yet completed";
  colorPICA: string = "danger";

  base64ImagePPES: any;
  base64ImagePIBI: any;
  base64ImagePICP: any;
  base64ImagePICA: any;

  constructor(public renderer: Renderer,
              public storage: Storage,
              private camera: Camera,
              public sharedObject: SharedobjectserviceProvider) {

  }


  ionViewDidLoad(){

    console.log(this.eshFormContent.nativeElement);
    this.renderer.setElementStyle(this.eshFormContent.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");

  }

  // Toggle Form For ESH
  toggleAccordionESHImage() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "max-height", "1200px");
      this.renderer.setElementStyle(this.eshFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }


  openGallery(tag) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
    console.log("This tag: " + tag);


    }, (err) => {
      console.log(err);

    });
  }


  uploadImage(tag){
  console.log("Upload Image: " + tag)

  }

  progressUploads(tag){
  for(var i = 0; i <= 100; i+=10){

   }
  }


}
