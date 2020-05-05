import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  viewRoute = [
    { id: 1, path: './view-home' },
    { id: 2, path: './view-work' },
    { id: 3, path: './view-photo'},
  ];

  links = [
    { id: 1, name: 'home', path: './../../views/view-home/view-home.component.html' },
    { id: 2, name: 'work', path: './view-work' },
    { id: 3, name: 'photo', path: './view-photo' }
  ];
  ngOnInit() {
  }
}

