import { Component, OnInit } from '@angular/core';
import { CardService } from './case-study.service';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
})

export class CaseStudyComponent implements OnInit {
  cards: any[];
  cardLink: string;

  introductionTitle = "Open-sourse creativity process";
  introductionCaption = "Welcome, I belive in a open-sourse creativity process and I would like to share with you the case study of my Portfolio, I had this project in my mind for a long time and I really enjoyed designing and developing it.";
  introductionSubtitle = "Concept";
  introductionDescription = "Realizing something that could represent me through my design abilities using the photos that I took and highlighting my developing skills, was really hard finding a solution to put all this stuff together. In software development usually involves a pre-design stage, design research, and other main stages like: mood-board, sketching, wireframing, visualization. My design phase:";

  mainTitle = "Code for design and design for coding";
  mainIntroduction = "I believe that design and development work better together when our components, tools, and models are in sync. Keeping development and design concurrent means your product is easier to maintain, and update.";
  mainParagraphTitle = "Typography";
  mainDescription = "Establishing harmonious sizes for the various typographic elements (H1, H2, paragraph etc) you might use in a project is often done arbitrarily or by eye.";

  constructor(private CardService: CardService) {
    this.cards = this.CardService.getImages();
  }

  ngOnInit(): void {
  }
}
