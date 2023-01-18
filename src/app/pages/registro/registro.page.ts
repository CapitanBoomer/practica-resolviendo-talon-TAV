import { Component, OnInit } from '@angular/core';
import { RegService } from '../../services/registro/reg.service'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public firstName: string = '';
  public lastName: string = '';
  public age: number = 0;
  public username: string = '';
  public password: string = '';
  public birthDate: string = '';
  public gender: string = 'male';

  constructor(private servicio: RegService) { }

  ngOnInit() {
  }
  public validoReg() {
    this.servicio.registrarusuario({
      firstName: '',
      lastName: '',
      age: 0,
      username: '',
      password: '',
      birthDate: '',
      gender: 'male',

    })
  }
}
