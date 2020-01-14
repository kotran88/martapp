import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController,Platform,ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LocaleDataIndex, LOCALE_DATA } from '@angular/common/src/i18n/locale_data';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { isTrueProperty } from 'ionic-angular/umd/util/util';
import { componentFactoryName } from '@angular/compiler';
import undefined from 'firebase/empty-import';
import { DatePicker } from '@ionic-native/date-picker';
import { last } from 'rxjs/operator/last';
import firebase from 'firebase';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  version='V1.10.01';
  shownGroup = null;

  key: any;
  id: any;
  title: any;
  nextdirectory: any;
  a: any;
  firemain = firebase.database().ref();

  test:any=false;
  buttontoggle=[
    {name:'7일 전',check:false},
    {name:'3일 전',check:false},
    {name:'1일 전',check:false},
    {name:'받지 않기',check:true},
  ];

  DateTime=({hour:"11",min:"50",apm:"AM"})

  toggleGroup() {
    this.shownGroup=!this.shownGroup;
  };

  clickButton(i) {
    this.buttontoggle[i].check=!(this.buttontoggle[i].check);

    if(i==3){
      this.buttontoggle[0].check=false;
      this.buttontoggle[1].check=false;
      this.buttontoggle[2].check=false;
    }
    else this.buttontoggle[3].check=false;
    
    console.log(i,this.buttontoggle[i]);
  };

  checkbutton(){
    var val=false;
    for(var i=0; i<this.buttontoggle.length;i++){
      if(this.buttontoggle[i].check==true)
      {
        if(i<3) val=true;
        else val=false;
      }
    }

  }

  alarmcheck(){
    for(var i=0;i<4;i++){
      console.log(i,this.buttontoggle[i]);
    }
    this.shownGroup=false;

    console.log(this.DateTime)
    console.log(this.DateTime.hour);
    console.log(this.DateTime.min);
    console.log(this.DateTime.apm);
    this.send_alarm();
  }

  send_alarm(){
    this.a = this.navParams.get("obj");
    console.log(this.a);
    window.alert('1');
    this.id = this.navParams.get("id");
    console.log(this.id)
    window.alert('a');
    this.nextdirectory = this.firemain.child(this.id);
    window.alert('b');
    this.key = this.navParams.get("key");
    window.alert('c');
    this.title = this.a.title;
    window.alert('d');
  }

  constructor(public modal:ModalController,private datePicker: DatePicker,
    private iab:InAppBrowser,private socialSharing:SocialSharing,private alertCtrl:AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  evaluation(){
    //window.alert('evaluation');
    window.open('market://details?id=com.kakao.talk', '_system');
  }

  license(){
    //window.alert('license');
    let modal=this.modal.create(licenseModalPage);
    modal.present();
  }

  email(){           
    //window.alert('email');
    var msg = "백화점 마트 헛걸음 방지 앱. '백마헛방' 쇼핑가기전엔 언제나 '백마헛방'";
    console.log(msg)
    //this.socialSharing.share(msg, null, null, null);
    this.socialSharing.shareViaEmail(null,'문의 사항',['superstepmall@gmail.com'],null);
  }

  privacy(){
    //window.alert('privacy');
    let modal=this.modal.create(privacyModalPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
    
  }
}

@Component({
  template: `
  <ion-content class="main-view" style="background: transparent;
  background-color: white;
  outline-color=black;
  border: solid 1px;
  border-radius: 10px;
  height: 80%;
  width:80%;
  top: 10%;
  left:10%;
  " padding>
      
    <div class="modal_content">
        
          <div class="img">
               
        </div>
        <div class="footer">
          <button ion-button (click)="dismiss()">
          나가기
          </button>
        </div>
     
    </div>
    </ion-content>
    `
})

export class licenseModalPage{

  constructor(public platform: Platform,public params: NavParams,public viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

@Component({
  template: `
  <ion-content class="main-view" style="background: transparent;
  background-color: white;
  outline-color=black;
  border: solid 1px;
  border-radius: 10px;
  height: 80%;
  width:80%;
  top: 10%;
  left:10%;
  " padding>
      
    <div class="modal_content">
        
          <div class="img">
               
        </div>
        <div class="footer">
          <button ion-button (click)="dismiss()">
          나가기
          </button>
        </div>
     
    </div>
    </ion-content>
    `
})

export class privacyModalPage{

  constructor(public platform: Platform,public params: NavParams,public viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}