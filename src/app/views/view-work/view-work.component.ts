import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-work',
  templateUrl: './view-work.component.html',
})

export class ViewWorkComponent implements OnInit {
  mainCaseStudy = "../../../assets/images/main_case-study-02.jpg";
  claimCaseStudy= "My specializations (and passion) are Front-End-Creative Development and UI-Design.";
  descriptionCaseStudy = "";

  fistCase = 'Portfolio';
  secondCase = 'Baj Aljazira - Banking';

  claim = "ciao";

  ngOnInit() {
  }

}
