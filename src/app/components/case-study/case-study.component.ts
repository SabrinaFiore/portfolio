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
        introduction: 'Hey welcome! Nice to meet you. I would like to introduce you to the case study of my Portfolio, I had this project in my mind for a long time and I really enjoyed designing and developing it.',
        concept: 'The Concept:',
        description: 'Realizing something that could represent me through the photos that I took highlighting my developing skills',
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
      subtitle: 'Development',
      case: {
        // tslint:disable-next-line: max-line-length
        introduction: '',
        concept: 'Steps',
        description: 'Realize something that could represent me through the photos that I took using my developing skills',
      },
      images: [
        {
          id: 3,
          url: 'assets/images/styleguide-03.jpg',
        },
      ]
    }
  ];

  ngOnInit(): void {
  }
}

