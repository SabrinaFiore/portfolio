import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.component.html',
})

export class ViewPhotoComponent implements OnInit {
  mainPhotoGallery = "";
  claimPhotoGallery = "Hi guys";
  descriptionPhotoGallery = "Let's see";

  constructor() { }

  ngOnInit() {
  }
}
