import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { CadastroPage } from '../cadastro/cadastro';
import { ListarLivrosPage } from '../listar-livros/listar-livros';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = ListarLivrosPage;  
  tab4Root = CadastroPage;
  tab5Root = FeedPage;


  constructor() {

  }
}
