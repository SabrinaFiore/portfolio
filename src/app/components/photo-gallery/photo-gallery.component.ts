import { Component, ElementRef, Inject, OnChanges, OnInit, QueryList, ViewChild } from '@angular/core';
import { PhotoGalleryService } from './photo-gallery.service';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';
import { trigger } from '@angular/animations';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
})

export class PhotoGalleryComponent implements OnInit {
  images:any[];   
  allImages:any[] = [];

  @ViewChild('photoGallery', { static: true }) photoGallery: ElementRef<HTMLDivElement>;
  @ViewChild('photoGalleryRow', { static: true }) photoGalleryRow: ElementRef<HTMLDivElement>;
  @ViewChild('photoGalleryImage01', { static: true }) photoGalleryImage01: ElementRef<HTMLDivElement>;
  @ViewChild('photoGalleryImage02', { static: true }) photoGalleryImage02: ElementRef<HTMLDivElement>;
  @ViewChild('photoGalleryImage03', { static: true }) photoGalleryImage03: ElementRef<HTMLDivElement>;
  @ViewChild('photoGalleryImage04', { static: true }) photoGalleryImage04: ElementRef<HTMLDivElement>;
  @ViewChild('photoGalleryImage05', { static: true }) photoGalleryImage05: ElementRef<HTMLDivElement>;
  @ViewChild('photoGalleryImage') photoGalleryImage: ElementRef<HTMLElement>;
  
  constructor(private imageService: PhotoGalleryService, @Inject(DOCUMENT) private document: Document) {    
    this.allImages = this.imageService.getImages();    
  }

  ngOnChanges() {    
    this.allImages = this.imageService.getImages();    
  }

  ngOnInit() {
    this.disableScroll(false);
    this.scrollAnimations();
    this.initAnimations();
  }

  disableScroll(disabled: boolean): void {
    if (disabled) {
      this.document.querySelector('body').style.overflowY = 'hidden';
    } else {
      this.document.querySelector('body').style.overflowY = 'auto';
    }
  }

  initAnimations(): void {
    gsap.from(this.photoGallery.nativeElement.childNodes, {
      delay: 0.4,
      duration: 0.8,
      y: 30,
      stagger: 0.15,
    });
    gsap.from(this.photoGalleryRow.nativeElement.childNodes, {
      delay: 0.5,
      duration: 0.8,
      y: 90,
      stagger: 0.15,
    });
  }

  scrollAnimations(): void { 
    gsap.to(this.photoGalleryRow.nativeElement.childNodes, {
      scrollTrigger: {
        trigger: this.photoGalleryRow.nativeElement,
        scrub: true,
        start: '-130px top',
      },
      duration: 0.6,
      y: -40,
      stagger: 0.15,
    });
  }
}
 