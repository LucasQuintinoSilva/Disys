import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CurriculumComponent } from './curriculum/curriculum.component';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    CarouselComponent,
    CurriculumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
