import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
})
export class WorkExperienceComponent implements OnInit {

  title: string = "Work experiences.";

  constructor() { }

  ngOnInit(): void {
  }

}
