import { Component, OnInit } from '@angular/core';
import { Team } from '../team';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {

  team = Team;

  constructor() { }

  ngOnInit() {
  }

}
