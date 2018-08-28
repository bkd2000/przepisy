import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  private API_URL: string='https://przepisy.coio.pl/wp-json/wp/v2/';
  public Categories:any = [];


  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  get(query:string = ''){
    return this.http.get(this.API_URL + query);
  }

  getCategories(){
    this.get('categories').subscribe((data) => {
      this.Categories = data;

    });
  }

  getCatName(cat_id:number){
    let cat_name:string = '';
    this.Categories.forEach(element => {
      if (element.id==cat_id) {
        cat_name = element.name;
      }
    });
    return cat_name;
  }

  getPoradnie(){
   return  this.http.get("https://coio.pl/wp-json/acf/v3/poradnie?per_page=30&orderby=acf.region");



  }

}
