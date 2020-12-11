import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-livros',
    pathMatch: 'full'
  },
  {
    path: 'listar-livros',
    loadChildren: () => import('./listar-livros/listar-livros.module').then( m => m.ListarLivrosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
