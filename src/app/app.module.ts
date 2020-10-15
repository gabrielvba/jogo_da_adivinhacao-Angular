import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RankComponent } from './rank/rank.component';
import { routing } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { JogoServiceService } from './service/jogo-service.service';
import { JogoComponent } from './jogo/jogo.component';
import { SharedService } from './service/shared-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RankComponent,
    NavbarComponent,
    JogoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [JogoServiceService, HttpClientModule, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { HttpClientModule }
