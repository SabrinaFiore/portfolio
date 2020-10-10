import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PhotoGalleryService {
  allImages = [];    

  getImages() {
    return this.allImages = Imagesdelatils.slice(0);
  }

  getImage(id: number) {    
    return Imagesdelatils.slice(0).find(Images => Images.id == id)
  }
}

const Imagesdelatils = [    
  { "id": 1, "url": "assets/images/img06.jpg" },
  { "id": 2, "url": "assets/images/img01.jpg" },
  { "id": 3, "url": "assets/images/img02.jpg" },
  { "id": 4, "url": "assets/images/img03.jpg" },
  { "id": 5, "url": "assets/images/img04.jpg" },
  { "id": 6, "url": "assets/images/img05.jpg" },
]
