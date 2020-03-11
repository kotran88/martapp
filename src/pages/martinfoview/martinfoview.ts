import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { Calendar } from '@ionic-native/calendar'


/**
 * Generated class for the MartinfoviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-martinfoview',
  templateUrl: 'martinfoview.html',
})
export class MartinfoviewPage {
  id: any = "a2f05b91-956a-b480-3525-991002905558"
  firemain = firebase.database().ref();
  martinfo = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.martinfo = this.navParams.get("martinfo");
    console.log(this.martinfo);
    this.firemain.child("users").child(this.id).once("value", (sn)=>{
      for(var a in sn.val()){
        console.log(sn.val()[a]);
      }
    })
  }



}
