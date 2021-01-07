import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-paragraph',
  templateUrl: './text-paragraph.component.html',
})
export class TextParagraphComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() info: string;
  @Input() introduction: string;
  @Input() concept: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
