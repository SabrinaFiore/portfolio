import { Component, OnInit } from '@angular/core';
import { CardService } from '../card/card.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
})

export class CarouselComponent implements OnInit {
  title = 'Work experiences';
  subtitle = 'Scroll between cities, click on them to see more about my work experiences';

  items: any[];

  constructor(private cardService: CardService) {
    this.items = this.cardService.getImages();
  }

  ngOnInit(): void {
  }
}
