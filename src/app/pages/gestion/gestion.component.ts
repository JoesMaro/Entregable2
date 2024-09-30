import { Component } from '@angular/core';
import { NavBarComponent } from '../../component/nav-bar/nav-bar.component';
import { FormularioComponent } from "../../component/formulario/formulario.component";
import { TablaComponent } from '../../component/tabla/tabla.component';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [NavBarComponent, FormularioComponent,TablaComponent],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent {

}
