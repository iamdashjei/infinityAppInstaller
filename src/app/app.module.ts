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
import { InstallerPage } from '../pages/installer/installer';
import { EshComponent } from '../components/esh/esh';
import { EshImageUploadComponent } from '../components/esh-image-upload/esh-image-upload';
import { LoftComponent } from '../components/loft/loft';
import { LoftImageUploadComponent } from '../components/loft-image-upload/loft-image-upload';
import { BoilerComponent } from '../components/boiler/boiler';
import { BoilerImageUploadComponent } from '../components/boiler-image-upload/boiler-image-upload';
import { CavityWallComponent } from '../components/cavity-wall/cavity-wall';
import { CavityWallImageUploadComponent } from '../components/cavity-wall-image-upload/cavity-wall-image-upload';
import { SolidWallComponent } from '../components/solid-wall/solid-wall';
import { SolidWallImageUploadComponent } from '../components/solid-wall-image-upload/solid-wall-image-upload';
import { EDeclarationSignComponent } from '../components/e-declaration-sign/e-declaration-sign';

import { TimeAgoPipe } from 'time-ago-pipe';

import { IonicStorageModule } from '@ionic/storage';
import { RestProvider } from '../providers/rest/rest';
import { SharedobjectserviceProvider } from '../providers/sharedobjectservice/sharedobjectservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    InstallerPage,
    TimeAgoPipe,
    EshComponent,
    EshImageUploadComponent,
    LoftComponent,
    LoftImageUploadComponent,
    BoilerComponent,
    BoilerImageUploadComponent,
    CavityWallComponent,
    CavityWallImageUploadComponent,
    SolidWallComponent,
    SolidWallImageUploadComponent,
    EDeclarationSignComponent,

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
    DashboardPage,
    InstallerPage
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
