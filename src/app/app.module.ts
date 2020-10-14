import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { JogoServiceService } from './jogo-service.service';
import { RankComponent } from './rank/rank.component';
import { routing } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RankComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [JogoServiceService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { HttpClientModule }
