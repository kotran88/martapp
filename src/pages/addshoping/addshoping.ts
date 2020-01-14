import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import firebase from 'firebase';
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

  constructor(public speechRecognition: SpeechRecognition, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.a = this.navParams.get("obj");
    this.id = this.navParams.get("id");
    this.title = this.navParams.get("title");
    this.value = this.navParams.get("flag");
    console.log("this.flag:" + this.value)
    this.key = this.navParams.get("key");
    var thisday = new Date();
    thisday.toLocaleString('ko-KR', { hour: 'numeric', minute: 'numeric', hour12: true })
    var month = thisday.getMonth();
    var date = thisday.getDate();
    var hour = thisday.getHours();
    var minute = thisday.getMinutes();
    var fullyear = thisday.getFullYear();
    var second = thisday.getSeconds();
    console.log("this is the day")
    // new Date().toString("hh:mm tt")
    console.log(thisday)
    console.log(month + 1);
    console.log(date);
    console.log((hour) + "시");
    console.log(minute);
    console.log(fullyear)
    this.nowtime = "" + (month + 1) + "월" + date + "일" + (hour) + "시" + minute + "분";
    //
  }
  add() {
    console.log(this.adding);
    this.addinglist.push({ "name": this.adding, "checked": false });
    this.totalnumber = this.addinglist.length;
    this.adding = "";
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
            this.firemain.child(this.id).child(this.value).child(this.title).remove().then(() => {
              console.log("success");
            })

          }
        },
        {
          text: '예',
          handler: data => {
            console.log(this.addinglist);
            console.log(this.id);
            console.log(this.key);
            console.log(this.value);
            this.firemain.child(this.id).child(this.value).child(this.title).child(this.key).update({ "time": this.nowtime, "flag": "entered", "key": this.key })
            this.firemain.child(this.id).child(this.value).child(this.title).child(this.key).child("list").update(this.addinglist);
            window.alert("저장되었습니다.");
          }
        }
      ]
    });
    alert.present();

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