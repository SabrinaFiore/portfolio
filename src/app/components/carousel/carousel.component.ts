import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './carousel.component.html',
})

export class CarouselComponent implements OnInit {
  title = 'Work experiences';
  subtitle = 'Scroll between cities, to see more about my work experience';

  constructor() { }

  ngOnInit(): void {
  }
}
