import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CardService {
  items = [
    {
      id: 1,
      number: '01',
      role: 'Front-End Developer',
      agency: 'Crealogix Group',
      years: 'Still working here - Barcelona',
      url: 'assets/images/img06.jpg',
    },
    {
      id: 2,
      number: '02',
      role: 'Front-End Developer Junior',
      agency: 'Roonroom',
      years: 'May 2019 - Barcelona',
      url: 'assets/images/img01.jpg',
    },
    {
      id: 3,
      number: '03',
      role: 'Front-End Developer Junior',
      agency: 'Accon Softwere',
      years: 'Abril 2018 - June 2019 ',
      url: 'assets/images/img01.jpg',
    },
    {
      id: 4,
      number: '04',
      role: 'UI/UX Designer',
      agency: 'Ideare Communication',
      years: '31 July 2017 - Rome',
      url: 'assets/images/img01.jpg',
    },
    {
      id: 5,
      number: '05',
      role: 'UI/UX Designer',
      agency: 'Ideare Communication',
      years: '31 July 2017 - Rome',
      url: 'assets/images/img01.jpg',
    },
    {
      id: 6,
      number: '06',
      role: 'UI/UX Designer',
      agency: 'Ideare Communication',
      years: '31 July 2017 - Rome',
      url: 'assets/images/img01.jpg',
    }
  ];

  getImages(): any[] {
    return this.items;
  }
}
