import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  @Input() src: string;
  @Input() claim: string;
  @Input() description: string;
  @Input() scrollDownContentMain: string;

  constructor() { }

  ngOnInit() {
  }

}
