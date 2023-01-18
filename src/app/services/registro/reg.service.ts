import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosReg } from '../../interfaces/registro/datos-reg'
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RegService {
  private url_reg: string = 'https://dummyjson.com/users/add';
  private datosregistro: DatosReg | null = null;
  constructor(private http: HttpClient,private alert:AlertController) { }

  public registrarusuario(nuevos: DatosReg) {
    this.http.post<DatosReg>(this.url_reg, { ...nuevos }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(async datos =>{
      if(datos){this.datosregistro = datos
        const alert = await this.alert.create({

          message: 'Usuario agregado',
          buttons: ['OK'],
        });

        await alert.present();
      }

    })
  }
}
