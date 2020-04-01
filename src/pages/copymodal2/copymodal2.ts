import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the Copymodal2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-copymodal2',
  templateUrl: 'copymodal2.html',
})
export class Copymodal2Page {
  [x: string]: any;
  key:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.key = this.navParams.get("key");
    console.log(this.key);
  }

  goback() {
    this.viewCtrl.dismiss({"flag":"cancel"});
  }
  copy(){
    this.viewCtrl.dismiss({ "flag": "old", "value": this.selectedvalue })
  }
}
