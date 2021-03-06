import { PlaygroundHeadlineCodeComponent } from './components/playground-headline-text/playground-headline-code.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { ViewWorkComponent } from './views/view-work/view-work.component';
import { ViewHomeComponent } from './views/view-home/view-home.component';
import { ViewPhotoComponent } from './views/view-photo/view-photo.component';

import { ScrollComponent } from './components/scroll/scroll.component';
import { IconComponent } from './components/icon/icon.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MainComponent } from './components/main/main.component';
import { CardComponent } from './components/card/card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { PanelComponent } from './components/panel/panel.component';
import { TextParagraphComponent } from './components/text-paragraph/text-paragraph.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ScrollComponent,
    ViewHomeComponent,
    ViewWorkComponent,
    ViewPhotoComponent,
    IconComponent,
    AboutMeComponent,
    CardComponent,
    CarouselComponent,
    FormLayoutComponent,
    PhotoGalleryComponent,
    FooterComponent,
    CaseStudyComponent,
    PanelComponent,
    TextParagraphComponent,
    PlaygroundHeadlineCodeComponent,
  ],
  imports: [
    AppRoutingModule,
    AngularSvgIconModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
