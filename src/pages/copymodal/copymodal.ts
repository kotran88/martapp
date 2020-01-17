import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the CopymodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-copymodal',
  templateUrl: 'copymodal.html',
})
export class CopymodalPage {
  // checked : boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
  }

  dismiss(){
    this.viewCtrl.dismiss({"data":"value"});
  }
}
