import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewWorkComponent } from './views/view-work/view-work.component';
import { ViewPhotoComponent } from './views/view-photo/view-photo.component';
import { ViewHomeComponent } from './views/view-home/view-home.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: ViewHomeComponent,
    // data: colomarco: rojo
  },
  {
    path: 'view-work',
    component: ViewWorkComponent
  },
  { path: 'view-photo',
    component: ViewPhotoComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
