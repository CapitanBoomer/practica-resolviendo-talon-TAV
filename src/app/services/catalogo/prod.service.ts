import { Injectable } from '@angular/core';
import {Producto,RespProductos} from '../../interfaces/catalogo/productos'
import { HttpClient } from '@angular/common/http';
import {AuthService} from '../../services/autorizacion/auth.service'
@Injectable({
  providedIn: 'root'
})
export class ProdService {
private url_prod:string='https://dummyjson.com/auth/products'
public productos:RespProductos|null=null;
  constructor(private http:HttpClient, private serv:AuthService) { }

public obtenerprods(){
  this.http.get<RespProductos>(this.url_prod,{headers:{
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+ this.serv.infouser?.token
  }}).subscribe(datos=>{
    if(datos){this.productos=datos, console.log(datos)}
  })
}

}

