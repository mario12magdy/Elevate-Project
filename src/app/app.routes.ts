import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:'', redirectTo:'Home', pathMatch:'full'},
    {path:"about", component:AboutComponent},
    {path:"Home", component:HomeComponent}
];
