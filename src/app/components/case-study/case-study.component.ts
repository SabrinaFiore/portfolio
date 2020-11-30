import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  // tslint:disable-next-line: no-host-metadata-property
  host: { class: 'case-study' },
})

export class CaseStudyComponent implements OnInit {
  constructor() { }

  styleguide = [
    {
      id: 1,
      url: 'assets/images/styleguide-01.jpg',
    },
    {
      id: 2,
      url: 'assets/images/styleguide-02.jpg',
    },
    {
      id: 3,
      url: 'assets/images/styleguide-03.jpg',
    }
  ];

  ngOnInit(): void {
  }
}

