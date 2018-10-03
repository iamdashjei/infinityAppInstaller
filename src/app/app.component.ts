import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';


import firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';

import { RestProvider } from '../providers/rest/rest';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage: any = 'LoginPage';
  rootPage: any;
  token: any;

  constructor(platform: Platform,
              statusBar: StatusBar,
              public toastCtrl: ToastController,
              splashScreen: SplashScreen,
              public storage: Storage,
              public rest: RestProvider) {
    const firebaseConfig = {
      apiKey: "AIzaSyAxzWpx6j3-CgyKb_6kfDqLhKSk5gkrLkk",
      authDomain: "infinityappv2.firebaseapp.com",
      databaseURL: "https://infinityappv2.firebaseio.com",
      projectId: "infinityappv2",
      storageBucket: "infinityappv2.appspot.com",
      messagingSenderId: "39340397583"
    };
    this.isLoggedIn();
    firebase.initializeApp(firebaseConfig);

    FCMPlugin.getToken(
      (token) => {
        console.log("Device Token: " + token);
        this.token = token;
    });

    FCMPlugin.onNotification(function(data){
    if(data.wasTapped){
      this.presentToastNotif();
      this.isLoggedIn();
      //Notification was received on device tray and tapped by the user.
    //  navCtrl.setRoot(DashboardPage);
    }else{
      //Notification was received in foreground. Maybe the user needs to be notified.

      alert("You have new leads");
      location.reload();
      this.isLoggedIn();
      }
    });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  isLoggedIn(){

    this.storage.ready().then(() => {

      this.storage.get('InstallerPhone').then((phone) => {
          if(phone != null){
            this.rest.fetchUserByPhoneNumber(phone, this.token).then((result) => {
                    console.log(result);
                    //this.rootPage = NotificationPage;
                    //this.rootPage = SurveyorPage;
                    this.rootPage = DashboardPage;
                    //this.navCtrl.setRoot(DashboardPage);
            }, (err) => {
                    console.log(err);
                    this.rootPage = 'LoginPage';
              });
          } else{
            this.rootPage = 'LoginPage';
          }

      }, (err) => {
        this.rootPage = 'LoginPage';
      });

    });
  }

  presentToastNotif() {
    let toast = this.toastCtrl.create({
      message: 'You have New Lead assigned!',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
