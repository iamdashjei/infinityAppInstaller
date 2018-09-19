import { NgModule } from '@angular/core';
import { EshComponent } from './esh/esh';
import { EshImageUploadComponent } from './esh-image-upload/esh-image-upload';
import { CavityWallComponent } from './cavity-wall/cavity-wall';
import { CavityWallImageUploadComponent } from './cavity-wall-image-upload/cavity-wall-image-upload';
import { SolidWallComponent } from './solid-wall/solid-wall';
import { SolidWallImageUploadComponent } from './solid-wall-image-upload/solid-wall-image-upload';
import { BoilerComponent } from './boiler/boiler';
import { BoilerImageUploadComponent } from './boiler-image-upload/boiler-image-upload';
import { LoftComponent } from './loft/loft';
import { LoftImageUploadComponent } from './loft-image-upload/loft-image-upload';
@NgModule({
	declarations: [EshComponent,
    EshImageUploadComponent,
    CavityWallComponent,
    CavityWallImageUploadComponent,
    SolidWallComponent,
    SolidWallImageUploadComponent,
    BoilerComponent,
    BoilerImageUploadComponent,
    LoftComponent,
    LoftImageUploadComponent],
	imports: [],
	exports: [EshComponent,
    EshImageUploadComponent,
    CavityWallComponent,
    CavityWallImageUploadComponent,
    SolidWallComponent,
    SolidWallImageUploadComponent,
    BoilerComponent,
    BoilerImageUploadComponent,
    LoftComponent,
    LoftImageUploadComponent]
})
export class ComponentsModule {}
