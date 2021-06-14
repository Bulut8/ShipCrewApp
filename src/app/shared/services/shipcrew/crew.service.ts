import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { Crew } from 'src/app/components/shipcrew/models/crew.model';


@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor() { }

  crewList: Array<Crew> = [

    {
      id:1,
      firstName: 'James',
      lastName: 'Smith',
      nationality: 'American',
      title: 'Captain',
      certificates: [
        {
          id:1,
          name: 'SOLAS',
          date: '08/08/2015'
        },
        {
          id:2,
          name: 'MARPOL',
          date: '08/08/2016'
        },
        {
          id:3,
          name: ' Anti-Fouling System',
          date: '08/08/2017'
        },
        {
          id:4,
          name: 'International Tonnage ',
          date: '08/08/2018'
        },
        {
          id:5,
          name: 'International Load Line ',
          date: '08/08/2019'
        },
      ]
    },
    {
      id:2,
      firstName: 'Cristiano',
      lastName: 'Aveiro',
      nationality: 'Portuguese',
      title: 'Engineer',
      certificates: [
        {
          id:1,
          name: 'MARPOL',
          date: '01/01/2015'
        },
        {
          id:2,
          name: ' Anti-Fouling System',
          date: '01/01/2016'
        },
        {
          id:3,
          name: 'SOLAS',
          date: '01/01/2017'
        },
        {
          id:4,
          name: 'International Tonnage ',
          date: '01/01/2018'
        },
        {
          id:5,
          name: 'Certificate of Classification',
          date: '01/01/2019'
        },
      ]
    },
    {
      id:3,
      firstName: 'Corentin',
      lastName: 'Tolisso',
      nationality: 'French',
      title: 'Mechanicer',
      certificates: [
        {
          id:1,
          name: ' Anti-Fouling System',
          date: '02/02/2015'
        },
        {
          id:2,
          name: 'Certificate of Registry',
          date: '02/02/2016'
        },
        {
          id:3,
          name: 'SOLAS',
          date: '02/02/2017'
        },
        {
          id:4,
          name: 'International Tonnage ',
          date: '02/02/2018'
        },
        {
          id:5,
          name: 'Certificate of Classification',
          date: '02/02/2019'
        },
      ]
    }

  ];

  getCrewList():Observable<Crew[]> {
    return of(this.crewList);
  }

  getCrewDetail(id:number):Observable<any> {

    const data = this.crewList.find(x => x.id == id)
    return of(data);
  }
  
}
