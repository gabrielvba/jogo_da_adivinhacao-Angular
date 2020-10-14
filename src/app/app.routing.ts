import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RankComponent } from './rank/rank.component';

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'rank', component: RankComponent},
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);