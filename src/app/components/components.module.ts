import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewgridComponent } from './shipcrew/crewgrid/crewgrid.component';
import { MaterialModule } from '../material/material.module';
import { CrewcardComponent } from './shipcrew/crewcard/crewcard.component';
import { ServiceModule } from '../shared/services/service.module';
import { AppRoutingModule } from '../app-routing.module';
import { CrewcertificatesgridComponent } from './shipcrew/crewcertificatesgrid/crewcertificatesgrid.component';
import { CertificatesDialogComponent } from './shipcrew/certificates-dialog/certificates-dialog.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [CrewgridComponent, CrewcardComponent, CrewcertificatesgridComponent, CertificatesDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ServiceModule,
    AppRoutingModule,
    TranslateModule
    
  ],
  exports: [CrewgridComponent,CrewcardComponent,CrewcertificatesgridComponent,CertificatesDialogComponent],

})
export class ComponentsModule { }
