import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// https://github-wiki-see.page/m/Dhruvaraju/angular_alpha/wiki/NGRX-and-State-Management
// https://blog.lacolaco.net/2020/12/angular-using-ngrx-with-redux-toolkit/
// https://ichi.pro/es/como-implementar-la-tienda-ngrx-en-aplicaciones-angulares-118345505261564
//https://dzone.com/articles/angular-app-state-management-with-ngrx
@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class GalleryModule { }
