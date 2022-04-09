/* eslint-disable no-trailing-spaces */
import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DbService {


  constructor(private http: HttpClient) { }

  getAlumnos(){
    return this.http.get('https://alumnos-6002d-default-rtdb.firebaseio.com/alumnos.json');
  }
  }

