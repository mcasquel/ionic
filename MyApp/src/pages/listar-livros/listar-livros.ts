import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { LivroPage } from '../livro/livro';
import { LivroProvider } from '../../providers/livro/livro';

/**
 * Generated class for the ListarLivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-Livro',
  templateUrl: 'listar-livros.html',
  providers:[
    LivroProvider
  ]
})


export class ListarLivrosPage  {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

/*  public livros : Livro[];	*/
  public lista_livros = new Array<any>();
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, private livroProvider: LivroProvider) {




/*  svar l1 = {editora:{nome:'faça oque eu digo e não oque eu faço'}, autor:{nome:'eu mesmo'},titulo:'minha vida',subtitulo:'concelhos',capa:'' ,isbn:'',publicacao:'', pagina:''}; 
    var l2 = {editora:{nome:' Como não ser demitido'}, autor:{nome:'eu mesmo'},titulo:'minha vida',subtitulo:'',capa:'' ,isbn:'',publicacao:'', pagina:''}; 
    var l3 = {editora:{nome:'sextou'}, autor:{nome:'eu mesmo'},titulo:'cuidado isso pode lhe matar',subtitulo:'Como Influenciar e Não Se Deixar Influenciar',capa:'12' ,isbn:'',publicacao:'', pagina:'234'};    
    var l4 = {editora:{nome:'Portfolio Books Usa'}, autor:{nome:'aleatorio'},titulo:'Mo preguiça',subtitulo:'Isso mesmo',capa:'3' ,isbn:'9780143108597',publicacao:'Portfolio Books Usa', pagina:'390'};  
     
    
    this.livros = [l1,l2,l3,l4];
    */
 
  }

  goToAdicionarLivro(){	
    this.navCtrl.push(CadastroPage);
  }
  irParaDetalhe(livro:any):void{ 
    this.navCtrl.push(LivroPage, {livroSelecionado: livro});
  }
  ionViewDidLoad() {
    this.livroProvider.getLivros().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);

        for (var val in objeto_retorno){
          console.log(val);
          this.lista_livros.push(objeto_retorno[val]);
        }
        console.log(this.lista_livros.length)
      }, error => {
        console.log(error)
      }
    )
    console.log('ionViewDidLoad ListarLivrosPage');
  }
}