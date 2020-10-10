import { Component, OnChanges } from '@angular/core';
import { PhotoGalleryService } from './photo-gallery.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
})

export class PhotoGalleryComponent implements OnChanges {
  images:any[];   
  allImages:any[] = [];    
    
  constructor(private imageService: PhotoGalleryService) {    
    this.allImages = this.imageService.getImages();    
  }

  ngOnChanges() {    
    this.allImages = this.imageService.getImages();    
  }    
}
