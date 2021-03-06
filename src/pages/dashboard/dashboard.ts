import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, MenuController, LoadingController, ToastController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { RestProvider } from '../../providers/rest/rest';
import { DatasourceProvider } from '../../providers/datasource/datasource';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { Badge } from '@ionic-native/badge';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { InstallerPage } from '../installer/installer';

import { Storage } from '@ionic/storage';
import firebase from 'firebase';

import { ImagePicker } from '@ionic-native/image-picker';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  leadsNew: any;
  leadsInProgress: any;
  leadsCompleted: any;
  user_id: any;
  isSubmitted: boolean = false;
  listSubmitted: any = [];
  
  
  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              private badge: Badge,
              public storage: Storage,
              public rest: RestProvider,
              public imagePicker: ImagePicker,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public sharedObject: SharedobjectserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this.getLeadsAssigned();
    this.isSubmittedLead();
  }

  ionViewWillEnter(){
    console.log("ENTERED VIEW");
    this.sharedObject.setSharedCampaignMeasure(null);

  }

  getLeadsAssigned(){
  this.storage.get("installer_user_id").then((val) => {
    this.user_id = val;
    this.rest.fetchLeadAssigned(val).then((result) => {

      this.leadsNew = result['New Leads Installer'];
      this.leadsInProgress = result['In Progress Installer'];
      this.leadsCompleted = result['Completed Installer'];

      console.log("All Leads: " +   JSON.stringify(this.leadsNew));
    }, (err) => {
      console.log(err);

    });
  });

  

  }

  openLeads(lead_slug, campaign_name, leadItem, leadCreatedDate, leadCustName){

    this.navCtrl.push(InstallerPage, {
      lead_slug: lead_slug,
      campaignValue: campaign_name,
      leadCreatedDate: leadCreatedDate,
      leadCustName: leadCustName,
      leadItem: leadItem
    });

  }

  isSubmittedLead(){
    this.listSubmitted = [];
    this.storage.forEach( (value, key, index) => {
     
      console.log("from the key", key);
      this.listSubmitted.push(key);
    });
  }

  isSubmit(lead_slug){
    if(this.listSubmitted.indexOf(lead_slug + "_isSubmitted") === -1){
      return true;
    } else {
      return false;
    } 
  }

  isSubmit2(lead_slug){
    if(this.listSubmitted.indexOf(lead_slug + "_isSubmitted") !== -1){
      return true;
    } else {
      return false;
    }
  }

  updateLeads(lead_slug, remarks){
    this.rest.updateLeadsFromActionBtn(lead_slug, this.user_id, 'In Progress Installer', remarks).then((result) => {
      console.log(result);
      this.getLeadsAssigned();

    }, (err) => {
      console.log(err);

    });

  }

  
}
