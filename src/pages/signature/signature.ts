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
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage  ) {
      this.tag =  navParams.get('tag');
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
      .push(InstallerPage);

  }

  drawComplete() {
    if(this.tag == "declare1"){
      this.signatureImage = this.signaturePad.toDataURL();
      this.storage.set("declare1", this.signatureImage);

    } else if (this.tag == "declare2"){
      this.signatureImage = this.signaturePad.toDataURL();
      this.storage.set("declare2", this.signatureImage);

    } else if (this.tag == "declare3"){
      this.signatureImage = this.signaturePad.toDataURL();
      this.storage.set("declare3", this.signatureImage);
    }

    this.navCtrl.push(InstallerPage, {signatureImage: this.signatureImage, tag: this.tag});
  }

  drawClear() {
    this.signaturePad.clear();
  }

}
