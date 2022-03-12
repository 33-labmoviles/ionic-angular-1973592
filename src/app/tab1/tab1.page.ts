/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  /*nombres=["Abraham Ramirez", "Brian Esquivel", "Diego Davila",
"Diego Jasso", "Julio Manuel", "Luis Armando Villanueva", "Luis Otoniel Tamez", "Manuel Antonio Juarez","Rogel Axel", "Sergio Gutierrez", "Omar Garza"];*/
alumnos=[
{
  nombre:"Abraham",
  apellido:"Ramirez",
  matricula:"111"
},
{
  nombre:"Brian",
  apellido:"Esquivel",
  matricula:"222"
},
{
  nombre:"Diego",
  apellido:"Davila",
  matricula:"333"
},
{
  nombre:"Diego",
  apellido:"Jasso",
  matricula:"444"
},
{
  nombre:"Julio",
  apellido:"Manuel",
  matricula:"555"
},
{
  nombre:"Armando",
  apellido:"Villanueva",
  matricula:"555"
},
{
  nombre:"Luis",
  apellido:"Tamez",
  matricula:"555"
},
{
  nombre:"Manuel",
  apellido:"Juarez",
  matricula:"555"
},
{
  nombre:"Rogel",
  apellido:"Axel",
  matricula:"555"
},
{
  nombre:"Sergio",
  apellido:"Gutierrez",
  matricula:"555"
},
{
  nombre:"Omar",
  apellido:"Garza",
  matricula:"555"
},
];
@Input() nombre: string="";
@Input() apellido: string="";
@Input() matricula: string="";

agregarAlumno(): void {
  // eslint-disable-next-line no-var
  var nuevoAlumno: any ={
    nombre: this.nombre,
    apellido: this.apellido,
    matricula: this.matricula
  };
  this.alumnos.push(nuevoAlumno);
  console.log(this.alumnos);
}
  constructor() {}

}
