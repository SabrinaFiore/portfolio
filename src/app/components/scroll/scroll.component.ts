import { Component, OnInit } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
})
export class ScrollComponent implements OnInit {

  pathSvg: '../../../assets/icons/multimedia.svg';

  constructor(private iconReg: SvgIconRegistryService) { }

  ngOnInit() {
    this.iconReg.unloadSvg(this.pathSvg);
  }
}
