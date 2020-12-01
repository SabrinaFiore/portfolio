import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
})

export class CaseStudyComponent implements OnInit {
  constructor() { }

  styleguide = [
    {
      id: 1,
      title: 'Portfolio',
      subtitle: 'Design',
      info: '',
      case: {
        // tslint:disable-next-line: max-line-length
        introduction: 'Hey welcome! Nice to meet you. I would like to share with you the case study of my Portfolio because I really belive in a open-sourse creativity process. I had this project in my mind for a long time and I really enjoyed designing and developing it.',
        concept: 'The Concept:',
        // tslint:disable-next-line: max-line-length
        description: 'Realizing something that could represent me through my design abilities using the photos that I took around and especially highlighting my developing skills. I startet to study the font-family and the color palette that I wanted to use, like the slides on left.',
      },
      image: [
        {
          id: 1,
          url: 'assets/images/styleguide-01.jpg',
        },
        {
          id: 2,
          url: 'assets/images/styleguide-02.jpg',
        },
        {
          id: 3,
          url: 'assets/images/styleguide-03.jpg',
        },
      ]
    },
    {
      id: 2,
      title: '',
      subtitle: 'UI',
      info: 'Moving yourself up and down, left to right, as well, to view more inside the box',
      case: {
        // tslint:disable-next-line: max-line-length
        introduction: 'First of all I designed the wireframing of the project working with the content, and building up layout and information architecture. Once a framework is chosen, it is necessary to determine how the pages are actually going to look. I wanted a web that have a modern-minimal layout where I can deploy amazing tools and libraries. Then, I started laying content designing a grid and put content usign a dark color as the primary background color.',
        concept: 'Breaking change',
        // tslint:disable-next-line: max-line-length
        description: 'Meanwhile I change my mind about the tone of the project so I decide to use a light color as a primary background color, because the light UI works well and it has better contrast with the images that I used and to get more fresh the project',
      },
      image: [
        {
          id: 1,
          url: 'assets/images/ui-home-black.jpg',
        },
        {
          id: 2,
          url: 'assets/images/ui-home-white.jpg',
        }
      ]
    },
    {
      id: 3,
      title: '',
      subtitle: 'Development',
      info: '',
      case: {
        introduction: '',
        concept: 'Steps',
        description: '',
      },
      image: [
        {
          id: 1,
          url: '',
        },
        {
          id: 2,
          url: '',
        }
      ]
    }
  ];

  ngOnInit(): void {
  }
}

