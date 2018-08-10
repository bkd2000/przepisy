import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { DetailPage } from '../detail/detail';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items:any = [];
  private per_page:number = 2;
  public page:number = 1;
  public showLoadMore = true;
  private category_id:number = 0;
  public isLoading = false;

  constructor(public navCtrl: NavController, public api:ApiProvider, public navParms: NavParams) {
    if(this.navParms.get('cat_id')!=null && this.navParms.get('cat_id')!= undefined){
      this.category_id = this.navParms.get('cat_id');
    }
    this.getPosts();

  }

  getPosts(infiniteScroll = null) {
    if (!this.isLoading) {
      this.isLoading=true;
      this.api.get('posts?_embed&per_page=' + this.per_page + '&page=' + this.page + (this.category_id != 0 ? '&categories=' + this.category_id : ''))
        .subscribe((data:any) => {
          this.isLoading=false;
          this.items = this.items.concat(data);
          if(data.length === this.per_page){
            this.page++;
          }

          if (infiniteScroll != null) {
            infiniteScroll.complete();
          }
        }, (error) => {
          this.isLoading=false;

          if (infiniteScroll != null) {
            infiniteScroll.complete();
          }

        });
    }
  }

  openDetail(item){
    this.navCtrl.push(DetailPage, {post: item});
  }

  openSearchPage(){
    this.navCtrl.push(SearchPage);
  }
}
