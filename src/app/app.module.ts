import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { HomeChild01Component } from './home-child01/home-child01.component';
import { HomeChild02Component } from './home-child02/home-child02.component';
import { HomeChild01DetailComponent } from './home-child01-detail/home-child01-detail.component';
import { HomeChild02DetailComponent } from './home-child02-detail/home-child02-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ComponentOneComponent,
    HomeChild01Component,
    HomeChild02Component,
    HomeChild01DetailComponent,
    HomeChild02DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
