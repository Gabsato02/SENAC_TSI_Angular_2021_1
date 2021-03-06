import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './views/cliente/cliente.component';
import { EnderecoComponent } from './views/endereco/endereco.component';

const routes: Routes = [
  { path: 'endereco', component: EnderecoComponent },
  { path: 'cliente', component: ClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
