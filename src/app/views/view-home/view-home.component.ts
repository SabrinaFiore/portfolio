import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
})

export class ViewHomeComponent implements OnInit {
  mainHome = '../../../assets/images/main_image-darker.jpg';
  claimHome = 'Welcome to my webpage. I\'m Sabrina, a Multidisciplinary Front-End Developer.';
  descriptionHome = "I would love to share with you my Portfolio developed on my own, through my development skills, using my photos and also my graphic-design ability to give you a whole image about myself.'";
  scrollDownContentMainHome = 'Good thing happens for those who scroll';

  constructor() { }

  ngOnInit() {
  }

}
