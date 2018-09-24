import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedobjectserviceProvider } from '../../providers/sharedobjectservice/sharedobjectservice';
import { RestProvider} from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
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

  // ESH CM
  eshPIBI: any;
  eshPICP: any;
  eshPICA: any;
  eshPPES: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              public rest: RestProvider,
              public sharedObject: SharedobjectserviceProvider) {
    this.campaignMeasureView = navParams.get('campaignValue');
    this.lead_slug = navParams.get('lead_slug');
    this.leadCreatedDate = navParams.get('leadCreatedDate');
    this.leadCustName = navParams.get('leadCustName');
    this.sharedObject.setSharedSelectedLeadObject(navParams.get('leadItem'));

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

  savedEshObjects(){
    const leadObject = this.sharedObject.getSharedSelectedLeadObject();
    const additional_fields = JSON.parse(leadObject["additional_fields"]);
    console.log("Additional Fields to Concatenation " + JSON.stringify(additional_fields));

    let eshData = this.sharedObject.getSharedEshObject();

    this.storage.get('PPES').then((PPES) => {
    this.eshPPES = PPES;
    });

    this.storage.get('PIBI').then((PIBI) => {
    this.eshPIBI = PIBI;
    });

    this.storage.get('PICP').then((PICP) => {
    this.eshPICP = PICP;
    });

    this.storage.get('PICA').then((PICA) => {
    this.eshPICA = PICA;
    });

    let data = {
      eshPPES: this.eshPPES,
      eshPIBI: this.eshPIBI,
      eshPICP: this.eshPICP,
      eshPICA: this.eshPICA
    };

    let additional_fields_update = {
      date_of_survey: additional_fields.date_of_survey,
      property_type: additional_fields.property_type,
      property_type1: additional_fields.property_type1,
      property_type2: additional_fields.property_type2,
      addressInstall: additional_fields.addressInstall,
      notes: additional_fields.notes,
      postCode: additional_fields.postCode,
      bedrooms: additional_fields.bedrooms,
      tenure: additional_fields.tenure,
      heating_source: additional_fieldsa.heating_source,
      customer_type: additional_fields.customer_type,
      surveyor_name: additional_fields.surveyor_name,
      name_of_customer: additional_fields.name_of_customer,
      other: additional_fields.other,
      dob: additional_fields.dob,
      newHeatingSystemUsing: additional_fields.newHeatingSystemUsing,
      newSystemHeatBool: additional_fields.newSystemHeatBool,
      eshUnroundedPOPT: additional_fields.eshUnroundedPOPT,
      eshRoundedPOPT: additional_fields.eshRoundedPOPT ,
      preExttESHSlimline: additional_fields.preExttESHSlimline,
      preExtEshFanAsst: additional_fields.preExtEshFanAsst,
      preExtEshHighHeatRet: additional_fields.preExtEshHighHeatRet,
      numberOfEshInstalledQlfySL: additional_fields.numberOfEshInstalledQlfySL,
      numberOfEshInstalledNQlfySL:additional_fields.numberOfEshInstalledNQlfySL,
      numberOfEshInstalledQlfyFA: additional_fields.numberOfEshInstalledQlfyFA,
      numberOfEshInstalledNQlfyFA: additional_fields.numberOfEshInstalledNQlfyFA,
      numberOfEshInstalledQlfyHHR: additional_fields.numberOfEshInstalledQlfyHHR,
      numberOfEshInstalledNQlfyHHR:additional_fields.numberOfEshInstalledNQlfyHHR,
      qeshRepSL: additional_fields.qeshRepSL,
      qeshRepHHR: additional_fields.qeshRepHHR,
      qeshFA: additional_fields.qeshFA
    }

    this.sharedObject.setSharedEshObjectImage(data);

  }

  savedObject(){
    if(this.sharedObject.getSharedMeasureToUpload() == 'esh'){
      this.savedEshObjects();
      alert("Saved Lead Successfully!");
    }
  }

  submitObject(){
    const submitData = this.sharedObject.getSharedSubmitObject();

    // this.rest.updateLeadData(this.lead_slug).then((result) =>  {
    //   console.log(result);
    //
    // }, (err) => {
    //   console.log(err);
    // });

  }




}
