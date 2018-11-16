import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';

import { NavbarComponent } from './navbar/navbar.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ImageUploaderComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    NavbarComponent,
    ImageUploaderComponent,
    LoaderComponent
  ]
})
export class ComponentsModule { }
