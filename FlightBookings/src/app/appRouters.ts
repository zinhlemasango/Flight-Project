import { Component } from '@angular/core';
import { HomeComponent } from './component/home/home.component';
import { FlightsComponent } from './component/flights/flights.component';
import { ViewComponent } from './component/view/view.component';



export const appRoutes = [
    {path: '', Component:HomeComponent},
    {path: 'flights',component:FlightsComponent},
    {path: 'view',component:ViewComponent}
];