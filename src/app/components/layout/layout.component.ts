import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {

  @Input() linearGradient = 'linear-gradient(to bottom, #065B51, #99BED1)';

  constructor() { }

  ngOnInit() {
  }

}
