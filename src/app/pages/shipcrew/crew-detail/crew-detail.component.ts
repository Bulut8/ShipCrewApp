import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crew } from 'src/app/components/shipcrew/models/crew.model';
import { CrewService } from 'src/app/shared/services/shipcrew/crew.service';

@Component({
  selector: 'app-crew-detail',
  templateUrl: './crew-detail.component.html',
  styleUrls: ['./crew-detail.component.css']
})
export class CrewDetailComponent implements OnInit {

  crew: Crew = {};

  constructor(private route: ActivatedRoute, private crewService: CrewService) { }

  ngOnInit(): void {

    var id = this.route.snapshot.params.id;

    this.crewService.getCrewDetail(id).subscribe(response => {
      console.log('success', response);
      this.crew = {... response};

    }, err => {
      console.log('err', err);
    });

  }

}
