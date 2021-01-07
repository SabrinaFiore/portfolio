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
      headline: 'Crealogix Group - Barcelona',
      description: 'May 2019 - Still working here',
      url: 'assets/images/gallery_work01.jpg',
      link: 'https://crealogix.com/en'
    },
    {
      id: 2,
      number: '02',
      role: 'Front-End Developer',
      headline: 'Roonroom - Barcelona',
      description: 'Jun 2018 - May 2019',
      url: 'assets/images/gallery_work02.jpg',
      link: 'https://www.runroom.com/'
    },
    {
      id: 3,
      number: '03',
      role: 'Front-End Developer Junior',
      headline: 'Accon Softwere - Barcelona ',
      description: 'Abril 2018 - June 2018',
      url: 'assets/images/gallery_work03.jpg',
      link: 'https://accon.com.br/',
    },
    {
      id: 4,
      number: '04',
      role: 'Web Designer',
      headline: 'Fin Capital group - Barcelona',
      description: 'Oct 2017 - Feb 2018',
      url: 'assets/images/gallery_work04.jpg',
      link: 'https://www.idearecommunication.it/',
    },
    {
      id: 5,
      number: '05',
      role: 'Web/UI Designer',
      headline: 'Ideare Communication - Rome',
      description: 'Oct 2016 / Jul 2018',
      url: 'assets/images/gallery_work05.jpg',
      link: 'https://www.idearecommunication.it/',
    },
    {
      id: 6,
      number: '06',
      role: 'Photographer Assistant',
      headline: 'RAW - Rome Art Week',
      description: '31 July 2017 - Rome',
      url: 'assets/images/gallery_work06.jpg',
      link: 'https://romeartweek.com/it/'
    },
    {
      id: 7,
      number: '07',
      role: 'Sampling',
      headline: 'Red Bull',
      description: 'December 2013 - May 2016',
      url: 'assets/images/gallery_work07.jpg',
      link: 'https://www.redbull.com/it-it/'
    }
  ];

  getImages(): any[] {
    return this.items;
  }
}
