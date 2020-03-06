import { Component, ContentChild } from '@angular/core';
import { NavController, AlertController, Platform, ViewController, NavParams, ModalController, FabContainer, UrlSerializer } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free'
import { CallNumber } from '@ionic-native/call-number/';
import firebase from 'firebase';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { AddshopingPage } from '../addshoping/addshoping';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import * as $ from 'jquery'
import { ViewshoppinglistPage } from '../viewshoppinglist/viewshoppinglist';

import { SocialSharing } from '@ionic-native/social-sharing';
import { SettingPage } from '../setting/setting';
import { AdPage } from '../ad/ad';
import { RatePage } from '../rate/rate';
import { CopymodalPage } from '../copymodal/copymodal';
import { snapshotChanges } from 'angularfire2/database';
import { ListlimitmodalPage } from '../listlimitmodal/listlimitmodal';
import { OneSignal } from '@ionic-native/onesignal';
import { MartlistPage } from '../martlist/martlist';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  [x: string]: any;
  selectedvalue: any;
  value: any;
  firemain = firebase.database().ref();
  shoppingPlace: any;

  newarraylist = [];
  id: any = "a2f05b91-956a-b480-3525-991002905558"
  tab = "tab1";
  title: any;
  key: any;
  nextdirectory = this.firemain.child("users").child(this.id);
  count: any = 0;
  selected: any;
  copyflag: any = false;
  checkedlistlength: any = 0;
  tocopylist: any;
  tocopy: any;
  selectedflagtocpy: any;
  fabButtonOpened: boolean;
  listcount: any = 0;
  afterValue: any;
  
  main(){
    this.navCtrl.push(MartlistPage);
  }

  openFabButton() {
    if (this.fabButtonOpened == false) {
      this.fabButtonOpened = true;
    } else {
      this.fabButtonOpened = false;
    }
  }

  refreshname() {
    // console.log(this.newarraylist);
    this.newarraylist = [];
    this.firemain.child("users").child(this.id).once("value", (sn) => {
      for (var a in sn.val()) {
        if (a != "setting"&& a!="favorite") {
          // console.log(sn.val()[a]);
          for (var b in sn.val()[a]) {
            this.listcount++;
            // console.log("b" + b);
            // console.log(sn.val()[a][b]);
            for (var c in sn.val()[a][b]) {
              // console.log("c" + c);
              // console.log(sn.val()[a][b][c]);
              var checked = 0;
              var listlength = 0;
              for (var d in sn.val()[a][b][c].list) {
                // console.log(sn.val()[a][b][c].list.length)
                listlength = sn.val()[a][b][c].list.length;
                // console.log(sn.val()[a][b][c].list[d]);
                if (sn.val()[a][b][c].list[d].checked == true) {
                  checked++;
                }
              }
              this.newarraylist.push({ "totallist": listlength, "totalchecked": checked, "flag": a, "list": sn.val()[a][b][c].list, "title": b, "time": sn.val()[a][b][c].time, "key": sn.val()[a][b][c].key })
            }
          }
          // console.log(this.listcount);
        }
      }
    })
    this.listcount = 0;
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
            var limitarray=[];
            console.log(this.listcount);
            console.log(value);
            if (this.listcount >= 50) {
              this.navCtrl.push(ListlimitmodalPage, { "flag": this.selectedvalue, "obj": this.newarraylist, "title": data.title, "id": this.id, "key": value.key }).then(() => {
                this.navCtrl.getActive().onDidDismiss(data => {
                  if(data.value){
                    console.log(data.value);
                    for(var a = 0; a<this.newarraylist.length; a++) {
                      console.log(data.value.title);
                      if(this.newarraylist[a].title == data.value.title)
                      {
                        this.nextdirectory.child(this.newarraylist[a].flag).child(this.newarraylist[a].title).remove().then(()=>{
                          console.log("success");
                        })
                      }
                    }
                  }
                  else{
                    console.log("success");
                  }

                })
              })
            }
            else {
              var key = this.nextdirectory.push().key;
              this.firemain.child("users").child(this.id).child(value).child(data.title).child(key).update({ "flag": "notyet" });
              console.log("selected value" + this.selectedvalue);
              this.navCtrl.push(AddshopingPage, { "flag": this.selectedvalue, "key": key, "id": this.id, "title": data.title }).then(() => {
                this.navCtrl.getActive().onDidDismiss(data => {
                  console.log("dismiss detect");
                  this.refreshname();
                })
              });
            }
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
    console.log(this.copyflag);
    console.log(a);
    console.log(a.key);
    console.log(a.flag);
    console.log(a.list);

    if (this.copyflag) {
      let alert = this.alertCtrl.create({
        title: '해당 목록에 덧붙이시겠습니까?',
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
              /*전체항목 기존복사*/
              if (this.selectedflagtocpy == 3) {
                console.log(newarray);
                var newarray = [];
                for (var b = 0; b < a.list.length; b++) {
                  newarray.push(a.list[b]);
                }
                for (var b = 0; b < this.tocopylist.length; b++) {
                  newarray.push(this.tocopylist[b]);
                }
                if (a.flag == "mart") {
                  var name = a.title;
                  this.firemain.child("users").child(this.id).child("mart").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(() => {
                    console.log(a.key);
                  })
                  this.refreshname();
                }

                if (a.flag == "dep") {
                  var name = a.title;
                  this.firemain.child("users").child(this.id).child("dep").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(() => {
                    console.log(a.key);
                  })
                  this.refreshname();
                }
                if (a.flag == "outlet") {
                  var name = a.title;
                  this.firemain.child("users").child(this.id).child("outlet").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(() => {
                    console.log(a.key);
                  })
                  this.refreshname();
                }
                if (a.flag == "etc") {
                  var name = a.title;
                  this.firemain.child("users").child(this.id).child("etc").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(() => {
                    console.log(a.key);
                  })
                  this.refreshname();
                }
                this.copyflag = false;
              }
              /*구입한 항목 기존복사*/
              else if (this.selectedflagtocpy == 2) {
                var newarray = [];

                for (var b = 0; b < a.list.length; b++) {
                  newarray.push(a.list[b]);
                }
                for (var i = 0; i < this.tocopylist.length; i++) {
                  if (this.tocopylist[i].checked == true) {
                    newarray.push(this.tocopylist[i]);
                    console.log(newarray);
                  }
                }
                console.log(newarray);
                a.list = [];
                for (var i = 0; i < newarray.length; i++) {
                  a.list.push(newarray[i])
                }
                console.log(newarray);

                if (a.flag == "mart") {
                  var name = a.title;
                  this.firemain.child("users").child(this.id).child("mart").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(() => {
                    console.log(a);
                  })
                  this.refreshname();
                }
                if (a.flag == "dep") {
                  var name = a.title;
                  this.firemain.child("users").child(this.id).child("dep").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(() => {
                    console.log(a);
                  })
                  this.refreshname();
                }
                if (a.flag == "outlet") {
                  var name = a.title;
                  this.firemain.child("users").child(this.id).child("outlet").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(() => {
                    console.log(a);
                  })
                  this.refreshname();
                }
                if (a.flag == "etc") {
                  var name = a.title;
                  this.firemain.child("users").child(this.id).child("etc").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(() => {

                    console.log(a);
                  })
                  this.refreshname();
                }
                this.copyflag = false;
              }
              /*구입하지 않은 항목 기존복사 */
              else if (this.selectedflagtocpy == 1) {
                var newarray = [];

                for (var b = 0; b < a.list.length; b++) {
                  newarray.push(a.list[b]);
                }
                for (var i = 0; i < this.tocopylist.length; i++) {
                  if (this.tocopylist[i].checked == false) {
                    newarray.push(this.tocopylist[i]);
                    console.log(newarray);
                  }
                }
                console.log(newarray);
                a.list = [];
                for (var i = 0; i < newarray.length; i++) {
                  a.list.push(newarray[i])
                }
                console.log(newarray);
                if (a.flag == "mart") {
                  var name = a.title;
                  this.firemain.child("users").child(this.id).child("mart").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(() => {
                    console.log(a);
                  })
                  this.refreshname();
                }

                if (a.flag == "dep") {
                  var name = a.title;
                  this.firemain.child("users").child(this.id).child("dep").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(() => {
                    console.log(a);
                  })
                  this.refreshname();
                }
                if (a.flag == "outlet") {
                  var name = a.title;
                  this.firemain.child("users").child(this.id).child("outlet").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(() => {
                    console.log(a);
                  })
                  this.refreshname();
                }
                if (a.flag == "etc") {
                  var name = a.title;
                  this.firemain.child("users").child(this.id).child("outlet").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(() => {
                    console.log(a);
                  })
                  this.refreshname();
                }
                this.copyflag = false;
              }
            }
          }
        ]
      });
      alert.present();
    }
    else {
      console.log(a);
      console.log(this.id);
      console.log(a.key);
      console.log(a.list);
      this.navCtrl.push(ViewshoppinglistPage, { "flag": a.flag, "obj": a, "id": this.id, "key": a.key }).then(() => {
        this.navCtrl.getActive().onDidDismiss(data => {
          this.refreshname();
        })
      })
      console.log(a.flag);

    }

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
              this.firemain.child("users").child(this.id).child("mart").child(data.title).child(key.key).update(key).then(() => {
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
              this.firemain.child("users").child(this.id).child("dep").child(data.title).child(key.key).update(key).then(() => {
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
              this.firemain.child("users").child(this.id).child("outlet").child(data.title).child(key.key).update(key).then(() => {
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
              this.firemain.child("users").child(this.id).child("etc").child(data.title).child(key.key).update(key).then(() => {
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

    this.socialSharing.share(msg, null, null, null);
  }

  /*전체 항목 복사*/
  newAllcopy(key) {
    var count = 1;
    if (key.flag == "mart") {
      var a = key.title + "복사본";
      this.firemain.child("users").child(this.id).child("mart").child(a).child(key.key).update(key).then(() => {
        console.log(key);
      })
      this.refreshname();     
    }
    if (key.flag == "dep") {
      var a = key.title + "복사본"
      this.firemain.child("users").child(this.id).child("dep").child(a).child(key.key).update(key).then(() => {
        console.log(key);
      })
      this.refreshname();
    }
    if (key.flag == "outlet") {
      var a = key.title + "복사본"
      this.firemain.child("users").child(this.id).child("outlet").child(a).child(key.key).update(key).then(() => {
        console.log(key);
      })
      this.refreshname();
    }
    if (key.flag == "etc") {
      var a = key.title + "복사본"
      this.firemain.child("users").child(this.id).child("etc").child(a).child(key.key).update(key).then(() => {
        console.log(key);
      })
      this.refreshname();
    }
  }

  /*구입한 항목 복사 */
  newHavecopy(key) {
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
      this.firemain.child("users").child(this.id).child("mart").child(a).child(key.key).update(key).then(() => {
        console.log(key);
      })
      this.refreshname();
    }

    if (key.flag == "dep") {
      var a = key.title + "복사본"
      this.firemain.child("users").child(this.id).child("dep").child(a).child(key.key).update(key).then(() => {
        console.log(key);
      })
      this.refreshname();
    }
    if (key.flag == "outlet") {
      var a = key.title + "복사본"
      this.firemain.child("users").child(this.id).child("outlet").child(a).child(key.key).update(key).then(() => {

        console.log(key);
      })
      this.refreshname();
    }
    if (key.flag == "etc") {
      var a = key.title + "복사본"
      this.firemain.child("users").child(this.id).child("etc").child(a).child(key.key).update(key).then(() => {

        console.log(key);
      })
      this.refreshname();
    }
  }

  /*구입하지 않은 항목 복사 */
  newWillcopy(key) {
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

      this.firemain.child("users").child(this.id).child("mart").child(a).child(key.key).update(key).then(() => {
        console.log(key);
      })
      this.refreshname();
    }

    if (key.flag == "dep") {
      var a = key.title + "복사본"
      this.firemain.child("users").child(this.id).child("dep").child(a).child(key.key).update(key).then(() => {
        console.log(key);
      })
      this.refreshname();
    }
    if (key.flag == "outlet") {
      var a = key.title + "복사본"
      this.firemain.child("users").child(this.id).child("outlet").child(a).child(key.key).update(key).then(() => {

        console.log(key);
      })
      this.refreshname();
    }
    if (key.flag == "etc") {
      var a = key.title + "복사본"
      this.firemain.child("users").child(this.id).child("etc").child(a).child(key.key).update(key).then(() => {

        console.log(key);
      })
      this.refreshname();
    }
  }

  oldAllcopy(key, flag) {
    this.selectedflagtocpy = flag;
    console.log("copy old all")
    this.copyflag = true;
  }

  oldHavecopy(key, flag) {
    this.selectedflagtocpy = flag;
    console.log("copy old old")
    this.copyflag = true;
  }

  oldWillcopy(key, flag) {
    this.selectedflagtocpy = flag;
    console.log("copy old will")
    this.copyflag = true;
  }

  openModal(key) {
    console.log(key);
    this.tocopylist = key.list;
    this.tocopy = key;
    console.log(this.tocopylist);
    let modal = this.modal.create(CopymodalPage, null, {
      cssClass: "modalcopy"
    });
    modal.onDidDismiss(data => {
      console.log(key);
      console.log(key.list);
      if (data.flag == "new") {
        if (data.value == "1") {
          console.log(data.value);
          this.newWillcopy(key);
        }
        else if (data.value == "2") {
          console.log(data.value);
          this.newHavecopy(key);
        }
        else if (data.value == "3") {
          console.log(data.value);
          this.newAllcopy(key);
        }
      }
      else if (data.flag == "old") {
        if (data.value == "1") {
          console.log(data.value);
          this.oldWillcopy(key, data.value);
        }
        else if (data.value == "2") {
          console.log(data.value);
          this.oldHavecopy(key, data.value);
        }
        else if (data.value == "3") {
          console.log(data.value);
          this.oldAllcopy(key, data.value);
        }
      }
    })
    modal.present();
  }

  OneSignalInstall()
  {
    console.log("start Signal")
    this.oneSignal.startInit('2a4ab592-b87f-474a-9b98-77a1983d4b38', '552511846926');
    // this.oneSignal.clearOneSignalNotifications();
    var iosSettings = {
      "kOSSettingsKeyAutoPrompt" : true,
      "kOSSettingsKeyInAppLaunchURL" : true
    };
    this.oneSignal.iOSSettings(iosSettings);
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    //알림을 받았을때에 아래 함수로
    this.oneSignal.handleNotificationReceived().subscribe((data) => {
      
    // var hour=data.payload.additionalData.hour;
    // var min=data.payload.additionalData.minute;
    });

    this.oneSignal.handleNotificationOpened().subscribe(data => {
      console.log("data Confirm");
      console.log(data);
      console.log(data.notification.payload.additionalData.hour);
      console.log("opened");
    });

    this.oneSignal.getIds().then(data => {
      console.log("get id success"+data.userId)
      window.alert(data.userId);
      this.firemain.child("users").child(this.id).child("setting").update({ "user id": data.userId });
      let sendData = [];
      localStorage.setItem("tokenvalue",data.userId);
      //디비에 토큰값을 넣음
    }).catch((e)=>{
    window.alert("onesignal error"+e);
    })
    this.oneSignal.endInit();
  }



  constructor(public modal: ModalController, private socialSharing: SocialSharing, private iab: InAppBrowser, public uniqueDeviceID: UniqueDeviceID,
    public alertCtrl: AlertController, public callnumber: CallNumber,
    public admobFree: AdMobFree, public navCtrl: NavController,
    public platform: Platform, public navParams: NavParams,
    public oneSignal: OneSignal) {
    this.fabButtonOpened = false;
    this.refreshname();
    $(document).ready(function () {
      console.log("ready!");
    });

    // setTimeout(()=>{
    //   if(this.platform.is("android")||this.platform.is("ios")){
    //     this.OneSignalInstall();
    //   }
    // },5000)

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