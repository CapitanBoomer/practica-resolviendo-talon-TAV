import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/autorizacion/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
public nombre:string ='';
public pass:string ='';
  constructor(private serv:AuthService) { }

  ngOnInit() {
  }
public botonvalidar(){
  this.serv.validadorDatos({
    username:this.nombre,
    password:this.pass,
  })
}

}
