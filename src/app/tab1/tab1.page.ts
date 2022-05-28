/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {getDatabase, onValue, ref} from 'firebase/database';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    const db=getDatabase();
    const auxalumno=ref(db,'alumnos/');
    onValue(auxalumno,(aux)=>{
      this.alumnoslista=aux.val();
      this.alumnoslista=Object.values(this.alumnoslista);
    });
  }
  alumnoslista: any=[];
}
