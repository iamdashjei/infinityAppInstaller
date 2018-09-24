import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';

/**
 * Generated class for the InstallerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-installer',
  templateUrl: 'installer.html',
})
export class InstallerPage {
  campaignMeasureView: any;
  lead_slug: any;
  lead_info: any;
  leadCreatedDate: any;
  leadCustName: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public sharedObject: SharedobjectserviceProvider) {
    this.campaignMeasureView = navParams.get('campaignValue');
    this.lead_slug = navParams.get('lead_slug');
    this.leadCreatedDate = navParams.get('leadCreatedDate');
    this.leadCustName = navParams.get('leadCustName');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstallerPage');

    if(this.sharedObject.getSharedCampaignMeasure() != null){
      this.campaignMeasureView = this.sharedObject.getSharedCampaignMeasure();
      this.lead_slug = this.sharedObject.getSharedSlugSelectedCM();
      this.leadCreatedDate = this.sharedObject.getSharedSelectedLeadCreatedDate();
      this.leadCustName = this.sharedObject.getSharedCustName();
    } else {
      this.sharedObject.setSharedSelectedLeadCreatedDate(this.leadCreatedDate);
      this.sharedObject.setSharedCustName(this.leadCustName);
      this.sharedObject.setSharedSlugSelectedCM(this.lead_slug);
      this.sharedObject.setSharedCampaignMeasure(this.campaignMeasureView);
    }
  }

  // View Restriction for Forms. etc.
  isViewedLoft(){
    if (this.campaignMeasureView === 'JUNE LOFT'){
      return true;
    }

    if(this.sharedObject.getSharedCampaignMeasure() != null){
    if(this.sharedObject.getSharedCampaignMeasure() == 'JUNE LOFT'){
      return true;
    }

    }
  }

  isViewedBoiler(){
    if (this.campaignMeasureView === 'Boiler July 2018'){
     return true;
   }  else if (this.campaignMeasureView === 'Boiler April 2018'){
     return true;
   } else if (this.campaignMeasureView === 'INFINITY BOILER MARCH'){
     return true;
   } else if (this.campaignMeasureView === 'JUNE BOILER'){
     return true;
   }

  if(this.sharedObject.getSharedCampaignMeasure() != null){
   if (this.sharedObject.getSharedCampaignMeasure() === 'Boiler July 2018'){
    return true;
  }  else if (this.sharedObject.getSharedCampaignMeasure() === 'Boiler April 2018'){
    return true;
  } else if (this.sharedObject.getSharedCampaignMeasure() === 'INFINITY BOILER MARCH'){
    return true;
  } else if (this.sharedObject.getSharedCampaignMeasure() === 'JUNE BOILER'){
    return true;
  }
  }

  }

  isViewedCavityWall(){
     if (this.sharedObject.getSharedCampaignMeasure() === 'CAVITY July 2018'){
     return true;
   }  else if (this.sharedObject.getSharedCampaignMeasure() === 'Cavity Wall April 2018'){
     return true;
   } else if (this.sharedObject.getSharedCampaignMeasure() === 'INFINITY CAVITY MARCH'){
     return true;
   }  else if (this.sharedObject.getSharedCampaignMeasure() === 'JUNE CAVITY WALL'){
     return true;
   }

   if(this.sharedObject.getSharedCampaignMeasure() != null){
   if (this.sharedObject.getSharedCampaignMeasure() === 'CAVITY July 2018'){
     return true;
   }  else if (this.sharedObject.getSharedCampaignMeasure() === 'Cavity Wall April 2018'){
     return true;
    } else if (this.sharedObject.getSharedCampaignMeasure() === 'INFINITY CAVITY MARCH'){
      return true;
    }  else if (this.sharedObject.getSharedCampaignMeasure() === 'JUNE CAVITY WALL'){
      return true;
    }

    }
  }

  isViewedESH(){
    if(this.campaignMeasureView === 'JUNE ESH'){
      return true;
    } else if (this.campaignMeasureView === 'ESH July 2018'){
      return true;
    } else if (this.campaignMeasureView === 'ESH April 2018'){
      return true;
    } else if (this.campaignMeasureView === 'INFINITY ESH MARCH'){
      return true;
    }

    if(this.sharedObject.getSharedCampaignMeasure() != null){
    if(this.sharedObject.getSharedCampaignMeasure() === 'JUNE ESH'){
      return true;
    } else if (this.sharedObject.getSharedCampaignMeasure() === 'ESH July 2018'){
      return true;
    } else if (this.sharedObject.getSharedCampaignMeasure() === 'ESH April 2018'){
      return true;
    } else if (this.sharedObject.getSharedCampaignMeasure() === 'INFINITY ESH MARCH'){
      return true;
    }
    }
  }

  isViewedSolidWall(){
     if (this.campaignMeasureView === 'INFINITY SOLID WALL'){
      return true;
    }  else if (this.campaignMeasureView === 'SOLID July 2018'){
      return true;
    } else if (this.campaignMeasureView === 'JUNE SOLID WALL'){
      return true;
    }

   if(this.sharedObject.getSharedCampaignMeasure() != null){
   if (this.sharedObject.getSharedCampaignMeasure() === 'INFINITY SOLID WALL'){
     return true;
   }  else if (this.sharedObject.getSharedCampaignMeasure() === 'SOLID July 2018'){
     return true;
   } else if (this.sharedObject.getSharedCampaignMeasure() === 'JUNE SOLID WALL'){
     return true;
   }

   }
  }

  savedObject(){


  }

  submitObject(){}




}
