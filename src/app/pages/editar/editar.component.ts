import { Component, inject } from '@angular/core';
import { AutosService } from '../../services/autos.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'] 
})
export class EditarComponent {
  servicio = inject(AutosService);
  ruta = inject(ActivatedRoute);

  id: any;
  nombre: any;
  marca: any;
  modelo: any;
  ano: any;
  dueno: any;

  ngOnInit(): void {

    this.ruta.params.subscribe(parametro => {
      this.id = parametro['idcarro']; 
      this.servicio.getAuto(this.id).subscribe(p => {
        this.nombre = p.nombre;
        this.marca = p.marca;
        this.modelo = p.modelo; 
        this.ano = p.ano;
        this.dueno = p.dueno;
      });
    });
  }

  editar(data: any) {
    
    const autoEditado = { ...data.value, id: this.id };
    this.servicio.putAutos(autoEditado).subscribe(response => {
      console.log('Auto editado exitosamente', response);
      location.href='gestion'
    });
  }
}
