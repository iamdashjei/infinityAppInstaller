import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LoadingController } from 'ionic-angular';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';

import { SharedobjectserviceProvider } from '../sharedobjectservice/sharedobjectservice';

import { DashboardPage } from '../../pages/dashboard/dashboard';

import { ToastController } from 'ionic-angular';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  public keyVal: any;
  public loading;
  public loadingLogIn;
  surveyorName: string;
  surveyorEmail: string;
  public headers = new Headers(
  {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    'Content-Type' : 'application/json'
  });

  public options = new RequestOptions({ headers: this.headers });

  constructor(public http: Http,
              private storage: Storage,
              public toastCtrl: ToastController,
              public sharedObject: SharedobjectserviceProvider,
              public loadingCtrl: LoadingController) {
    console.log('Hello RestProvider Provider');
              this.loading = loadingCtrl.create({
                content: 'Uploading to CRM...'
                });

              this.loadingLogIn = loadingCtrl.create({
                content: 'Logging in...'
                });
  }

  getOtpCodes(){
    return new Promise(resolve => {
      this.http.get('http://app.infinityenergyorganisation.co.uk/v1/app/api/get-otpcodes').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });

  }

  createOtpCodes(otp_code, otp_user_id, otp_date) {
    let data = JSON.stringify({
      otp_code: otp_code,
      otp_date: otp_date,
      otp_user_id: otp_user_id
    });

   return new Promise((resolve, reject) => {
      this.http.post('https://app.infinityenergyorganisation.co.uk/v1/app/api/add-otpcodes', data, this.options)
      .toPromise()
      .then((response) =>
      {
        console.log('API Response : ', response.json());
        resolve(response.json());
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }

  fetchLeadBySlug(lead_slug){
    let data = JSON.stringify({ lead_slug });

    return new Promise((resolve, reject) => {
       this.http.post('https://app.infinityenergyorganisation.co.uk/v1/app/api/get-leadsBySlug', data, this.options)
       .toPromise()
       .then((response) =>
       {
         console.log('API Response : ', response.json());
         resolve(response.json());
       })
       .catch((error) =>
       {
         console.error('API Error : ', error.status);
         console.error('API Error : ', JSON.stringify(error));
         reject(error.json());
       });
     });
  }


  fetchLeadAssigned(id){

    let data = JSON.stringify({ otp_user_id: this.sharedObject.getSharedUserId() });

    return new Promise((resolve, reject) => {
      this.http.post('https://app.infinityenergyorganisation.co.uk/v1/app/api/get-userByLeadInstaller', data, this.options)
      .toPromise()
      .then((response) =>
      {
        console.log('API Response for Lead Assigned: ', response.json());
        resolve(response.json());
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }

  fetchUserByPhoneNumber(phoneNumber, token){

    let data = JSON.stringify({ phone: phoneNumber, device_token: token });
    this.loadingLogIn.present();
    return new Promise((resolve, reject) => {
      this.http.post('https://app.infinityenergyorganisation.co.uk/v1/app/api/get-userByPhoneNumber', data, this.options)
      .toPromise()
      .then((response) =>
      {
        //console.log('API Response : ', response.json());
        resolve(response);
        let obj = response.json();
        let id = obj['id'];

        this.setKey("installer_id", id[0].id);
        this.setKey("installer_user_name", id[0].name);
        this.storage.set("installer_email", id[0].email);
        this.storage.set("installer_position", id[0].position);
        this.storage.set("installer_address", id[0].address);

        this.sharedObject.setSharedUserId(id[0].id);
          this.loadingLogIn.dismiss();
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }

  updateLeadsFromActionBtn(lead_slug, id, status, remarks){
    let data = JSON.stringify({
      lead_slug: lead_slug,
      otp_user_id: id,
      status: status,
      remarks: remarks
    });

    return new Promise((resolve, reject) => {
      this.http.post('https://app.infinityenergyorganisation.co.uk/v1/app/api/update-LeadsBySurveyor', data, this.options)
      .toPromise()
      .then((response) =>
      {
        console.log('API Response for Lead Assigned: ', response.json());
        resolve(response.json());
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }

  updateLeadData(lead_slug, additional_fields){
    let data = JSON.stringify({
      lead_slug: lead_slug,
      additional_fields: JSON.stringify(additional_fields),
      user_id: this.sharedObject.getSharedUserId()
    });

    return new Promise((resolve, reject) => {
      this.http.post('https://app.infinityenergyorganisation.co.uk/v1/app/api/update-acceptLeadsByInstaller', data, this.options)
      .toPromise()
      .then((response) =>
      {
        console.log('API Response for Lead Update: ', response.json());
        resolve(response.json());
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }

  fileUpload(fileBase64, type, tag){
    let data = JSON.stringify({
      image: fileBase64,
      type: type,
      tag: tag,
      lead_slug: this.sharedObject.getSharedSlugSelectedCM()
    });

    this.returnablePromise('https://app.infinityenergyorganisation.co.uk/v1/app/api/file-upload-esh', data);
  }

  fileUploadMainForm(type, imgObj){
    let data = JSON.stringify({
      type: type,
      imgObj: imgObj,
      lead_slug: this.sharedObject.getSharedSlugSelectedCM()
    });
    this.loading.present();
    this.returnablePromise('https://app.infinityenergyorganisation.co.uk/v1/app/api/file-upload-mainform', data);
  }

  fileUploadInstaller(type, imgObj){
    let data = JSON.stringify({
      type: type,
      imgObj: imgObj,
      lead_slug: this.sharedObject.getSharedSlugSelectedCM()
    });
    this.loading.present();
    this.returnablePromise('https://app.infinityenergyorganisation.co.uk/v1/app/api/file-upload-installer', data);
  }



    // Set Key For Specific Data
    public setKey(settingName, value){
      console.log("Saving Key For: " + settingName);
      console.log("Saving Value:" + value);
      return this.storage.set(settingName, value);
    }

    // Get Key From Saved Key
    public getKey(settingName){
      console.log("Getting Key For: " + settingName);
      this.storage.get(settingName).then((val) => {
        console.log("Value of get Key:" + val);
        this.keyVal = val;
        return val;
       });
    }

    getSurveyorName(){
      console.log("getting surveyor name");
      return this.surveyorName;
    }

    getSurveyorEmail(){
      console.log("getting surveyor email");
      return this.surveyorEmail;
    }

    isCurrentUserActive(): boolean {
      if(this.surveyorName){
        return true;
      }
      return false;
    }

    returnablePromise(url, data){
      return new Promise((resolve, reject) => {
        this.http.post(url, data, this.options)
        .toPromise()
        .then((response) =>
        {
          console.log('API Response: ', response.json());
          resolve(response.json());
          this.loading.dismiss();
          this.presentToastSubmitlead();
          this.storage.set(this.sharedObject.getSharedSlugSelectedCM() + "_isSubmitted", "yes");
           //this.navCtrl.push(DashboardPage);
        })
        .catch((error) =>
        {
          console.error('API Error : ', error.status);
          console.error('API Error : ', JSON.stringify(error));
          reject(error.json());
        });
      });
    }

    presentToast() {
      let toast = this.toastCtrl.create({
        message: 'Saved Mainform Successfully!',
        duration: 3000,
        position: 'bottom'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
    }

    presentToastSavelead() {
      let toast = this.toastCtrl.create({
        message: 'Saved Lead Successfully!',
        duration: 3000,
        position: 'bottom'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
    }

    presentToastSubmitlead() {
      let toast = this.toastCtrl.create({
        message: 'Lead Submitted Successfully!',
        duration: 3000,
        position: 'bottom'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
    }



}
