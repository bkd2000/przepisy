import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items:any = [];
  private per_page:number = 5;
  private page:number = 1;
  private showLoadMore = true;

  constructor(public navCtrl: NavController, public api:ApiProvider, public navParms: NavParams) {
    console.log(this.navParms.get('cat_id'));
    this.getPosts();

  }

  getPosts(){
    this.api.get('posts?_embed&per_page=' + this.per_page + '&page=' + this.page)
    .subscribe((data) =>{
      this.items = this.items.concat(data);
      this.page++;
    }, (error) => {
      if(error.error.code==="rest_post_invalid_page_number"){
        this.showLoadMore = false;
      }
      console.log(error);

    });
  }

  openDetail(item){
    this.navCtrl.push(DetailPage, {post: item});
  }

  getCatName(cat_id:number){
    let cat_name:string = '';
    this.api.Categories.forEach(element => {
      if (element.id==cat_id) {
        cat_name = element.name;
      }
    });
    return cat_name;
  }
}
