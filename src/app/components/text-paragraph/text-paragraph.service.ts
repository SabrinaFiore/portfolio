import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TextParagraphService {
  items: [
    {
      id: 1,
      title: 'Portfolio',
      subtitle: '',
      info: '',
      introduction: "Welcome, I belive in a open-sourse creativity process and I would like to share with you the case study of my Portfolio, I had this project in my mind for a long time and I really enjoyed designing and developing it.",
      paragraphTitle: 'Concept',
      // tslint:disable-next-line: max-line-length
      description: "Realizing something that could represent me through my design abilities using the photos that I took around and highlighting my developing skills. Was really hard finding a solution to put all this stuff together. I started with a UI/UX design phase. In software development usually involves a pre-design stage, design research, and four other main stages: sketching, wireframing, visualization, and slicing. Keep reading to learn about the creative process",
    }
  ];

  getImages(): any[] {
    return this.items;
  }
}
