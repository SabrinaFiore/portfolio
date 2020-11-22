import { Component, OnChanges, OnInit } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  // tslint:disable-next-line: no-host-metadata-property
  host: { class: 'cards' },
})

export class CardComponent {
  number: number;
  role: string;
  agency: string;
  years: string;
  items: any[];

  constructor(private cardService: CardService) {
    this.items = this.cardService.getImages();
  }
}
