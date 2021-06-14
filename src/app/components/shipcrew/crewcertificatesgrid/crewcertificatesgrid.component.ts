import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Certificate } from '../models/crew.model';

@Component({
  selector: 'app-crewcertificatesgrid',
  templateUrl: './crewcertificatesgrid.component.html',
  styleUrls: ['./crewcertificatesgrid.component.css']
})
export class CrewcertificatesgridComponent implements OnInit {

  dataSource  = new MatTableDataSource<Certificate>();
  displayedColumns: string[]=['name','date'];
  @Input("data") data:any = null;


  constructor() {}

  ngOnInit(): void {
    this.dataSource.data = [... this.data];
  }





}
