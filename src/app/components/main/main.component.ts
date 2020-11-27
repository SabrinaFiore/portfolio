import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  claim =  'Welcome to my webpage. I\'m Sabrina, a Multidisciplinary Front-End Developer.';
  // tslint:disable-next-line: max-line-length
  claimDescription = 'I would love to share with you my Portfolio developed on my own, through my development skills, using my photos and also my graphic-design ability to give you a whole image about myself.';

  constructor() { }

  ngOnInit() {
  }

}
