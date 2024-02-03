import { Component } from '@angular/core';
import { datosMovil, datosMovilF2, datosWeb, datosWebF2} from './datos';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
})
export class NosotrosComponent {



  datosWebF2: datosWebF2[] = [
    {name: 'Bryan Cruz', range: 'Estudiante', gmail: 'bscruz@espe.edu.ec', url:'assets/img/administradores/Bryan_Cruz.png'},
    {name: 'Stefany Erazo', range: 'Estudiante', gmail: 'scerazo1@espe.edu.ec', url:'assets/img/administradores/Stefy_Erazo.jpg'},
    {name: 'Flores Leonardo', range: 'Estudiante', gmail: 'ldflores@espe.edu.ec', url:'assets/img/administradores/Leonardo_Flores.jpeg'},
  ];



}
