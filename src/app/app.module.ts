import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import{HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms'
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteEditComponent } from './components/cliente-edit/cliente-edit.component';

//import { ClienteEditComponent } from './components/cliente-edit/cliente-edit.component';


//import { AppRoutingModule } from './app-routing.module';

//import { UserComponent } from './user/user.component';
//import{DataService} from './data.service';

const appRoutes:Routes =[


  {path:'clientes',
   component:ClientesComponent
  },
  {path:'clientes/ed/:id',
   component:ClienteEditComponent
  },

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   ClientesComponent,
   ClienteEditComponent,
   ClienteEditComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  //  AppRoutingModule(approutes),
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
