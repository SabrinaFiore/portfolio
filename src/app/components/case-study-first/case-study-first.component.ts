import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-study-first',
  templateUrl: './case-study-first.component.html',
  // tslint:disable-next-line: no-host-metadata-property
  host: { class: 'case-study' },
})
export class CaseStudyFirstComponent implements OnInit {
  title = 'Portfolio';

  constructor() { }

  ngOnInit(): void {
  }

}
