import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  // tslint:disable-next-line: no-host-metadata-property
  host: { class: 'case-study' },
})

export class CaseStudyComponent implements OnInit {
  constructor() { }

  styleguide = [
    {
      id: 1,
      title: 'Portfolio',
      subtitle: 'Design',
      case: {
        // tslint:disable-next-line: max-line-length
        introduction: 'Hey welcome! Nice to meet you. I would like to share with you the case study of my Portfolio because I really belive in a open-sourse creativity process. I had this project in my mind for a long time and I really enjoyed designing and developing it.',
        concept: 'The Concept:',
        // tslint:disable-next-line: max-line-length
        description: 'Realizing something that could represent me through my designer abilities using the photos that I took around and especially highlighting my developing skills',
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
      case: {
        // tslint:disable-next-line: max-line-length
        introduction: 'First of all I designed the wireframing of the project working with the content, and building up layout and information architecture. Once a framework is chosen, it is necessary to determine how the pages are actually going to look. I wanted a web that looked like a modern-minimal layout where I can implement amazing development tools and libraries. Then, I started laying content designing a grid and put content in a \'Dark mode\' usign a dark color as the primary background color.',
        concept: 'Process',
        // tslint:disable-next-line: max-line-length
        description: '',
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

