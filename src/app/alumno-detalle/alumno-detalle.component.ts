/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss'],
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(private ruta: ActivatedRoute,public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.obtenerDetalleAlumno(this.matricula);
  }
  alumnos=[
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

    alumnoDetalle: any={};
    matricula: string=this.ruta.snapshot.params.id;
    obtenerDetalleAlumno(matricula: string): any{
      console.log(matricula);

      for (let i = 0; i < this.alumnos.length; i++) {
        if(matricula==this.alumnos[i].matricula){
          this.alumnoDetalle=this.alumnos[i];
        }
      }
      return this.alumnoDetalle;
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
