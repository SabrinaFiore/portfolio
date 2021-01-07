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
      introduction: "Hey you, welcome, I so glad that you are here! I would like to share with you the case study of my Portfolio, I had this project in my mind for a long time and I really enjoyed designing and developing it. I also belive in a open-sourse creativity process, if you require any further information, feel free to contact me.",
      concept: 'The Concept',
      // tslint:disable-next-line: max-line-length
      description: "Realizing something that could represent me through my design abilities using the photos that I took around and especially highlighting my developing skills. Finding a solution to put my hobbies and habilities all together was really hard, so I started with deep research about 'How should / could be my Portfolio', so I did one 'mood board' with some inspiration taking from the web. After that, I drew the Wireframing and a basic workflow of my web-page... I don't know for how many times I changed my mind!",
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

