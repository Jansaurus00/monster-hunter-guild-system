import { Routes } from '@angular/router';
import { Hunters } from './pages/hunters/hunters';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { Monsters } from './pages/monsters/monsters';
import { Weapons } from './pages/weapons/weapons';

export const routes: Routes = [
    {path:'', component: Home },
    {path:'dashboard', component: Dashboard},
    {path:'hunters', component: Hunters},
    {path:'monsters', component: Monsters},
    {path:'weapons', component: Weapons}
];
