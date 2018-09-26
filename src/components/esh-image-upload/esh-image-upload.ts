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

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_PPES").then((PPES) => {
      PPES != null ? this.base64ImagePPES = PPES : this.base64ImagePPES = '';
      PPES != null ? this.progressPPES.percentage = 100 : this.progressPPES.percentage = 0;
      PPES != null ? this.progressPPESStatus = "Completed" : this.progressPPESStatus = "Not yet completed.";
      PPES != null ? this.colorPPES = "secondary" : this.colorPPES = "danger";
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_PIBI").then((PIBI) => {
      PIBI != null ? this.base64ImagePIBI = PIBI : this.base64ImagePIBI = '';
      PIBI != null ? this.progressPIBI.percentage = 100 : this.progressPIBI.percentage = 0;
      PIBI != null ? this.progressPIBIStatus = "Completed" : this.progressPIBIStatus = "Not yet completed.";
      PIBI != null ? this.colorPIBI = "secondary" : this.colorPIBI = "danger";
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_PICP").then((PICP) => {
      PICP != null ? this.base64ImagePICP = PICP : this.base64ImagePICP = '';
      PICP != null ? this.progressPICP.percentage = 100 : this.progressPICP.percentage = 0;
      PICP != null ? this.progressPICPStatus = "Completed" : this.progressPICPStatus = "Not yet completed.";
      PICP != null ? this.colorPICP = "secondary" : this.colorPICP = "danger";
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_PICA").then((PICA) => {
      PICA != null ? this.base64ImagePICA = PICA : this.base64ImagePICA = '';
      PICA != null ? this.progressPICA.percentage = 100 : this.progressPICA.percentage = 0;
      PICA != null ? this.progressPICAStatus = "Completed" : this.progressPICAStatus = "Not yet completed.";
      PICA != null ? this.colorPICA = "secondary" : this.colorPICA = "danger";
    });

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

    if(tag == 'PPES'){
      this.base64ImagePPES = 'data:image/jpeg;base64,' + imageData;

    } else if(tag == 'PIBI'){
      this.base64ImagePIBI = 'data:image/jpeg;base64,' + imageData;

    } else if(tag == 'PICP'){
      this.base64ImagePICP = 'data:image/jpeg;base64,' + imageData;


    } else if(tag == 'PICA'){
      this.base64ImagePICA = 'data:image/jpeg;base64,' + imageData;

    }

    }, (err) => {
      console.log(err);

    });
  }


  uploadImage(tag){
  console.log("Upload Image: " + tag)

    if(tag == 'PPES'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + '_PPES', this.base64ImagePPES);
      this.progressUploads(tag);

    } else if(tag == 'PIBI'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + '_PIBI', this.base64ImagePIBI);
      this.progressUploads(tag);

    } else if(tag == 'PICP'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + '_PICP', this.base64ImagePICP);
      this.progressUploads(tag);

    } else if(tag == 'PICA'){
      this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + '_PICA', this.base64ImagePICA);
      this.progressUploads(tag);
    }

  }

  progressUploads(tag){
  for(var i = 0; i <= 100; i+=10){
    if(tag == 'PPES'){
          this.progressPPES.percentage = i;
          if(i == 100){
            this.progressPPESStatus = "Completed";
            this.colorPPES = "secondary";
          }
    } else if(tag == 'PIBI'){
          this.progressPIBI.percentage = i;
          if(i == 100){
            this.progressPIBIStatus = "Completed";
            this.colorPIBI = "secondary";
          }
    } else if(tag == 'PICP'){
          this.progressPICP.percentage = i;
          if(i == 100){
            this.progressPICPStatus = "Completed";
            this.colorPICP = "secondary";
          }
    } else if(tag == 'PICA'){
          this.progressPICA.percentage = i;
          if(i == 100){
            this.progressPICAStatus = "Completed";
            this.colorPICA = "secondary";
          }
    }

   }
  }


}
