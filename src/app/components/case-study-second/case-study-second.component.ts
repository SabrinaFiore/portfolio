import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-study-second',
  templateUrl: './case-study-second.component.html',
  // tslint:disable-next-line: no-host-metadata-property
  host: { class: 'case-study' },
})
export class CaseStudySecondComponent implements OnInit {
  title = 'Baj Aljazira - Banking';
  constructor() { }

  ngOnInit(): void {
  }

}
