import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
})
export class PhotoGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  image: string;
}
