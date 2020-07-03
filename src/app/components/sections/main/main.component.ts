import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  claim: string =  'Welcome to my webpage. I\'m Sabrina, a front-end developer and UX/UI designer.';

  constructor() { }

  ngOnInit() {
  }

}
