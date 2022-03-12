import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss'],
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(private ruta:ActivatedRoute) { }

  ngOnInit() {
    this.obtenerDetalleAlumno(this.matricula)
  }
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
    matricula: string=this.ruta.snapshot.params.id;
    obtenerDetalleAlumno(matricula:string):any{
      console.log(matricula);

      for (let i = 0; i < this.alumnos.length; i++) {
        if(matricula==this.alumnos[i].matricula){
          
        }
      }
    }
}
