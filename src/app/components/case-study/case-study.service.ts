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
      url: 'assets/images/moonboard-03.png',
      captitionTitle: '01. Moodboard',
      captitionDescription: "Deep research about how could be the design of my Portfolio. Was really usefull create a Moon-board (or inspiration board) a digital collage with some inspiration about: color, lettering, layout, style. Having a mood board on display helps remind you the original goal of the project.",
    },
    {
      id: 2,
      number: '02',
      role: 'Wireframing',
      url: 'assets/images/wireframe-01.png',
      captitionTitle: '02. Wireframing',
      captitionDescription: "Wireframing is the main stage of UI/UX software design and an important one for visualizing what potential deliverables will look like. The design process have a significant role here, in order: put the requirements together, create (test) the structure of the project, design the navigation.",
    }
  ];

  items = [
    {
      id: 1,
      url: 'assets/images/code01.png',
    },
    {
      id: 2,
      url: 'assets/images/code02.png',
    }
  ];

  getImages(): any[] {
    return this.cards;
  }

  getItem(): any[] {
    return this.items;
  }
}
