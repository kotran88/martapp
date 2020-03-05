import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MartmapPage } from '../martmap/martmap';

/**
 * Generated class for the MartlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-martlist',
  templateUrl: 'martlist.html',
})

export class MartlistPage {
  martname:any;
  martmap(id){
    console.log("hi");
    console.log(id);
    this.navCtrl.push(MartmapPage,{"id":id})
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
