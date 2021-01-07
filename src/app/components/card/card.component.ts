import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  // tslint:disable-next-line: no-host-metadata-property
  host: { class: 'cards' },
})

export class CardComponent {
  @Input() link = 'string';
  @Input() url = 'string';
  @Input() number = 'string';
  @Input() role = 'string';
  @Input() headline = 'string';
  @Input() description = 'string';
  @Input() cardDescription : boolean = false;
}
