/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { getDatabase, onValue, ref, remove, set, update } from 'firebase/database';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor() {}

  ngOnInit(): void {
    const db = getDatabase();
    const auxalumno = ref(db, 'alumnos/');
    onValue(auxalumno, (aux) => {
      this.alumnoslista = aux.val();
      this.alumnoslista = Object.values(this.alumnoslista);
    });
  }

  indice: any = {};
  alumnoslista: any = [];
  estado = false;



  deleteAlum(num: any): any{
    const db = getDatabase();
    remove(ref(db, 'alumnos/' + num.matricula));
    window.history.back();window.location.reload();
    }

    @Input() nombre ='';
    @Input() apellidos ='';

    editarAlum(num: any){
      this.estado = !this.estado;
      this.indice=num;
    }

    guardarAlum(): any{
      const db = getDatabase();
      update(ref(db, 'alumnos/'+ this.indice.matricula),{
        nombre: this.nombre,
       apellido: this.apellidos,
        matricula: this.indice.matricula
        });
      window.location.reload();
      this.clear();
    }

    clear(): void{
      this.nombre='';
      this.apellidos='';
      this.estado=false;
      this.indice='';
    }
}
