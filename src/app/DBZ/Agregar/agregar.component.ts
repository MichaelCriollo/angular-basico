import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../Services/Dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{
  
  @Input() nuevo = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService){

  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if(this.nuevo.nombre.trim().length === 0){ return; }

    // this.onNuevoPersonaje.emit( this.nuevo );
    this.dbzService.agregarPersonajes( this.nuevo );
    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }

  cambiarNombre( event: any ) {
    console.log(event.target.value);
  }
}
