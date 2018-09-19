import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstallerPage } from './installer';
import { EshComponent } from '../../components/esh/esh';

@NgModule({
  declarations: [
    InstallerPage,
  
  ],
  imports: [
    IonicPageModule.forChild(InstallerPage),
  ],
})
export class InstallerPageModule {}
