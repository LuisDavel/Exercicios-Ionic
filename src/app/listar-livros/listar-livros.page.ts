import { Component, OnInit } from '@angular/core';
import { livro } from '../shared/livro';
import { LivroService } from '../shared/livro.service';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.page.html',
  styleUrls: ['./listar-livros.page.scss'],
})
export class ListarLivrosPage implements OnInit {

  listaLivro: livro[];

  constructor(private listaService: LivroService ) {
    
   }

   ngOnInit() {
      this.listar();
  }

  listar() {  
    this.listaLivro = this.listaService.getLivros();
  };


}
