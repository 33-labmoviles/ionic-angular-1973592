/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DbService} from '../services/db.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  // eslint-disable-next-line @typescript-eslint/ban-types
  alumnos: Object;

  constructor(private http: HttpClient, private db: DbService) {}
  ngOnInit(): void{
    this.db.getAlumnos().subscribe(data=>{this.alumnos=data;});
  }

}

