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

  buttontoggle=[
    {name:'7일 전',check:false},
    {name:'3일 전',check:false},
    {name:'1일 전',check:false},
    {name:'받지 않기',check:true},
  ];

  DateTime:any;

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
    return val;
  }

  alarmcheck(){
    this.click(this.DateTime);

    for(var i=0;i<4;i++){
      console.log(i,this.buttontoggle[i]);
    }
    this.shownGroup=false;

    console.log(this.DateTime)
    
    this.addlist();
  }
  
  click(date){
  	console.log('click..',date);
  	let hoursMinutes = date.split(':');
  	let time = this.formatAMPM(hoursMinutes);
  	console.log('time',time);
  }

  formatAMPM(date) {
    var hours = date[0];
    var minutes = date[1];
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  addlist() {

    var val=[];
    var firemain = firebase.database().ref();
    var id: any = "a2f05b91-956a-b480-3525-991002905558";
    var DT=this.DateTime;



    for(var i=0;i<this.buttontoggle.length;i++){
      val[i]=this.buttontoggle[i].check;
    }

    var temp=val[0]+','+val[1]+','+val[2]+','+val[3];
    firemain.child(id).child("setting").update({'alarm':temp});

    console.log(this.DateTime)
    var time=this.DateTime;
    firemain.child(id).child("setting").update({"time":time});
    
    console.log(val);
    console.log(DT);
    // this.navCtrl.push(AddshopingPage, { "flag": this.selectedvalue, "key": key, "id": this.id, "title": data.title }).then(() => {
    //   this.navCtrl.getActive().onDidDismiss(data => {
    //     console.log("dismiss detect");
    //     this.refreshname();
    //   })
    // });
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