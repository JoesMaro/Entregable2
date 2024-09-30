import { Routes } from '@angular/router';
import { GestionComponent } from './pages/gestion/gestion.component';
import { EditarComponent } from './pages/editar/editar.component';
import { Error404Component } from './component/error404/error404.component';



export const routes: Routes = [
    {path: 'gestion',component: GestionComponent},
    {path: 'editar/:idcarro', component: EditarComponent}, 
    
    {path: '', redirectTo:'gestion',pathMatch:'full'},
    {path:'**' , component: Error404Component}
];
