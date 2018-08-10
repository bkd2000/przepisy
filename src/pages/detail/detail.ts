import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  public post:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider) {
    this.post = navParams.get('post');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }



}
