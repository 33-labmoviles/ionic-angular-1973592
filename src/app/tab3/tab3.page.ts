import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  nombre:string="";
  apellido: string="";
  matricula: string="";
  constructor(
    private http: HttpClient) {}
  onSubmit(agregarAlumno:NgForm){
    console.log("hola");
  }

}
