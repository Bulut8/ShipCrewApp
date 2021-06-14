import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Certificate } from '../models/crew.model';


@Component({
  selector: 'app-certificates-dialog',
  templateUrl: './certificates-dialog.component.html',
  styleUrls: ['./certificates-dialog.component.css']
})
export class CertificatesDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CertificatesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Certificate[]) { }

  ngOnInit(): void {

    console.log('modal-data', this.data)
  }

  close = () => {
    this.dialogRef.close();
  }

}
