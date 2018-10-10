import { Component, ViewChild, Renderer, Input} from '@angular/core';
import { Storage } from '@ionic/storage';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the BoilerImageUploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'boiler-image-upload',
  templateUrl: 'boiler-image-upload.html'
})
export class BoilerImageUploadComponent {
  accordionExpanded = false;

  @ViewChild("boilerImageForms") boilerFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  GasCertImage: any = [];
  progressGasCert: {percentage: number} = {percentage: 0};
  progressGasCertStatus: string = "Not yet uploaded";
  colorGasCert: string = "danger";

  BCOMImage: any = [];
  progressBCOM: {percentage: number} = {percentage: 0};
  progressBCOMStatus: string = "Not yet uploaded";
  colorBCOM: string = "danger";

  PIBIImage: any = [];
  progressPIBI: {percentage: number} = {percentage: 0};
  progressPIBIStatus: string = "Not yet uploaded";
  colorPIBI: string = "danger";

  PICSImage: any = [];
  progressPICS: {percentage: number} = {percentage: 0};
  progressPICSStatus: string = "Not yet uploaded";
  colorPICS: string = "danger";

  PICAImage: any = [];
  progressPICA: {percentage: number} = {percentage: 0};
  progressPICAStatus: string = "Not yet uploaded";
  colorPICA: string = "danger";

  constructor(private renderer: Renderer,
              private storage: Storage,
              private imagePicker: ImagePicker,
              private camera: Camera,
              private sharedObject: SharedobjectserviceProvider) {
    console.log('Hello BoilerImageUploadComponent Component');

  }

  ionViewDidLoad(){

    console.log(this.boilerFormContent.nativeElement);
    this.renderer.setElementStyle(this.boilerFormContent.nativeElement, "webkitTransition", "max-height 5000ms, padding 500ms");

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_gasCertInst").then((gasCert) => {
      if(gasCert != null){
        this.GasCertImage = gasCert;
        this.progressGasCert.percentage = 100;
        this.progressGasCertStatus = "Completed";
        this.colorGasCert = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_BCOMInst").then((BCOM) => {
      if(BCOM != null){
      this.BCOMImage = BCOM;
      this.progressBCOM.percentage = 100;
      this.progressBCOMStatus = "Completed";
      this.colorBCOM = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_PIBIInst").then((PIBI) => {
      if(PIBI != null){
      this.PIBIImage = PIBI;
      this.progressPIBI.percentage = 100;
      this.progressPIBIStatus = "Completed";
      this.colorPIBI = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_PICSInst").then((PICS) => {
      if(PICS != null){
      this.PICSImage = PICS;
      this.progressPICS.percentage = 100;
      this.progressPICSStatus = "Completed";
      this.colorPICS = "secondary";
      }
    });

    this.storage.get(this.sharedObject.getSharedSlugSelectedCM() + "_PICAInst").then((PICA) => {
      if(PICA != null){
      this.PICAImage = PICA;
      this.progressPICA.percentage = 100;
      this.progressPICAStatus = "Completed";
      this.colorPICA = "secondary";
      }
    });

  }

  // Toggle Form For ESH
  toggleAccordionBoiler() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.boilerFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.boilerFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.boilerFormContent.nativeElement, "max-height", "5000px");
      this.renderer.setElementStyle(this.boilerFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }

  openGallery(tag){
    const options = {
      maximumImagesCount: 5,
      quality: 50,
      width: 512,
      height: 512,
      outputType: 1
    }

    this.imagePicker.getPictures(options).then( imageData =>{
    if(tag == "Gas Cert"){
      for(let i=0; i < imageData.length;i++){
        this.GasCertImage.push('data:image/jpeg;base64,' + imageData[i]);
      }
      
    } else if(tag == "BCOM"){
      for(let i=0; i < imageData.length;i++){
        this.BCOMImage.push('data:image/jpeg;base64,' + imageData[i]);
      }
      
    } else if(tag == "PIBI"){
      for(let i=0; i < imageData.length;i++){
        this.PIBIImage.push('data:image/jpeg;base64,' + imageData[i]);
      }
      
    } else if(tag == "PICS"){
      for(let i=0; i < imageData.length;i++){
        this.PICSImage.push('data:image/jpeg;base64,' + imageData[i]);
      }
      
    } else if(tag == "PICA"){
      for(let i=0; i < imageData.length;i++){
        this.PICAImage.push('data:image/jpeg;base64,' + imageData[i]);  
      }
      
    }
  
    }, (err) => {
      console.log(err);

    });
  }

  capture(tag){
    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      if(tag == "Gas Cert"){
        this.GasCertImage.push('data:image/jpeg;base64,' + imageData);
      } else if(tag == "BCOM"){
        this.BCOMImage.push('data:image/jpeg;base64,' + imageData);
      } else if(tag == "PIBI"){
        this.PIBIImage.push('data:image/jpeg;base64,' + imageData);
      } else if(tag == "PICS"){
        this.PICSImage.push('data:image/jpeg;base64,' + imageData);
      } else if(tag == "PICA"){
        this.PICAImage.push('data:image/jpeg;base64,' + imageData);
      }
    }, (err) => {
      // Handle Error
    });
  }
 
  uploadImage(tag){
    if(tag == "Gas Cert"){
     this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_gasCertInst", this.GasCertImage);
     this.progressUploads(tag);
    } else if(tag == "BCOM"){
     this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_BCOMInst", this.GasCertImage);
     this.progressUploads(tag);
    } else if(tag == "PIBI"){
     this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_PIBIInst", this.GasCertImage);
     this.progressUploads(tag);
    } else if(tag == "PICS"){
     this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_PICSInst", this.GasCertImage);
     this.progressUploads(tag);
    } else if(tag == "PICA"){
     this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_PICAInst", this.GasCertImage);
     this.progressUploads(tag);
    }
  }

  progressUploads(tag){
    for(var i = 0; i <= 100; i+=10){
      if(tag == "Gas Cert"){
        this.progressGasCert.percentage = i;
        if(i == 100){
          this.progressGasCertStatus = "Completed";
          this.colorGasCert = "secondary";
        }

      } else if(tag == "BCOM"){
        this.progressBCOM.percentage = i;
        if(i == 100){
          this.progressBCOMStatus = "Completed";
          this.colorBCOM = "secondary";
        }

      } else if(tag == "PIBI"){
        this.progressPIBI.percentage = i;
        if(i == 100){
          this.progressPIBIStatus = "Completed";
          this.colorPIBI = "secondary";
        }

      } else if(tag == "PICS"){
        this.progressPICS.percentage = i;
        if(i == 100){
          this.progressPICSStatus = "Completed";
          this.colorPICS = "secondary";
        }

      } else if(tag == "PICA"){
        this.progressPICA.percentage = i;
        if(i == 100){
          this.progressPICAStatus = "Completed";
          this.colorPICA = "secondary";
        }
      }
    }
  }

}
