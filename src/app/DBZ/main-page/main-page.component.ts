import { Component } from '@angular/core';

import { DbzService } from '../Services/Dbz.service';
import { Personaje } from '../Interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor(){}

  nuevo: Personaje = {
    nombre: 'Maestro',
    poder: 500
  }
  
}
