import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  /*alumnos=[
    {
      nombre:'Abraham',
      apellido:'Ramirez',
      matricula:'111'
    },
    {
      nombre:'Brian',
      apellido:'Esquivel',
      matricula:'222'
    },
    {
      nombre:'Diego',
      apellido:'Davila',
      matricula:'333'
    },
    {
      nombre:'Diego',
      apellido:'Jasso',
      matricula:'444'
    },
    {
      nombre:'Julio',
      apellido:'Manuel',
      matricula:'555'
    },
    {
      nombre:'Armando',
      apellido:'Villanueva',
      matricula:'666'
    },
    {
      nombre:'Luis',
      apellido:'Tamez',
      matricula:'777'
    },
    {
      nombre:'Manuel',
      apellido:'Juarez',
      matricula:'888'
    },
    {
      nombre:'Rogel',
      apellido:'Axel',
      matricula:'999'
    },
    {
      nombre:'Sergio',
      apellido:'Gutierrez',
      matricula:'000'
    },
    {
      nombre:'Omar',
      apellido:'Garza',
      matricula:'1110'
    },
    ];
    */
  constructor(private http: HttpClient	) {}

  ngOnInit():void{
    this.getAlumnos();
  }
  alumnos: any=[];

  getAlumnos(){
    return this.http.get('https://alumnos-6002d-default-rtdb.firebaseio.com/alumnos.json').subscribe(res=>
    this.alumnos=res
    )}
}

