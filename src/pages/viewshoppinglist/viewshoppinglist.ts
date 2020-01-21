import { Component, ViewChild } from '@angular/core';
import { NavController, Navbar, AlertController, NavParams, FabButton, FabContainer, ToastController, ModalController, ViewController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import firebase from 'firebase';
import * as $ from 'jquery'
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeBanner } from '@ionic-native/admob-free';
import { HomePage } from '../home/home';



/**
 * Generated class for the ViewshoppinglistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-viewshoppinglist',
  templateUrl: 'viewshoppinglist.html',
})
export class ViewshoppinglistPage {
  @ViewChild(Navbar) navBar: Navbar;

  [x: string]: any;
  selected: any;
  totalnumber: any = 0;
  key: any;
  flag: boolean = false;
  firemain = firebase.database().ref();
  addinglist = [];
  adding: any;
  id: any;
  title: any;
  nowtime: any;
  nextdirectory: any;
  a: any;
  name: any;
  price: any;
  sum: any = 0;
  printsum: any = 0;
  flagInput: boolean = false; //가격 및 수량도 입력하기 버튼을 위한 boolean형 변수
  addvalue: any;
  shop: any;
  count: any = 0;

  // setBackButtonAction(){
  //   this.navBar.backButtonClick = () => {
  //   //Write here wherever you wanna do
  //   console.log("back"+this.selected);
  //   this.viewCtrl.dismiss({"flag":"navBack", "value":this.selected})
  //   }
  //   this.refreshname();
  // }

  constructor(public navParam: NavParams, public navCtrl: NavController,
    public navParams: NavParams, private iab: InAppBrowser,
    public alertCtrl: AlertController, private admobFree: AdMobFree,
    public toastCtrl: ToastController, public modal: ModalController, public viewCtrl: ViewController) {
    this.a = this.navParams.get("obj");
    this.id = this.navParams.get("id");
    this.nextdirectory = this.firemain.child(this.id);
    this.key = this.navParams.get("key");
    this.title = this.a.title;
    this.shop = this.navParams.get("flag");
    console.log(this.shop);
    console.log(this.a);
    console.log(this.a.list);
    console.log(this.id);
    console.log(this.title);
    console.log(this.key);
    var thisday = new Date();
    thisday.toLocaleString('ko-KR', { hour: 'numeric', minute: 'numeric', hour12: true })
    var month = thisday.getMonth();
    var date = thisday.getDate();
    var hour = thisday.getHours();
    var minute = thisday.getMinutes();
    var fullyear = thisday.getFullYear();
    var second = thisday.getSeconds();
    this.nowtime = "" + (month + 1) + "월" + date + "일" + (hour) + "시" + minute + "분";
    this.totalnumber = this.a.list.length;
    this.checkedbuy();
    this.addprice();

    $(document).ready(function () {
      console.log("ready!");
    });
  }


  /*숫자에 콤마 찍기*/
  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  addprice() {
    /*가격받아오기*/
    this.firemain.child(this.id).child(this.shop).child(this.title).child(this.key).child("list").once("value", (snap) => {
      for (var a = 0; a < snap.val().length; a++) {
        console.log(snap.val()[a])
        console.log(Number(snap.val()[a].quantity) * Number(snap.val()[a].price));
        console.log(this.sum);
        this.sum += Number(snap.val()[a].quantity) * Number(snap.val()[a].price);
        this.printsum = this.formatNumber(this.sum);
      }
      console.log(this.sum);
      console.log(this.printsum);
    })
  }

  /*check 여부 DB 불러오기 */
  checkedbuy() {
    var count = 0;
    this.firemain.child(this.id).child(this.shop).child(this.title).child(this.key).child("list").once("value", (snap) => {
      for (var a = 0; a < snap.val().length; a++) {
        console.log(snap.val()[a])
        console.log(snap.val()[a].checked);
        if (snap.val()[a].checked == true) {
          count++;
          console.log(count);
        }
      }
      this.selected = count;
      console.log(this.selected);
    })
  }

  /*새로고침*/
  refreshname() {
    this.a.list = [];
    var sum = 0;
    this.firemain.child(this.id).child(this.shop).child(this.title).child(this.key).child("list").once("value", (snap) => {
      for (var a = 0; a < snap.val().length; a++) {
        console.log(snap.val()[a].name, snap.val()[a].checked, snap.val()[a].price, snap.val()[a].quantity)
        sum += Number(snap.val()[a].quantity) * Number(snap.val()[a].price);//가격 다시 받기
        this.printsum = this.formatNumber(sum);
        this.a.list.push({ "name": snap.val()[a].name, "checked": snap.val()[a].checked, "price": snap.val()[a].price, "quantity": snap.val()[a].quantity });
      }
      console.log(sum);
    })
  }

  public srct = {
    text: '',
    url: ''
  }

  add() {
    console.log(this.a.list);
    this.a.list.push({ "name": this.adding, "checked": false, "price": this.price, "quantity": this.quantity });
    this.totalnumber = this.a.list.length;
    this.adding = "";
    this.price = "";
    this.quantity = "";
  }

  /*가격 및 수량도 입력하기*/
  priceandquantity() {
    this.flagInput = true;
  }

  /*취소버튼*/
  cancel() {
    this.flagInput = false;
  }

  addValue(v) {
    console.log(v);
    console.log(v.checked);
    console.log(this.a.list);

    for (var i = 0; i < this.a.list.length; i++) {
      if (this.a.list[i].checked == true) {
        this.count++;
      }
    }
    this.selected = this.count;

    var checked = []; //선택된 것을 넣을 수 있는 새로운 배열
    var unchecked = []; //선택되지 않은 것을 넣을 수 있는 새로운 배열.

    for (var i = 0; i < this.a.list.length; i++) {
      if (this.a.list[i].checked == true) {
        checked.push(this.a.list[i]);
        console.log(checked);
      }
      else if (this.a.list[i].checked == false) {
        unchecked.push(this.a.list[i]);
        console.log(unchecked);
      }
    }
    console.log(checked);
    console.log(unchecked);
    this.a.list = [];
    for (var i = 0; i < unchecked.length; i++) {
      this.a.list.push(unchecked[i])
    }
    for (var i = 0; i < checked.length; i++) {
      this.a.list.push(checked[i])
    }

    console.log(this.a.list);
  }

  

  save() {
    this.flag = false;
    this.flagInput = false;
    let alert = this.alertCtrl.create({
      title: '작성 중이던 목록을 저장할까요?',
      buttons: [
        {
          text: '아니요',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '예',
          handler: data => {
            console.log(this.shop);
            this.firemain.child(this.id).child(this.shop).child(this.title).child(this.key).update({ "time": this.nowtime, "flag": "entered", "key": this.key })
            this.firemain.child(this.id).child(this.shop).child(this.title).child(this.key).child("list").update(this.a.list);
            this.refreshname();
            this.showToastWithCloseButton();
            this.checkedbuy();
          }
        }
      ]
    });
    alert.present();
  }

  /*수정*/
  insertData(fab: FabContainer) {
    this.flag = true;
    fab.close();
  }

  /*삭제*/
  delete(fab: FabContainer) {
    let alert = this.alertCtrl.create({
      title: '정말로 삭제하시겠습니까?',
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
            var newlist = []; //선택된 것을 넣을 수 있는 새로운 배열
            console.log(this.a.list); //this.a.list는 입력을 받은 배열
            for (var i = 0; i < this.a.list.length; i++) {
              /*a.list에 있는 항목이 체크가 되어있으면 newlist에 push*/
              if (this.a.list[i].checked == true) {
                console.log(this.a.list[i].checked);
                newlist.push(i);
              }
            }

            for (var i = 0; i < newlist.length; i++) {
              this.a.list[newlist[i]] = "NC"
            }

            console.log(this.a.list)

            var filtered = this.a.list.filter(function (value) {
              console.log(value)
              return value != "NC";

            });
            console.log(filtered)
            this.a.list = filtered

            console.log(this.a.list);
            /*입력 리스트에서 삭제된 항목을 firebase에서 삭제하기위해 list 삭제*/
            this.firemain.child(this.id).child(this.shop).child(this.title).child(this.key).child("list").once("value", (snap) => {
              for (var a in snap.val()) {
                this.firemain.child(this.id).child(this.shop).child(this.title).child(this.key).child("list").remove().then(() => {
                  console.log("success")
                }).catch((e) => {
                  console.log("error" + e);
                })
              }
              /*삭제한 list를 update를 통해 수정된 데이터로 다시 넣어줌 */
              this.firemain.child(this.id).child(this.shop).child(this.title).child(this.key).child("list").update(this.a.list).then(() => {
                console.log(this.a.list);
              });

              window.alert("삭제되었습니다.")
              /*totalNumber와 Select값 가져오기*/
              this.totalnumber = this.a.list.length;
              var count = 0;
              for (var i = 0; i < this.a.list.length; i++) {
                if (this.a.list[i].checked == true) {
                  count++;
                }
              }
              this.selected = count;
              this.refreshname(); //새로고침
            })
          }
        }
      ]
    });
    fab.close();
    alert.present();
  }

  /*sort구현*/
  sortlist(fab: FabContainer) {

    this.a.list.sort(function (name1, name2) {
      return name1.name.toLowerCase() < name2.name.toLowerCase() ? -1 : name1.name.toLowerCase() > name2.name.toLowerCase() ? 1 : 0;
    });
    console.log(this.a.list);
    window.alert("정렬되었습니다.");
    this.firemain.child(this.id).child(this.shop).child(this.title).child(this.key).child("list").update(this.a.list).then(() => {
      console.log(this.a.list);
    });
    fab.close();
  }

  /*가격비교 검색*/
  select_sort(c) {
    console.log(c);
    this.srct.url = 'https://msearch.shopping.naver.com/search/all.nhn?origQuery=' + this.a.list[c].name + '&pagingIndex=1&pagingSize=40&viewType=list&sort=' + $("#slt").val() + '&frm=NVSHATC&query=' + this.a.list[c].name;

    console.log(this.srct.url);
    const browser = this.iab.create(this.srct.url, "_blank", "location=no,toolbar=no");

    browser.on('loadstop').subscribe(event => {
      browser.insertCSS({ code: "body{color: red;}" });
    });
  }

  /*토스트버튼*/
  showToastWithCloseButton() {
    if (this.selected >= 0) {
      const toast = this.toastCtrl.create({
        message: this.totalnumber + '개 중 ' + this.selected + ' 개 구입 완료.',
        duration: 2000,
      });
      toast.present();
    }
  }

  speeching() {
    let options = {
      "language": "ko-KR",
      "matches": 1,
      "prompt": "평소 말하는 것처럼 말해주세요",      // Android only
      "showPopup": true,  // Android only
      "showPartial": true
    }
    // Check feature available
    this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => console.log(available)).catch((e) => {
        console.log(e);
      })
    // Start the recognition process
    this.speechRecognition.startListening(options)
      .subscribe(
        (matches: string[]) => console.log(matches),
        (onerror) => console.log('error:', onerror)
      )
    // Stop the recognition process (iOS only)
    this.speechRecognition.stopListening()
    // Get the list of supported languages
    this.speechRecognition.getSupportedLanguages()
      .then(
        (languages: string[]) => console.log(languages),
        (error) => console.log(error)
      )
    // Check permission
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => console.log(hasPermission))
    // Request permissions
    this.speechRecognition.requestPermission()
      .then(
        () => console.log('Granted'),
        () => console.log('Denied')
      )
  }
}
