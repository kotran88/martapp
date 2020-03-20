import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import firebase from 'firebase';
import { HomePage } from '../home/home';
/**
 * Generated class for the AddshopingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-addshoping',
  templateUrl: 'addshoping.html',
})
export class AddshopingPage {
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
  a: any;
  price: any;
  sum: any = 0;
  value: any;
  flagg: any;
  printsum: any = 0;
  flagInput: boolean = false;
  nextdirectory = this.firemain.child("id");
  fullyear: any;
  month: any;
  date: any;

  constructor(public speechRecognition: SpeechRecognition, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.a = this.navParams.get("obj");
    this.id = this.navParams.get("id");
    this.title = this.navParams.get("title");
    this.value = this.navParams.get("flag");
    console.log("this.flag:" + this.value)
    this.key = this.navParams.get("key");
    var thisday = new Date();
    thisday.toLocaleString('ko-KR', { hour: 'numeric', minute: 'numeric', hour12: true })
    this.month = thisday.getMonth() + 1;
    this.date = thisday.getDate();
    var hour = thisday.getHours();
    var minute = thisday.getMinutes();
    this.fullyear = thisday.getFullYear();
    var second = thisday.getSeconds();
    console.log("this is the day");
    console.log("title " + this.title + " obj " + this.a + " id " + this.id + " value " + this.value);
    // new Date().toString("hh:mm tt")
    console.log(thisday)
    console.log(this.month + 1);
    console.log(this.date);
    console.log((hour) + "시");
    console.log(minute);
    console.log(this.fullyear)
    this.nowtime = "" + (this.month) + "월" + this.date + "일" + (hour) + "시" + minute + "분";
  }

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  add() {
    console.log(this.adding);

    this.addinglist.push({ "name": this.adding, "checked": false, "price": this.price, "quantity": this.quantity });
    this.totalnumber = this.addinglist.length;
    this.addprice();

    this.adding = "";
    this.price = "";
    this.quantity = "";
  }
  addprice() {
    /*가격받아오기*/
    console.log(this.price);
    console.log(this.addinglist);

    this.sum += Number(this.price) * Number(this.quantity);
    this.printsum = this.formatNumber(this.sum);
    console.log(this.sum);
    console.log(this.printsum);

  }

  priceandquantity() {
    this.flagInput = true;
    this.price = "";
    this.quantity = "";
  }
  cancel() {
    this.flagInput = false;
  }
  addValue(v) {
    console.log(v);
    var count = 0;
    console.log(v.checked);
    console.log(this.addinglist)
    for (var i = 0; i < this.addinglist.length; i++) {
      if (this.addinglist[i].checked == true) {
        count++;
      }
    }
    this.selected = count;
  }
  save() {
    console.log("addshoping saving....")
    this.flag = false;
    this.flagInput = false;
    let alert = this.alertCtrl.create({
      title: '작성 중이던 목록을 저장할까요?',
      buttons: [
        {
          text: '아니요',
          role: 'cancel',
          handler: data => {
            this.firemain.child("users").child(this.id).child(this.value).child(this.title).remove().then(() => {
              console.log("Cancel");
            })

          }
        },
        {
          text: '예',
          handler: data => {
            console.log(this.addinglist);
            console.log(this.adding);
            console.log(this.id);
            console.log(this.key);
            console.log(this.value);
            console.log(this.title);

            if (this.addinglist.length == 0) {
              window.alert("목록을 입력해주세요.");
              this.add();
            }
            else {
              this.firemain.child("users").child(this.id).child(this.value).child(this.title).child(this.key).update({ "time": this.nowtime, "flag": "entered", "key": this.key })
              this.firemain.child("users").child(this.id).child(this.value).child(this.title).child(this.key).child("list").update(this.addinglist);
              window.alert("저장되었습니다.");
            }
          }
        }
      ]
    });
    alert.present();

  }

  goBack() {
    if (this.addinglist.length == 0) {
      this.firemain.child("users").child(this.id).child(this.value).child(this.title).remove().then(() => {
        console.log("Cancel");
      })
      this.navCtrl.push(HomePage);
    }
    else {
      this.navCtrl.push(HomePage);
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddshopingPage');
  }
}