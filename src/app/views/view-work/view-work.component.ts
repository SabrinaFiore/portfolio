import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-work',
  templateUrl: './view-work.component.html',
})
export class ViewWorkComponent implements OnInit {
  fistCase = 'Portfolio';
  secondCase = 'Baj Aljazira - Banking';

  constructor() { }

  ngOnInit() {
  }

}
