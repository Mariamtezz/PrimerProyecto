import { Routes } from '@angular/router';
import { Contador } from './components/contador/contador';
import { Matatopos } from './components/matatopos/matatopos';
import { Carrera } from './components/carrera/carrera';
import { PasoParametros } from './components/paso-parametros/paso-parametros';

export const routes: Routes = [
    { path: 'contador', component: Contador},
    { path: 'matatopos', component: Matatopos},
    { path: 'carrera', component: Carrera},
    { path: 'pasoparametros', component: PasoParametros},

];