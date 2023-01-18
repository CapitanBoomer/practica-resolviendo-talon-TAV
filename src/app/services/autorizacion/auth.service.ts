import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth, DatosUser } from '../../interfaces/autorizacion/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url_user: string = 'https://dummyjson.com/auth/login';
  public infouser: DatosUser | null = null
  constructor(private http: HttpClient, private alerta: AlertController, private ruta:Router) { }

  public validadorDatos({ password, username }: Auth) {
    this.http.post<DatosUser>(this.url_user, { username, password },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).subscribe(async datos =>{
        if(datos){this.infouser=datos
          const alert = await this.alerta.create({

            message: 'datos Exitosos',
            buttons: [{
             text:'entrar',
             handler:()=>{this.ruta.navigate(['/catalogo'])}
            }],
          })

          await alert.present();
        }

      })
  }
}
