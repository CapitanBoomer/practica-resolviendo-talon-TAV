import { Component, OnInit } from '@angular/core';
import {ProdService} from '../../services/catalogo/prod.service'
import {AuthService} from '../../services/autorizacion/auth.service'
import {Producto,RespProductos} from './../../interfaces/catalogo/productos'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  constructor(public servprod:ProdService, public servuser:AuthService) { }

  ngOnInit() {
  }
ionViewWillEnter(){

 this.servprod.obtenerprods();
}
}
