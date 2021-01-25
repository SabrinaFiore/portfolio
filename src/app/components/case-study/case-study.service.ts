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
      captitionDescription: "Beginning with a deep research about 'How could be the design of my Portfolio'. First of all was really usefull create a Moon-board (or inspiration board) digital collage with some inspiration about: color, lettering, layout, style. Having a mood board on display helps remind you the original goal of the project.",
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
      captitionDescription: "Wireframing is the main stage of UI/UX software design and an important one for visualizing what potential deliverables will look like. The design process have a significant role here, in order: put the requirements together, create (test) the structure of the project, design the navigation.",
    }
  ];

  getImages(): any[] {
    return this.cards;
  }
}
