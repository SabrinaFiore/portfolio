import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  host: { class: 'footer' },
})
export class FooterComponent implements OnInit {

  constructor() { }

  items = [
    {
      id: 1,
      url: 'assets/icons/linkedin.svg',
      link: 'https://www.linkedin.com/in/sabrina-fiore-8437a657/',
      skill: 'Angular, typescript, javascript, Sass, HTML5',
    },
    {
      id: 2,
      url: 'assets/icons/github.svg',
      link: 'https://github.com/SabrinaFiore',
      skill: '',
    },
    {
      id: 3,
      url: 'assets/icons/instagram.svg',
      link: '#',
      skill: 'UI Design/Graphic Design',
    }
  ];

  ngOnInit(): void {
  }

}
