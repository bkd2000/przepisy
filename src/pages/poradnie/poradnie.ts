import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the PoradniePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-poradnie',
  templateUrl: 'poradnie.html',
})
export class PoradniePage {

  public Poradnie:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
    this.getWszystkiePoradnie();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoradniePage');
  }

  getWszystkiePoradnie(){
    this.api.getPoradnie().subscribe((data) => {
      this.Poradnie = data;

    })
  }

}
