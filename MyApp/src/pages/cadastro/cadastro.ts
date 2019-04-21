import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';



/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
 
 
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

    

  
  }
   
 
  // irParaDestino(livro:Livro):void{
  //   this.navCtrl.push(ListarLivrosPage, {livroSelecionado: livro});
  //   }
    showConfirmacaoAdicionado() {
      const alert = this.alertCtrl.create({
        title: 'Adicionado',
        subTitle: 'Livro adicionado com sucesso!',
        buttons: ['OK']
      });
      alert.present();
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad CadastroPage');
    
    } 

}
