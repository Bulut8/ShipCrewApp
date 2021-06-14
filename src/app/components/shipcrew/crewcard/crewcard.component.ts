import { Component, Input, OnInit } from '@angular/core';
import { CrewService } from 'src/app/shared/services/shipcrew/crew.service';
import { Crew } from '../models/crew.model';

@Component({
  selector: 'app-crewcard',
  templateUrl: './crewcard.component.html',
  styleUrls: ['./crewcard.component.css']
})
export class CrewcardComponent implements OnInit {

  @Input() crew: Crew={};

  constructor() { }

  ngOnInit(): void {
    
  }

}
