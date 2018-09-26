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
  }

  ionViewWillEnter(){
    console.log("ENTERED VIEW");
    this.sharedObject.setSharedCampaignMeasure(null);
  }

  getLeadsAssigned(){
  this.storage.get("installer_user_id").then((val) => {
    this.user_id = val;
    this.rest.fetchLeadAssigned(val).then((result) => {

      this.leadsNew = result['New Leads'];
      this.leadsInProgress = result['In Progress'];
      this.leadsCompleted = result['Completed'];

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
}
