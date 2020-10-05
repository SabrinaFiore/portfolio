import { BrowserModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';

import { ViewWorkComponent } from './views/view-work/view-work.component';
import { ViewHomeComponent } from './views/view-home/view-home.component';
import { ViewPhotoComponent } from './views/view-photo/view-photo.component';
import { ScrollComponent } from './components/scroll/scroll.component';
import { IconComponent } from './components/icon/icon.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { cardLComponent } from './components/lcard-l/card-l.component';
import { AboutMeComponent } from './components/sections/about-me/about-me.component';
import { MainComponent } from './components/sections/main/main.component';
import { WorkExperienceComponent } from './components/sections/work-experience/work-experience.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LayoutComponent,
    ScrollComponent,
    ViewHomeComponent,
    ViewWorkComponent,
    ViewPhotoComponent,
    IconComponent,
    AboutMeComponent,
    cardLComponent,
    WorkExperienceComponent,
    FormLayoutComponent,
    PhotoGalleryComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularSvgIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
