import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { SocialSharing } from '@ionic-native/social-sharing';

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
  public message:any;
  public przepis:string = '';
  public tytul: string = '';
  public skladniki: string;
  public obrazekUrl: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider, private socialSharing: SocialSharing) {
    this.post = navParams.get('post');
    this.skladniki = this.post.acf.skladniki;
    this.przepis = this.post.content.rendered;
    this.message = "SKŁADNIKI: " + this.skladniki + "       WYKONANIE: " + this.przepis + " ";

    this.obrazekUrl = this.post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
    this.tytul = this.post.title.rendered;




  }

  ionViewDidLoad() {

  }

  sharePrzepis(){
    this.socialSharing.share(this.strip_html_tags(this.message),this.tytul,null,null);
  }

  strip_html_tags(str){
   if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
  return str.replace(/<[^>]*>/g, '');
 }


}
