import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
})

export class ViewHomeComponent implements OnInit {
  mainHome = '../../../assets/images/main_image-darker.jpg';
  claimHome = 'Welcome to my webpage. I\'m Sabrina, a Multidisciplinary Front-End Developer.';
  descriptionHome = "I would love to share with you my Portfolio. I'm very great that you are here I created this project to combine my multidisciplinary knowledge about UI-Design and Development. Enjoy it!";
  scrollDownContentMainHome = 'Good thing happens for those who scroll';

  constructor() { }

  ngOnInit() {
  }
}

