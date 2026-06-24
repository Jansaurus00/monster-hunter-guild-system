import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Weapons } from './pages/weapons/weapons';
import { Monsters } from './pages/monsters/monsters';
import { Hunters } from './pages/hunters/hunters';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path:'', component:Home },
    {path:'hunters', component:Hunters },
    {path:'monsters', component:Monsters },
    {path:'weapons', component:Weapons },
    {path:'dashboard', component:Dashboard },
];
