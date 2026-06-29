import { Routes } from '@angular/router';
import { Hunters } from './pages/hunters/hunters';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path:'', component: Home },
    {path:'hunters', component: Hunters},
];
