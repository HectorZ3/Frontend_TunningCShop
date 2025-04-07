import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Ruta raíz que carga el Home
    { path: 'navbar', component: NavbarComponent } //Ruta raiz al Navbar
];
