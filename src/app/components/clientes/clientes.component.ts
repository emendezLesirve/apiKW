import { Component, OnInit } from '@angular/core';
import{ArticuloService} from 'src/app/articulo.service';
import{Cliente} from 'src/app/Cliente';
import{Tipo}from 'src/app/Tipo';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  clientes:any;
  tipos:any;

  tipo=new Tipo
  cliente = new Cliente();
  /*
  title='Aqui se establecera el sistemas de venta';
  subtitle='Aqui se establece el subtitulo';*/
   
  constructor(private dataService:ArticuloService) { }

  ngOnInit(): void {

    this.getArticulosData();
  
  }

  getArticulosData(){
    this.dataService.getArt().subscribe(res=>{
      this.clientes=res;
      this.tipos=res;
    
    console.log(res);
    });
    //console.log('HOla mundo');
  }

  getTiposData(){
    this.dataService.getArt().subscribe(res=>{
      this.tipos=res;
    
   //  console.log(res);
    });
    //console.log('HOla mundo');
  }

  insertData(){
    this.dataService.insertArt(this.cliente).subscribe(res=>{
  //  console.log(res);
 //  console.log(this.articulo);
   this.getArticulosData();
  });

  }
  
  deleteData(id: any){
    this.dataService.deleteArt(id).subscribe(res=>{
      this.getArticulosData();
    })
}

}
