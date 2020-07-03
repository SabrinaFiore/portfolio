import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-l',
  templateUrl: './card-l.component.html',
})
export class cardLComponent implements OnInit {

  number: number;
  role: string;
  agency: string;
  years: string;

  items = [
    {
      id: 1,
      number: '01',
      role: 'Front-End Developer',
      agency: 'Crealogix Group',
      years: 'Still working here - Barcelona',
    },
    {
      id: 2,
      number: '02',
      role: 'Front-End Developer Junior',
      agency: 'Roonroom',
      years: 'May 2019 - Barcelona',
    },
    {
      id: 3,
      number: '03',
      role: 'Front-End Developer Junior',
      agency: 'Accon Softwere',
      years: 'Abril 2018 - June 2019 ',
    },
    {
      id: 4,
      number: '04',
      role: 'UI/UX Designer',
      agency: 'Ideare Communication',
      years: '31 July 2017 - Rome',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
