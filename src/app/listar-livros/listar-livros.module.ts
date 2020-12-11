import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarLivrosPageRoutingModule } from './listar-livros-routing.module';

import { ListarLivrosPage } from './listar-livros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarLivrosPageRoutingModule
  ],
  declarations: [ListarLivrosPage]
})
export class ListarLivrosPageModule {}
