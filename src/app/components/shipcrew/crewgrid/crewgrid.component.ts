import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CrewService } from 'src/app/shared/services/shipcrew/crew.service';
import { CertificatesDialogComponent } from '../certificates-dialog/certificates-dialog.component';
import { CrewcertificatesgridComponent } from '../crewcertificatesgrid/crewcertificatesgrid.component';
import { Crew } from '../models/crew.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-crewgrid',
  templateUrl: './crewgrid.component.html',
  styleUrls: ['./crewgrid.component.css']
})
export class CrewgridComponent implements OnInit {

  dataSource  = new MatTableDataSource<Crew>();
  displayedColumns: string[]=['action','firstName','lastName','nationality','title'];

  constructor(private crewService: CrewService,public dialog: MatDialog,public translate: TranslateService) {
    translate.addLangs(['en', 'fr','pt']);
  translate.setDefaultLang('en'); }

  ngOnInit(): void {
   this.crewService.getCrewList().subscribe(response => {
      console.log('success', response);
      this.dataSource.data=[... response];
    }, err => { 
      console.log('err', err);
    });
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  showCertificates(selectedItem:Crew): void {

    let dialogRef = this.dialog.open(CertificatesDialogComponent,{data:selectedItem.certificates});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      // listeyi yeniden çekilir.
    });

  }

}
 