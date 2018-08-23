import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    const firebaseConfig = {
      apiKey: "AIzaSyC6m-aOof-E-s1AyM0GfgJARfaLHYECRDI",
      authDomain: "infinityapp-fe5c6.firebaseapp.com",
      databaseURL: "https://infinityapp-fe5c6.firebaseio.com",
      projectId: "infinityapp-fe5c6",
      storageBucket: "infinityapp-fe5c6.appspot.com",
      messagingSenderId: "918580267251"
    };
    firebase.initializeApp(firebaseConfig);
    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
    if (user){
    this.rootPage = HomePage;
    unsubscribe();
    } else {
    this.rootPage = 'LoginPage';
    unsubscribe();
    }
    });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
