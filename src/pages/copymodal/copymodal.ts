import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Copymodal2Page } from '../copymodal2/copymodal2';

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
  isChecked3: any = false;
  isChecked2: any = false;
  isChecked1: any = false;
  data1: any = false;
  data2: any = false;
  data3: any = false;
  selectedvalue: any;
  disableall() {
    console.log("disabled")
    this.data1 = false;
    this.data2 = false;
    this.data3 = false;
  }
  key: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modal: ModalController) {
    this.key = this.navParams.get("key");
    console.log(this.key);
  }

  allValue1() {
    console.log("1");
    this.disableall();
    this.selectedvalue = "1";
    this.data1 = true;
  }
  allValue2() {
    this.selectedvalue = "2";
    console.log("2");
    this.disableall();
    this.data2 = true;
  }
  allValue3() {
    this.selectedvalue = "3";
    console.log("3");
    this.disableall();
    this.data3 = true;
  }

  newCopy() {
    this.viewCtrl.dismiss({ "flag": "new", "value": this.selectedvalue })
  }

  btn() {
    let modal = this.modal.create(Copymodal2Page, { "key": this.key });

    modal.onDidDismiss(data => {
      console.log(data.flag);
      if (data.flag == "cancle") {
        this.viewCtrl.dismiss({ "flag": "cancel" });
      }
      if (data.flag == "old") {
        this.viewCtrl.dismiss({ "flag": "old", "value": this.selectedvalue })
      }
    })
    modal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss({ "flag": "cancel" });
  }
}
