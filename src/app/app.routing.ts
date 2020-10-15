import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JogoComponent } from './jogo/jogo.component';
import { RankComponent } from './rank/rank.component';

const APP_ROUTES: Routes = [
    {path: 'default', component: JogoComponent},
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'rank', component: RankComponent},
    {path: 'home/jogo', component: JogoComponent},
    {path: 'jogo', component: JogoComponent}
]

export const routing: ModuleWithProviders<unknown> = RouterModule.forRoot(APP_ROUTES);