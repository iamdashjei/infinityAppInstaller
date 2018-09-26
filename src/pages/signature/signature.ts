import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { SignaturePad} from 'angular2-signaturepad/signature-pad';
import { InstallerPage } from '../installer/installer';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html',
})
export class SignaturePage {
   @ViewChild(SignaturePad) public signaturePad : SignaturePad;

   public signaturePadOptions : Object = {
     'minWidth': 2,
     'canvasWidth': 340,
     'canvasHeight': 200
  };

  public signatureImage : string;
  tag: any;
  lead_slug: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage  ) {
      this.tag =  navParams.get('tag');
      this.lead_slug = navParams.get('lead_slug');
  }

  ngAfterViewInit() {
       console.log("Reset Model Screen");
        this
        .signaturePad
        .clear();
        this.canvasResize();
  }

  canvasResize(){
    let canvas = document.querySelector('canvas');
    this.signaturePad.set('minWidth', 1);
    this.signaturePad.set('canvasWidth', canvas.offsetWidth);
    this.signaturePad.set('canvasHeight', canvas.offsetHeight);
  }

  drawCancel() {
    this
      .navCtrl
      .pop();

  }

  drawComplete() {
    if(this.tag == "declare1"){
      this.signatureImage = this.signaturePad.toDataURL();
      this.storage.set(this.lead_slug + "_declare1", this.signatureImage);

    } else if (this.tag == "declare2"){
      this.signatureImage = this.signaturePad.toDataURL();
      this.storage.set(this.lead_slug + "_declare2", this.signatureImage);

    } else if (this.tag == "declare3"){
      this.signatureImage = this.signaturePad.toDataURL();
      this.storage.set(this.lead_slug + "_declare3", this.signatureImage);
    }
    
    this.navCtrl.push(InstallerPage, {signatureImage: this.signatureImage, tag: this.tag}).then(() => {
      const index = this.navCtrl.getActive().index;
      this.navCtrl.remove(0, index);
    });
  }

  drawClear() {
    this.signaturePad.clear();
  }

}
