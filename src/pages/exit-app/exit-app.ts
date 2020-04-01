import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ExitAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-exit-app',
  templateUrl: 'exit-app.html',
})
export class ExitAppPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  exit(){
    this.viewCtrl.dismiss({"flag":"exit"});
  }
  goback() {
    this.viewCtrl.dismiss({"flag":"cancle"});
  }

}
