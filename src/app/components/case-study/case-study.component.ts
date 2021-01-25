import { Component, Input, OnInit } from '@angular/core';
import { CardService } from './case-study.service';


@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
})

export class CaseStudyComponent implements OnInit {
  cards: any[];
  cardLink: string;

  constructor(private CardService: CardService) {
    this.cards = this.CardService.getImages();
  }

  items = [
    {
      id: 1,
      title: 'Portfolio',
      subtitle: '',
      info: '',
      introduction: "Hey you, welcome, I so glad that you are here! I would like to share with you the case study of my Portfolio, I had this project in my mind for a long time and I really enjoyed designing and developing it. I also belive in a open-sourse creativity process, if you require any further information, feel free to contact me.",
      concept: 'Concept',
      // tslint:disable-next-line: max-line-length
      description: "Realizing something that could represent me through my design abilities using the photos that I took around and highlighting my developing skills. Was really hard finding a solution to put all this stuff together. Keep reading to learn about the creative process",
    }
  ];

  ngOnInit(): void {
  }
}

