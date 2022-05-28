/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Location, registerLocaleData } from '@angular/common';
import { getDatabase, onValue, ref, remove } from 'firebase/database';
import { Database } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss'],
})
export class AlumnoDetalleComponent implements OnInit {
  
  constructor(private ruta: ActivatedRoute,public actionSheetController: ActionSheetController) { }
  alumnoslista: any=[];
  alumnodetalle: any={};
  matricula: string=this.ruta.snapshot.params.id;
  ngOnInit(): void {
    const db=getDatabase();
    const auxdetalle=ref(db,'alumnos/'+this.matricula);
    onValue(auxdetalle,(aux)=>{
      this.alumnodetalle=aux.val();
    });
  }
  deleteAlumno(): any{
    const db=getDatabase();
    remove(ref(db, 'alumnos/'+ this.matricula));
    window.history.back();window.location.reload();
  }

    
    async presentActionSheet() {
      const actionSheet = await this.actionSheetController.create({
        header: 'Albums',
        cssClass: 'my-custom-class',
        mode: 'ios', 
        buttons: [{
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          id: 'delete-button',
          data: {
            type: 'delete'
          },
          handler: () => {
            this.deleteAlumno();
            console.log('Delete clicked');
          }
        }, {
          text: 'Share',
          icon: 'share',
          data: 10,
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle',
          data: 'Data value',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
  
      const { role, data } = await actionSheet.onDidDismiss();
      console.log('onDidDismiss resolved with role and data', role, data);
    }
}
