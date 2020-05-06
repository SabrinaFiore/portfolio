import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  links = [
    { id: 1, name: 'home', path: './view-home' },
    { id: 2, name: 'work', path: './view-work' },
    { id: 3, name: 'photo', path: './view-photo' }
  ];

  ngOnInit() {
  }
}

