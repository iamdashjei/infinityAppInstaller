import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CardIO } from '@ionic-native/card-io';
import { Badge } from '@ionic-native/badge';
import { Camera  } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SignaturePadModule } from 'angular2-signaturepad';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';

import { TimeAgoPipe } from 'time-ago-pipe';

import { IonicStorageModule } from '@ionic/storage';
import { RestProvider } from '../providers/rest/rest';
import { SharedobjectserviceProvider } from '../providers/sharedobjectservice/sharedobjectservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    TimeAgoPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    SignaturePadModule, // Signature Pad (E-Signature)
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    CardIO,
    Badge,
    FileTransfer,
    FileTransferObject,
    File,
    ImagePicker,
    Base64,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    SharedobjectserviceProvider
  ]
})
export class AppModule {}
