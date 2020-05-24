import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AngularSvgIconModule, SvgIconComponent } from 'angular-svg-icon';

import { ViewWorkComponent } from './views/view-work/view-work.component';
import { ViewHomeComponent } from './views/view-home/view-home.component';
import { ViewPhotoComponent } from './views/view-photo/view-photo.component';
import { ScrollComponent } from './components/scroll/scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LayoutComponent,
    ViewHomeComponent,
    ViewWorkComponent,
    ViewPhotoComponent,
    ScrollComponent,
    SvgIconComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
