import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground-headline-code',
  templateUrl: './playground-headline-code.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'p-headline p-headline__code' },
})

export class PlaygroundHeadlineCodeComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
