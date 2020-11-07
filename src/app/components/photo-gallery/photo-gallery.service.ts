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
  { "id": 7, "url": "assets/images/img07.jpg" },
  { "id": 8, "url": "assets/images/img08.jpg" },
  { "id": 9, "url": "assets/images/img09.jpg" },
  { "id": 10, "url": "assets/images/img10.jpg" },
  { "id": 11, "url": "assets/images/img11.jpg" },
  { "id": 12, "url": "assets/images/img12.jpg" },
  { "id": 13, "url": "assets/images/img13.jpg" },
  { "id": 14, "url": "assets/images/img14.jpg" },
  { "id": 15, "url": "assets/images/img15.jpg" },
  { "id": 16, "url": "assets/images/img16.jpg" },
  { "id": 17, "url": "assets/images/img17.jpg" },
  { "id": 18, "url": "assets/images/img18.jpg" },
  { "id": 19, "url": "assets/images/img19.jpg" },
  { "id": 20, "url": "assets/images/img20.jpg" },
  { "id": 21, "url": "assets/images/img21.jpg" },
  { "id": 22, "url": "assets/images/img22.jpg" },
  { "id": 23, "url": "assets/images/img23.jpg" },
  { "id": 24, "url": "assets/images/img24.jpg" },
  { "id": 25, "url": "assets/images/img25.jpg" },
  { "id": 26, "url": "assets/images/img26.jpg" },
  { "id": 27, "url": "assets/images/img27.jpg" },
  { "id": 28, "url": "assets/images/img28.jpg" },
  { "id": 29, "url": "assets/images/img29.jpg" },
  { "id": 30, "url": "assets/images/img30.jpg" },
  { "id": 31, "url": "assets/images/img31.jpg" },
  { "id": 32, "url": "assets/images/img32.jpg" },
  { "id": 33, "url": "assets/images/img33.jpg" },
  { "id": 34, "url": "assets/images/img34.jpg" },
  { "id": 35, "url": "assets/images/img35.jpg" },
  { "id": 36, "url": "assets/images/img36.jpg" },
  { "id": 37, "url": "assets/images/img37.jpg" },
  { "id": 38, "url": "assets/images/img38.jpg" },
  { "id": 39, "url": "assets/images/img39.jpg" },
  { "id": 40, "url": "assets/images/img40.jpg" },
  { "id": 41, "url": "assets/images/img41.jpg" },
  { "id": 42, "url": "assets/images/img42.jpg" },
  { "id": 43, "url": "assets/images/img43.jpg" },
]
