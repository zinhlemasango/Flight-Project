
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FlightsComponent } from './component/flights/flights.component';
import { ViewComponent } from './component/view/view.component';
import{FormsModule} from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';



const appRoutes : Routes = [
{path:'home',component:HomeComponent},
{path:'flights',component:FlightsComponent},
{path:'view',component:ViewComponent},
{path:'',redirectTo:'/Home',pathMatch:'full'}


]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlightsComponent,
    ViewComponent,
    LandingPageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
