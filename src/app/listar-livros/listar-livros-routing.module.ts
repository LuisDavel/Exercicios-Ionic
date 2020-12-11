import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarLivrosPage } from './listar-livros.page';

const routes: Routes = [
  {
    path: '',
    component: ListarLivrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarLivrosPageRoutingModule {}
