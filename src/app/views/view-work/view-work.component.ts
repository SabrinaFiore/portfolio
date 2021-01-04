import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-work',
  templateUrl: './view-work.component.html',
})
export class ViewWorkComponent implements OnInit {
  mainCaseStudy = "../../../asset/images/main_case-study.jpg";
  claimCaseStudy= "hola";
  descriptionCaseStudy = "hola hola";

  fistCase = 'Portfolio';
  secondCase = 'Baj Aljazira - Banking';

  claim = "ciao";

  ngOnInit() {
  }

}
