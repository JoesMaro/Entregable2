import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AutosService } from '../../services/autos.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  servicio=inject(AutosService)
  id:any
  nombre:any
  marca:any
  modelo:any
  ano:any
  dueno:any
//funcion para guardar los datos 

guardar(data:any){
  this.servicio.postAutos(data.value).subscribe()
  alert("Autos Agregados")
  this.limpiar()
  location.href='gestion'
}
//FUNCION PARA LIMPIAR LOS CAMPOS 
limpiar(){
  this.nombre='';this.marca='';this.modelo='';this.ano='',this.dueno=''
}
}
