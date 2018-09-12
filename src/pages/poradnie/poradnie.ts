import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ApiProvider } from "../../providers/api/api";
import { CallNumber } from "@ionic-native/call-number";

/**
 * Generated class for the PoradniePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-poradnie",
  templateUrl: "poradnie.html"
})
export class PoradniePage {
  public Poradnie: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiProvider,
    private callNumber: CallNumber
  ) {
    this.getWszystkiePoradnie();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PoradniePage");
  }

  getWszystkiePoradnie() {
    this.api.getPoradnie().subscribe(data => {
      this.Poradnie = data;
    });
  }

  launchDialer(n: string) {
    this.callNumber
      .callNumber(n, true)
      .then(() => console.log("Launched dialer!"))
      .catch(() => console.log("Error launching dialer"));
  }
  openLink(n: string){
    window.open(n, '_system', 'location=yes');
    return false;
  }
}
