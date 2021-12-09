import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private httpclient:HttpClient) {


   }

  getArt(){
    return this.httpclient.get('http://127.0.0.1:8000/api/clientes');
  }

  getArticuloById(id:any){
    return this.httpclient.get('http://127.0.0.1:8000/api/clientes/' + id);
  }

  insertArt(data : any){
    return this.httpclient.post('http://127.0.0.1:8000/api/clientes', data);
  }

  deleteArt(id : any){
    return this.httpclient.delete('http://127.0.0.1:8000/api/clientes/' + id);
  }

  updateDate(id:any, data:any){
    return this.httpclient.put('http://127.0.0.1:8000/api/clientes/' + id, data);
  }
}