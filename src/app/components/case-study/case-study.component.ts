import { Component, OnInit } from '@angular/core';
import { CardService } from './case-study.service';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
})

export class CaseStudyComponent implements OnInit {
  cards: any[];
  cardLink: string;
  items: any[];

  introductionTitle = "Open-sourse creativity process";
  introductionCaption = "Welcome, I belive in a open-sourse creativity process and I would like to share with you the case study of my Portfolio, I had this project in my mind for a long time and I really enjoyed designing and developing it.";
  introductionSubtitle = "Concept";
  introductionDescription = "Realizing something that could represent me through my design abilities using the photos that I took and highlighting my developing skills, was really hard finding a solution to put all this stuff together. In software development usually involves a pre-design stage, design research, and other main stages like: mood-board, sketching, wireframing, visualization. The design phase:";

  mainTitle = "Code for design and design for coding";
  mainIntroduction = "I believe that design and development work better together when our components, tools, and models are in sync. Keeping development and design concurrent means your product is easier to maintain, and update. I applied a multidisciplinary approach to my portfolio, from Designer to Front-End Developer, from Front-End Developer to Designer to improve my problem-solving skills and to create one product reusable, extensible, and controlled.";
  mainParagraphTitle = "Design System";
  mainDescription = "Design system is an essential-collection of reusable UI components. It's a usefull system to define: colors, typography, spacing, components and layout, as well. The first thing that I do was establishing harmonious sizes for the various typographic elements (H1, H2, paragraph etc) and a basic color palette. A well-defined scale helps users understand your content better, speeds up a product development cycle, and even helps to reduce technical debt.";

  coreSubtitle = "Typography Matters";
  coreIntroduction = "Typography is arguably the essential part of a website. Designing a typography system means making decisions about: the typeface (font-family) you want to use, type (modular) scale, responsiveness of the text (size unit and breakpoints), spacing and vertical rhythm, colors (theming).";
  coreParagraphTitle = " ";
  coreDescription = " ";

  constructor(private CardService: CardService) {
    this.cards = this.CardService.getImages();
    this.items = this.CardService.getItem();
  }

  ngOnInit(): void {
  }
}
