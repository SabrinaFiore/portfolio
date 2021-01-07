import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
})

export class PhotoGalleryComponent implements OnInit {
  @ViewChild('photoGallery', { static: true }) photoGallery: ElementRef<HTMLDivElement>;
  @ViewChild('photoGalleryBox', { static: true }) photoGalleryBox: ElementRef<HTMLDivElement>;
  @ViewChild('imageOne', { static: true }) imageOne: ElementRef<HTMLElement>;
  @ViewChild('imageSecond', { static: true }) imageSecond: ElementRef<HTMLElement>;
  @ViewChild('imageThird', { static: true }) imageThird: ElementRef<HTMLElement>;
  @ViewChild('imageFourt', { static: true }) imageFourt: ElementRef<HTMLDivElement>;
  @ViewChild('imageFift', { static: true }) imageFift: ElementRef<HTMLDivElement>;
  @ViewChild('imageSixth', { static: true }) imageSixth: ElementRef<HTMLDivElement>;
  @ViewChild('imageSeventh', { static: true }) imageSeventh: ElementRef<HTMLDivElement>;

  constructor( @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.disableScroll(false);
    this.initAnimations();
    this.scrollAnimations();
  }

  disableScroll(disabled: boolean): void {
    if (disabled) {
      this.document.querySelector('body').style.overflowY = 'auto';
    } else {
      this.document.querySelector('body').style.overflowY = 'auto';
    }
  }

  initAnimations(): void {
    gsap.to(this.photoGallery.nativeElement.childNodes, {
      duration: 0.8,
      y: 0,
    });
    gsap.from(this.photoGalleryBox.nativeElement.childNodes, {
      delay: 0.9,
      duration: 1,
      y: 180,
    });
  }

  scrollAnimations(): void {
    gsap.to(this.imageOne.nativeElement, {
      scrollTrigger: {
        trigger: this.imageOne.nativeElement,
        toggleActions: 'play none reverse none',
        start: 'top center',
        markers: true,
      },
      x: -180,
      delay: 0.5,
      duration: 1,
    });
    gsap.to(this.imageSecond.nativeElement, {
      scrollTrigger: {
        trigger: this.imageSecond.nativeElement,
        toggleActions: 'play none reverse none',
        start: 'top center',
      },
      x: 180,
      delay: 0.5,
      duration: 1,
    });
    gsap.to(this.imageThird.nativeElement, {
      scrollTrigger: {
        trigger: this.imageThird.nativeElement,
        toggleActions: 'play none reverse none',
        start: 'top center',
      },
      x: -180,
      delay: 0.5,
      duration: 1,
    });
    gsap.to(this.imageFourt.nativeElement, {
      scrollTrigger: {
        trigger: this.imageFourt.nativeElement,
        toggleActions: 'play none reverse none',
        start: 'top center',
      },
      x: 180,
      delay: 0.5,
      duration: 1,
    });
    gsap.to(this.imageFift.nativeElement, {
      scrollTrigger: {
        trigger: this.imageFift.nativeElement,
        toggleActions: 'play none reverse none',
        start: 'top center',
      },
      x: -180,
      delay: 0.5,
      duration: 1,
    });
    gsap.to(this.imageSixth.nativeElement, {
      scrollTrigger: {
        trigger: this.imageSixth.nativeElement,
        toggleActions: 'play none reverse none',
        start: 'top center',
      },
      x: 180,
      delay: 0.5,
      duration: 1,
    });
    gsap.to(this.imageSeventh.nativeElement, {
      scrollTrigger: {
        trigger: this.imageSeventh.nativeElement,
        toggleActions: 'play none reverse none',
        start: 'top center',
      },
      x: -180,
      delay: 0.5,
      duration: 1,
    });
    // gsap.fromTo($('.photoGalleryImage'), 1, { x:100 }, { y:200 } );
  }
}
