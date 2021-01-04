import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
})

export class ScrollComponent implements OnInit {
  @Input() scrollDownContent: string;

  constructor() { }

  ngOnInit() { }
}
