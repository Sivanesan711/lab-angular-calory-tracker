import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodlistComponent } from './foodlist/foodlist.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FoodlistComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
