import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FitnessComponent } from './fitness/fitness.component';
import { AppRoutingModule } from './app-routing.module'
import { DataService } from './data.service';

import { FooterComponent } from './footer/footer.component';
import { YogaComponent } from './yoga/yoga.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FitnessComponent,
    
    FooterComponent,
    
    YogaComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
