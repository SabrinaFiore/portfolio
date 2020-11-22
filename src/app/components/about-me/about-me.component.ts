import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
})

export class AboutMeComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  paragraph = 'Originally from Bari, Southern Italy, born in May 19th, 1992. She attended the Academy of Fine Arts in Rome in 2016, where she started to elaborate on a deep level her interest in photography and graphic arts. Thanks to her passions, she continued; studying in Barcelona where she kept developing and upgrading her knowledge. In 2018, she started approaching the Hi-tech world working as Front-End Developer. Meantime she never stopped working on her photography projects and graphic art interest.';
  title = 'About me';

  constructor() { }

  ngOnInit(): void {
  }

}
