import { Component, inject } from '@angular/core';
import { AutosService } from '../../services/autos.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
   opcion:any = 'honda'
  servicio=inject(AutosService)
autos:any

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.servicio.getAutos().subscribe(p=>{
    this.autos = p
  })
}
eliminar(id: string){
  this.servicio.deleteAutos(id).subscribe()
  alert("Autos Eliminados!")
   location.href='gestion'
}

}
