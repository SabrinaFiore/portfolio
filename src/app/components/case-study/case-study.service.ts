import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CardService {
  cards = [
    {
      id: 1,
      number: '01',
      role: 'Research',
      headline: 'Sabrina',
      description: '',
      url: 'assets/images/moonboard-03.png',
      link: ''
    },
    {
      id: 2,
      number: '02',
      role: 'Wireframing',
      headline: '',
      description: '',
      url: 'assets/images/wireframe-01.png',
      link: ''
    }
  ];

  getImages(): any[] {
    return this.cards;
  }
}
