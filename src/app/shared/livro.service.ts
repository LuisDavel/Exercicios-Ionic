import { Injectable } from '@angular/core';
import { livro } from './livro';

@Injectable({
    providedIn: 'root'
})


export class LivroService {

    private livro: livro[];

    constructor(){

        this.livro = [
            {
                id_livro: 1,
                titulo: 'O palhaço e o psicanalista',
                foto: 'http://lojasaraiva.vteximg.com.br/arquivos/ids/12706333/1010087328.jpg?v=637154249927770000',
                autor:  'Dunker, Christian',
                isbn: '9788542215939'
                
            },
            {
                id_livro: 2,
                titulo: 'Diário de um Banana',
                foto: 'https://upload.wikimedia.org/wikipedia/pt/3/3d/Diario_de_um_banana1.jpg',
                autor:  'Jeff Kinney',
                isbn: '9788576831303'
                
            },
            {
                id_livro: 3,
                titulo: 'A Revolução Francesa explicada à minha neta',
                foto: 'https://images-na.ssl-images-amazon.com/images/I/316ftDXh5sL._SX263_BO1,204,203,200_.jpg',
                autor:  'Michel Vovelle',
                isbn: '8571397767'
                
            },
            {
                id_livro: 4,
                titulo: 'Guerra e Paz',
                foto: 'https://m.media-amazon.com/images/I/41z1EV7E2aL.jpg',
                autor:  'Liev Tolstói',
                isbn: 'SDW4SDWERF5'
                
            },
            {
                id_livro: 5,
                titulo: 'Naruto',
                foto: 'https://sm.ign.com/ign_br/screenshot/default/screenshot-8-2u79_u1w9.png',
                autor:  'Masashi Kishimoto',
                isbn: '1569319006'
                
            },
            {
                id_livro: 6,
                titulo: 'Emergence Metamorphosis',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWbelFTXyiD5K228xfEShH7Phi3QaoA6ANw&usqp=CAU',
                autor:  'Shindo L',
                isbn: 'SSDFER547FD'
                
            },
            {
                id_livro: 7,
                titulo: 'Noragami',
                foto: 'https://vignette.wikia.nocookie.net/fandubpediabrasil/images/2/2c/4c4644fccebed32417929830763bdcb5.jpg/revision/latest?cb=20170605133117&path-prefix=pt-br',
                autor:  'Adachitoka',
                isbn: 'SF5874DFE5S'
                
            },
            {
                id_livro: 8,
                titulo: 'O Capital',
                foto: 'https://m.media-amazon.com/images/I/51rekLx0xtL.jpg',
                autor:  'Karl Marx',
                isbn: 'SFWER1585SD'
                
            },
            {
                id_livro: 9,
                titulo: '13 razões para votar no pt',
                foto: 'https://images-na.ssl-images-amazon.com/images/I/71hwsNBsL4L.jpg',
                autor:  'Lins, Aurélio Marcondes Bittencourt',
                isbn: '8582304099'
                
            },
            {
                id_livro: 10,
                titulo: 'Dom Casmurro',
                foto: 'https://images-na.ssl-images-amazon.com/images/I/51PjgRe58sL._SX352_BO1,204,203,200_.jpg',
                autor:  'Machado de Assis',
                isbn: '6586490081'
                
            }
        
        ];
    }

    getLivros() {
        return this.livro;
    }
}
