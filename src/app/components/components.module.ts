import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule } from '@angular/material';

import { NavbarComponent } from './navbar/navbar.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ImageUploaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    NavbarComponent,
    ImageUploaderComponent
  ]
})
export class ComponentsModule { }
