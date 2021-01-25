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
      link: '',
      captitionTitle: '01. Moodboard',
      captitionDescription: "Beginning with a deep research about 'How could be the design od my Portfolio'. First af all was really usefull create a Moonboard with some inspiration about: color, lettering, layout, style.",
    },
    {
      id: 2,
      number: '02',
      role: 'Wireframing',
      headline: '',
      description: '',
      url: 'assets/images/wireframe-01.png',
      link: '',
      captitionTitle: '02. Wireframing',
      captitionDescription: "Drewing Wireframing and a the workflow of my web-page, this process It's very important to have a overview of the project and I changed my mind, so many time, but it's normal.. it's part of the process",
    }
  ];

  getImages(): any[] {
    return this.cards;
  }
}
