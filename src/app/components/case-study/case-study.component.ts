import { Component, Input, OnInit } from '@angular/core';
import { CardService } from './case-study.service';


@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
})

export class CaseStudyComponent implements OnInit {
  cards: any[];

  constructor(private CardService: CardService) {
    this.cards = this.CardService.getImages();
  }

  items = [
    {
      id: 1,
      title: 'Portfolio',
      subtitle: 'Design',
      info: '',
      introduction: "Welcome! I would like to share with you the case study of my Portfolio, I had this project in my mind for a long time and I really enjoyed designing and developing it. For these reason and also becouse I belive in a open-sourse creativity process, I created this case-study.",
      concept: 'The Concept',
      // tslint:disable-next-line: max-line-length
      description: "Realizing something that could represent me through my design abilities using the photos that I took around and especially highlighting my developing skills. About a one ago, I started with a deep research about 'How should/could be my Porfolio', so I did one 'moonboard' with some inspiration. - Wireframing section - I startet to study the font-family and the color palette that I wanted to use, like the slides on left.",
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
    }
  ];

  ngOnInit(): void {
  }
}

