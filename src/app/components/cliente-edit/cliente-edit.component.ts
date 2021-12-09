import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { Cliente } from 'src/app/Cliente';
import {Tipo} from 'src/app/Tipo';
import { ArticuloService } from 'src/app/articulo.service';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

  id:any;
  clientes:any;
  /*tipos:any;
  tipo=new Tipo();*/
  cliente=new Cliente();

  constructor(private route:ActivatedRoute,private articuloService:ArticuloService) { }

  ngOnInit(): void {

  console.log(this.route.snapshot.params.id);
  this.id=this.route.snapshot.params.id;
  this.getData();

  }

  getData(){
    this.articuloService.getArticuloById(this.id).subscribe(res=>{
      console.log(res);
     this.clientes=res;
     this.cliente=this.clientes;
    })
}

updateArticulo(){
  this.articuloService.updateDate(this.id,this.clientes).subscribe(res=>{
            
  });

}
/*
updateTipo(){
  this.articuloService.updateDate(this.id,this.tipos).subscribe(res=>{        
  });
}*/

}
