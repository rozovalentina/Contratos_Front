import { Routes } from '@angular/router';


import { CrearContratoComponent } from './components/crear-contrato/crear-contrato.component';
import { ListarContratosComponent } from './components/listar-contratos/listar-contratos.component';

export const routes: Routes = [
  { path: 'crear', component: CrearContratoComponent },
  { path: 'listar', component: ListarContratosComponent },
  { path: '', redirectTo: '/listar', pathMatch: 'full' },
];


