import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
})

export class AboutMeComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  paragraph = 'I was born in Bari, Southern Italy, in May 19th, 1992. I attended the Academy of Fine Arts in Rome in 2016, where I started to elaborate on a deep level of interest in photography and graphic arts. Thanks to my passions, I continued studying in Barcelona where I kept developing and upgrading my knowledge about coding. In 2017, I started approaching the Hi-tech world working as Front-End Developer. Meantime I never stopped working on my photography projects and graphic art interest.';
  title = 'About me';

  constructor() { }

  ngOnInit(): void {
  }

}
