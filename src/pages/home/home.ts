import { Component } from '@angular/core';
import { NavController, AlertController, Platform, ViewController, NavParams, ModalController } from 'ionic-angular';
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
import { AdPage } from '../ad/ad';
import { RatePage } from '../rate/rate';
import { CopymodalPage } from '../copymodal/copymodal';
import { a } from '@angular/core/src/render3';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedvalue: any;
  value: any;
  firemain = firebase.database().ref();
  shoppingPlace: any;
  newarraylist = [];
  id: any = "a2f05b91-956a-b480-3525-991002905558"
  tab = "tab2";
  title: any;
  key: any;
  nextdirectory = this.firemain.child(this.id);
  count: any;

  refreshname() {
    this.newarraylist = [];
    this.firemain.child(this.id).child("mart").once("value", (snap) => {
      for (var a in snap.val()) {
        for (var b in snap.val()[a]) {
          console.log(snap.val()[a][b]);
          this.newarraylist.push({ "flag": "mart", "list": snap.val()[a][b].list, "title": a, "time": snap.val()[a][b].time, "key": snap.val()[a][b].key })
        }
      }
    })

    this.firemain.child(this.id).child("dep").once("value", (snap) => {
      for (var a in snap.val()) {
        for (var b in snap.val()[a]) {
          console.log(snap.val()[a][b]);
          this.newarraylist.push({ "flag": "dep", "list": snap.val()[a][b].list, "title": a, "time": snap.val()[a][b].time, "key": snap.val()[a][b].key })
        }
      }
    })

    this.firemain.child(this.id).child("outlet").once("value", (snap) => {
      for (var a in snap.val()) {
        for (var b in snap.val()[a]) {
          console.log(snap.val()[a][b]);
          this.newarraylist.push({ "flag": "outlet", "list": snap.val()[a][b].list, "title": a, "time": snap.val()[a][b].time, "key": snap.val()[a][b].key })
        }
      }
    })

    this.firemain.child(this.id).child("etc").once("value", (snap) => {
      for (var a in snap.val()) {
        for (var b in snap.val()[a]) {
          console.log(snap.val()[a][b]);
          this.newarraylist.push({ "flag": "etc", "list": snap.val()[a][b].list, "title": a, "time": snap.val()[a][b].time, "key": snap.val()[a][b].key })
        }
      }
    })

  }

  public srct = {
    text: '',
    url: '',
  }

  segmentChanged(e) {
    console.log(e);
  }
  callnumbering() {

    window.alert("call number start")
    this.callnumber.callNumber("0630000000", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  regularShare() {
    var msg = "백화점 마트 헛걸음 방지 앱\n '백마헛방'\n 쇼핑가기전엔 언제나\n '백마헛방'";
    console.log(msg)
    this.socialSharing.share(msg, null, null, null);
  }

  addlist(value) {
    this.selectedvalue = value;
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
            this.firemain.child(this.id).child(value).child(data.title).child(key).update({ "flag": "notyet" });
            console.log(data.title)//이름
            console.log(key)
            console.log("selected value" + this.selectedvalue);
            this.navCtrl.push(AddshopingPage, { "flag": this.selectedvalue, "key": key, "id": this.id, "title": data.title }).then(() => {
              this.navCtrl.getActive().onDidDismiss(data => {
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
    console.log(key.flag);
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
            if (key.flag == "mart") {
              this.nextdirectory.child("mart").child(key.title).remove().then(() => {
                window.alert("삭제되었습니다.")
                console.log("success")
                this.refreshname();
              }).catch((e) => {
                console.log("error" + e);
              })
            }
            if (key.flag == "dep") {
              this.nextdirectory.child("dep").child(key.title).remove().then(() => {
                window.alert("삭제되었습니다.")
                console.log("success")
                this.refreshname();
              }).catch((e) => {
                console.log("error" + e);
              })
            }
            if (key.flag == "outlet") {
              this.nextdirectory.child("outlet").child(key.title).remove().then(() => {
                window.alert("삭제되었습니다.")
                console.log("success")
                this.refreshname();
              }).catch((e) => {
                console.log("error" + e);
              })
            }
            if (key.flag == "etc") {
              this.nextdirectory.child("etc").child(key.title).remove().then(() => {
                window.alert("삭제되었습니다.")
                console.log("success")
                this.refreshname();
              }).catch((e) => {
                console.log("error" + e);
              })
            }
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
    this.navCtrl.push(ViewshoppinglistPage, { "flag": a.flag, "obj": a, "id": this.id, "key": a.key });
    console.log(a.flag);
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


  setting() {
    this.navCtrl.push(SettingPage);
  }

  NoneAd() {
    let modal = this.modal.create(AdPage);
    modal.present();
  }

  appstore() {
    let modal = this.modal.create(RatePage);
    modal.present();
  }

  /*목록명 변경*/
  changeName(key) {
    console.log(key);
    console.log(key.title);
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
            if (key.flag == "mart") {
              console.log(key.title);
              this.nextdirectory.child("mart").child(key.title).remove().then(() => {
                console.log("success");
              });
              this.firemain.child(this.id).child("mart").child(data.title).child(key.key).update(key).then(() => {
                console.log(key);
                console.log(key.key);
                key.title = data.title;
                window.alert("변경되었습니다.");
              })
            }
            if (key.flag == "dep") {
              console.log(key.title);
              this.nextdirectory.child("dep").child(key.title).remove().then(() => {
                console.log("success");
              });
              this.firemain.child(this.id).child("dep").child(data.title).child(key.key).update(key).then(() => {
                console.log(key);
                console.log(key.key);
                key.title = data.title;
                window.alert("변경되었습니다.");
              })
            }
            if (key.flag == "outlet") {
              console.log(key.title);
              this.nextdirectory.child("outlet").child(key.title).remove().then(() => {
                console.log("success");
              });
              this.firemain.child(this.id).child("outlet").child(data.title).child(key.key).update(key).then(() => {
                console.log(key);
                console.log(key.key);
                key.title = data.title;
                window.alert("성공");
              })
            }
            if (key.flag == "etc") {
              console.log(key.title);
              this.nextdirectory.child("etc").child(key.title).remove().then(() => {
                console.log("success");
              });
              this.firemain.child(this.id).child("etc").child(data.title).child(key.key).update(key).then(() => {
                console.log(key);
                console.log(key.key);
                key.title = data.title;
                window.alert("성공");
              })
            }
          }
        }
      ]
    });
    alert.present();
  }

  /*공유*/
  share(key) {
    var name = "";
    console.log(key.flag);
    console.log(key);
    for (var i in key.list) {
      console.log(key.list[i].name);
      name += "\n" + key.list[i].name;
      console.log(name);
    }
    console.log(name);


    var msg = "[백화점 마트 헛걸음 방지 앱\n '백마헛방'\n 쇼핑가기전엔 언제나\n '백마헛방']\n1)구입제목 : " + key.title + "\n2)작성일 : " + key.time + "\n3)리스트\n" + name;

    console.log(msg)
    console.log(key.title)
    console.log(key.time)
    console.log(key.list)

    this.socialSharing.share(msg, null, null, null);
  }

  /*전체 항목 복사*/
  copy1(key) {
    if (key.flag == "mart") {
      var a = key.title + "복사본"
      this.firemain.child(this.id).child("mart").child(a).child(key.key).update(key).then(() => {

        console.log(key);
      })
      this.refreshname();
    }
    if (key.flag == "dep") {
      var a = key.title + "복사본"
      this.firemain.child(this.id).child("dep").child(a).child(key.key).update(key).then(() => {

        console.log(key);
      })
      this.refreshname();
    }
    if (key.flag == "outlet") {
      var a = key.title + "복사본"
      this.firemain.child(this.id).child("outlet").child(a).child(key.key).update(key).then(() => {

        console.log(key);
      })
      this.refreshname();
    }
    if (key.flag == "etc") {
      var a = key.title + "복사본"
      this.firemain.child(this.id).child("etc").child(a).child(key.key).update(key).then(() => {

        console.log(key);
      })
      this.refreshname();
    }
  }

  /*구입한 항목 복사 */
  copy2(key) {
    console.log(key);
    console.log(key.list);
    var checked = [];

    for (var i = 0; i < key.list.length; i++) {
      if (key.list[i].checked == true) {
        checked.push(key.list[i]);
        console.log(checked);
      }
    }
    console.log(checked);
    key.list = [];
    for (var i = 0; i < checked.length; i++) {
      key.list.push(checked[i])
    }

    if (key.flag == "mart") {
      var a = key.title + "복사본";
      this.firemain.child(this.id).child("mart").child(a).child(key.key).update(key).then(() => {
        console.log(key);
      })
      this.refreshname();
    }

    if (key.flag == "dep") {
      var a = key.title + "복사본"
      this.firemain.child(this.id).child("dep").child(a).child(key.key).update(key).then(() => {
        console.log(key);
      })
      this.refreshname();
    }
    if (key.flag == "outlet") {
      var a = key.title + "복사본"
      this.firemain.child(this.id).child("outlet").child(a).child(key.key).update(key).then(() => {

        console.log(key);
      })
      this.refreshname();
    }
    if (key.flag == "etc") {
      var a = key.title + "복사본"
      this.firemain.child(this.id).child("etc").child(a).child(key.key).update(key).then(() => {

        console.log(key);
      })
      this.refreshname();
    }
  }

  /*구입하지 않은 항목 복사 */
  copy3(key) {
    console.log(key);
    console.log(key.list);
    var unchecked = [];

    for (var i = 0; i < key.list.length; i++) {
      if (key.list[i].checked == false) {
        unchecked.push(key.list[i]);
        console.log(unchecked);
      }
    }
    console.log(unchecked);
    key.list = [];
    for (var i = 0; i < unchecked.length; i++) {
      key.list.push(unchecked[i])
    }

    if (key.flag == "mart") {
      var a = key.title + "복사본";
      this.firemain.child(this.id).child("mart").child(a).child(key.key).update(key).then(() => {
        console.log(key);
      })
      this.refreshname();
    }

    if (key.flag == "dep") {
      var a = key.title + "복사본"
      this.firemain.child(this.id).child("dep").child(a).child(key.key).update(key).then(() => {
        console.log(key);
      })
      this.refreshname();
    }
    if (key.flag == "outlet") {
      var a = key.title + "복사본"
      this.firemain.child(this.id).child("outlet").child(a).child(key.key).update(key).then(() => {

        console.log(key);
      })
      this.refreshname();
    }
    if (key.flag == "etc") {
      var a = key.title + "복사본"
      this.firemain.child(this.id).child("etc").child(a).child(key.key).update(key).then(() => {

        console.log(key);
      })
      this.refreshname();
    }
  }

  openModal(key) {
    let modal = this.modal.create(CopymodalPage, key, {
      cssClass: "modalcopy"
    })
    modal.onDidDismiss(data => {
      console.log(data);

    })
    modal.present();
  }

  constructor(public modal: ModalController, private socialSharing: SocialSharing, private iab: InAppBrowser, public uniqueDeviceID: UniqueDeviceID,
    public alertCtrl: AlertController, public callnumber: CallNumber,
    public admobFree: AdMobFree, public navCtrl: NavController, public navParams: NavParams) {
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