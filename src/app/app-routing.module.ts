import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeChild01Component } from './home-child01/home-child01.component';
import { HomeChild01DetailComponent } from './home-child01-detail/home-child01-detail.component';
import { HomeChild02Component } from './home-child02/home-child02.component';
import { HomeChild02DetailComponent } from './home-child02-detail/home-child02-detail.component';

import { ComponentOneComponent } from './component-one/component-one.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent,
            children: [
                { path: 'homeChild01', component: HomeChild01Component },
                { path: 'homeChild01/:id', component: HomeChild01DetailComponent },
                { path: 'homeChild02', component: HomeChild02Component },
                { path: 'homeChild02/:id', component: HomeChild02DetailComponent },
            ]
    },
    { path: 'c1', component: ComponentOneComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
