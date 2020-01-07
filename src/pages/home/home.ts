import { Component } from '@angular/core';
import { NavController, AlertController,Platform,ViewController, NavParams, ModalController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free'
import { CallNumber } from '@ionic-native/call-number/';
import firebase from 'firebase';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { AddshopingPage } from '../addshoping/addshoping';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import * as $ from 'jquery'
import { empty } from 'rxjs/Observer';
import { ViewshoppinglistPage } from '../viewshoppinglist/viewshoppinglist';

import { SocialSharing } from '@ionic-native/social-sharing';
import { SettingPage } from '../setting/setting';
import {AdPage} from '../ad/ad';
import { RatePage } from '../rate/rate';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  firemain = firebase.database().ref();

  newarraylist = [];
  id: any = "a2f05b91-956a-b480-3525-991002905558"
  tab = "tab2";
  title: any;
  key: any;
  nextdirectory = this.firemain.child(this.id);
  refreshname() {
    this.newarraylist = [];
    this.firemain.child(this.id).once("value", (snap) => {
      for (var a in snap.val()) {
        for (var b in snap.val()[a]) {
          console.log(snap.val()[a][b]);
          this.newarraylist.push({"list":snap.val()[a][b].list, "title": a, "time": snap.val()[a][b].time, "key":snap.val()[a][b].key})
        }
      }
    })
  }
  public srct = {
    text: '',
    url: ''
  }
  segmentChanged(e) {
    console.log(e);
  }
  callnumbering(){

    window.alert("call number start")
    this.callnumber.callNumber("0630000000", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  regularShare(){
    var msg = "백화점 마트 헛걸음 방지 앱\n '백마헛방'\n 쇼핑가기전엔 언제나\n '백마헛방'";
    console.log(msg)
    this.socialSharing.share(msg, null, null, null);
  }
  addlist() {
    let alert = this.alertCtrl.create({
      title: '쇼핑 목록 명을 적어주세요',
      inputs: [
        {
          name: 'title',
          placeholder: 'title'
        }
      ],
      buttons: [
        {
          text: '취소',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '확인',
          handler: data => {
            var key = this.nextdirectory.push().key;
            this.firemain.child(this.id).child(data.title).child(key).update({ "flag": "notyet" });
            console.log(data.title)
            console.log(key)
            this.navCtrl.push(AddshopingPage, { "key": key, "id": this.id, "title": data.title }).then(()=>{
              this.navCtrl.getActive().onDidDismiss(data=>{
                console.log("dismiss detect");
                this.refreshname();
              })
            });
          }
        }
      ]
    });
    alert.present();
  }

  deleteDB(key) {
    console.log("delete come");
    console.log(key);
    console.log(this.nextdirectory);
    console.log(key.title);
    let alert = this.alertCtrl.create({
      title: '선택된 품목(들)을 정말로 삭제하시겠습니까?',
      buttons: [
        {
          text: '취소',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '확인',
          handler: data => {
            this.nextdirectory.child(key.title).remove().then(() => {
              window.alert("삭제되었습니다.")
              console.log("success")
              this.refreshname();
            }).catch((e) => {
              console.log("error" + e);
            })
          }
        }
      ]
    });
    alert.present();
  }

  viewshoppinglist(a) {
    console.log(a);
    console.log(this.id);
    console.log(a.key);
    console.log(a.list);
    this.navCtrl.push(ViewshoppinglistPage,{"obj":a,"id":this.id,"key":a.key});
  }
  select_sort() {

    this.srct.url = 'https://msearch.shopping.naver.com/search/all.nhn?origQuery=' + this.srct.text + '&pagingIndex=1&pagingSize=40&viewType=list&sort=' + $("#slt").val() + '&frm=NVSHATC&query=' + this.srct.text;
    //            https://search.shopping.naver.com/search/all.nhn?origQuery=신라면&pagingIndex=1&pagingSize=40&viewType=list&sort=review&frm=NVSHATC&query=신라면

    console.log($('#slt').val());
    console.log(this.srct.text);
    console.log(this.srct.url);
    const browser = this.iab.create(this.srct.url, "_blank", "location=no,toolbar=no");

    //browser.executeScript({code:'document.cookie;'}).then((cookie)=>console.log(cookie))

    //browser.insertCSS(...);
    browser.on('loadstop').subscribe(event => {
      browser.insertCSS({ code: "body{color: red;" });
    });

    //browser.close();
  }


  setting(){
    this.navCtrl.push(SettingPage);
  }

  NoneAd(){
    let modal=this.modal.create(AdPage);
    modal.present();
  }

  appstore(){
    let modal=this.modal.create(RatePage);
    modal.present();
  }

  constructor(public modal:ModalController ,private socialSharing:SocialSharing,private iab: InAppBrowser, public uniqueDeviceID: UniqueDeviceID,
    public alertCtrl: AlertController, public callnumber: CallNumber,
    public admobFree: AdMobFree, public navCtrl: NavController) {
    this.refreshname();
    $(document).ready(function () {
      console.log("ready!");
      console.log($("#slt").val())
    });

    setTimeout(() => {

      // console.log(this.id);

      // this.firemain.child(this.id).once("value", (snap) => {
      //   console.log(snap.val());
      //   console.log(snap.val().time);
      //   for (var a in snap.val()) {
      //     console.log(a);
      //     for (var b in snap.val()[a]) {
      //       console.log(b);
      //       console.log(snap.val()[a][b]);

      //       this.newarraylist.push({ "title": a, "time": snap.val()[a][b].time })
      //     }
      //     // console.log(a)
      //     // console.log(snap.val()[a])
      //   }

      //   console.log(this.newarraylist);
      // })
      this.uniqueDeviceID.get()
        .then((uuid: any) => { this.id = uuid; console.log(uuid) })
        .catch((error: any) => console.log(error));
      const bannerConfig: AdMobFreeBannerConfig = {
        // add your config here
        // for the sake of this example we will just use the test config
        isTesting: true,
        autoShow: true
      };
      this.admobFree.banner.config(bannerConfig);

      this.admobFree.banner.prepare()
        .then(() => {
          // banner Ad is ready
          console.log("ok")
          this.admobFree.banner.show().then(() => {
            console.log("success");
          }).catch((e) => {
            console.log(e);
          })
          // if we set autoShow to false, then we will need to call the show method here
        })
        .catch(e => console.log(e));
    }, 3000)
  }

}