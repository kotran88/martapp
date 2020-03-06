import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
// import * as $ from 'jquery'

/**
 * Generated class for the MartinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-martinfo',
  templateUrl: 'martinfo.html',
})
export class MartinfoPage {
  area: any;
  mart: any;
  img: any;
  name: any;
  day = new Date();
  year: any;
  month: any;
  date: any;
  dayOfweek: any;
  whatWeek: any;//몇주인가?
  martArray = [];
  firemain = firebase.database().ref();
  week = [];
  dayweek = [];
  dayoff = [];
  dayy: any;
  today: any;
  todayy = [];
  userId: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mart = this.navParams.get("mart");
    this.area = this.navParams.get("area");
    console.log(this.mart);
    console.log(this.area);
    this.martfunc();
    this.year = this.day.getFullYear();
    this.month = this.day.getMonth() + 1;
    this.date = this.day.getDate();
    this.dayOfweek = this.day.getDay();
    this.theDate();
    this.weekAndDay();
    this.todayy = ['오늘'];
  }

  weekAndDay() {
    var date = new Date,
      days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
      prefixes = ['첫째주', '둘째주', '셋째주', '넷째주', '다섯째주'];
    this.whatWeek = prefixes[0 | date.getDate() / 7];
    this.dayy = days[date.getDay()];
    console.log(this.dayy);
    // this.whatWeek = '둘째주';
    console.log(this.whatWeek);
    var w = prefixes[0 | date.getDate() / 7] + ' ' + days[date.getDay()];
    console.log(w);
  }

  theDate() {
    this.year = this.day.getFullYear();
    this.month = this.day.getMonth() + 1;
    this.date = this.day.getDate();
    this.dayOfweek = this.day.getDay();
    for (var i = 0; i < 7; i++) {
      var date = this.day.getDate() + i;
      console.log(date);
      this.week.push(date);
    }
    console.log(this.day.getDay());
    if (this.day.getDay() == 0) {
      var dname = new Array('일', '월', '화', '수', '목', '금', '토');
      for (var j = 0; j < dname.length; j++) {
        console.log(dname[j]);
        this.dayweek.push(dname[j]);
        this.dayoff=dname[0];
      }
      console.log(this.dayweek)
    }
    if (this.day.getDay() == 1) {
      var dname = new Array('월', '화', '수', '목', '금', '토', '일');
      for (var j = 0; j < dname.length; j++) {
        console.log(dname[j]);
        this.dayweek.push(dname[j]);
      }
      console.log(this.dayweek)
    }
    if (this.day.getDay() == 2) {
      var dname = new Array('화', '수', '목', '금', '토', '일', '월');
      for (var j = 0; j < dname.length; j++) {
        console.log(dname[j]);
        this.dayweek.push(dname[j]);
      }
      console.log(this.dayweek);
    }
    if (this.day.getDay() == 3) {
      var dname = new Array('수', '목', '금', '토', '일', '월', '화');
      for (var j = 0; j < dname.length; j++) {
        console.log(dname[j]);
        this.dayweek.push(dname[j]);
      }
      console.log(this.dayweek);
    }
    if (this.day.getDay() == 4) {
      var dname = new Array('목', '금', '토', '일', '월', '화', '수');
      for (var j = 0; j < dname.length; j++) {
        console.log(dname[j]);
        this.dayweek.push(dname[j]);
      }
      console.log(this.dayweek);
    }
    if (this.day.getDay() == 5) {
      var dname = new Array('금', '토', '일', '월', '화', '수', '목');
      for (var j = 0; j < dname.length; j++) {
        console.log(dname[j]);
        this.dayweek.push(dname[j]);
      }
      console.log(this.dayweek);
    }
    if (this.day.getDay() == 6) {
      var dname = new Array('토', '일', '월', '화', '수', '목', '금');
      for (var j = 0; j < dname.length; j++) {
        console.log(dname[j]);
        this.dayweek.push(dname[j]);
      }
      console.log(this.dayweek);
    }
    console.log(this.week);
  }

  newfunction(name) {
    console.log(name);
    this.userId = "a2f05b91-956a-b480-3525-991002905558"
    console.log(this.area);
    this.firemain.child("mart").once("value", (sn) => {
      for (var a in sn.val()) {
        console.log(a);

        if (a == name) {
          if (this.area == "seoul") {
            for (var b in sn.val()[a]) {
              if (sn.val()[a][b].addr.indexOf("서울") != -1 && sn.val()[a][b].addr.indexOf("서울대학로") == -1) {
                this.martArray.push(sn.val()[a][b]);
                
              }
            }
          }
          console.log(this.martArray);
          if (this.area == "gyeonggi") {
            for (var b in sn.val()[a]) {
              if (sn.val()[a][b].addr.indexOf("경기") != -1) { this.martArray.push(sn.val()[a][b]); }
            }
          }
          if (this.area == "incheon") {
            for (var b in sn.val()[a]) {
              if (sn.val()[a][b].addr.indexOf("경기") != -1) { this.martArray.push(sn.val()[a][b]); }
            }
          }
          if (this.area == "gangwon") {
            for (var b in sn.val()[a]) {
              if (sn.val()[a][b].addr.indexOf("강원") != -1) { this.martArray.push(sn.val()[a][b]); }
            }
          }
          if (this.area == "chungbuk") {
            for (var b in sn.val()[a]) {
              if (sn.val()[a][b].addr.indexOf("충북") != -1) { this.martArray.push(sn.val()[a][b]); }
            }
          }
          if (this.area == "chungnam") {
            for (var b in sn.val()[a]) {
              if (sn.val()[a][b].addr.indexOf("충남") != -1) { this.martArray.push(sn.val()[a][b]); }
            }
          }
          if (this.area == "jeonbuk") {
            for (var b in sn.val()[a]) {
              if (sn.val()[a][b].addr.indexOf("전북") != -1) { this.martArray.push(sn.val()[a][b]); }
            }
          }
          if (this.area == "jeonnam") {
            for (var b in sn.val()[a]) {
              if (sn.val()[a][b].addr.indexOf("전남") != -1) { this.martArray.push(sn.val()[a][b]); }
            }
          }
          if (this.area == "gwangju") {
            for (var b in sn.val()[a]) {
              if (sn.val()[a][b].addr.indexOf("광주") != -1) { this.martArray.push(sn.val()[a][b]); }
            }
          }
          if (this.area == "daejeon") {
            for (var b in sn.val()[a]) {
              if (sn.val()[a][b].addr.indexOf("대전") != -1) { this.martArray.push(sn.val()[a][b]); }
            }
          }
          if (this.area == "gyeongbuk") {
            for (var b in sn.val()[a]) {
              if (sn.val()[a][b].addr.indexOf("경북") != -1) { this.martArray.push(sn.val()[a][b]); }
            }
          }
          if (this.area == "gyeongnam") {
            for (var b in sn.val()[a]) {
              if (sn.val()[a][b].addr.indexOf("경남") != -1) { this.martArray.push(sn.val()[a][b]); }
            }
          }
          if (this.area == "busan") {
            for (var b in sn.val()[a]) {
              if (sn.val()[a][b].addr.indexOf("부산") != -1) { this.martArray.push(sn.val()[a][b]); }
            }
          }
          if (this.area == "ulsan") {
            for (var b in sn.val()[a]) {
              if (sn.val()[a][b].addr.indexOf("울산") != -1) { this.martArray.push(sn.val()[a][b]); }
            }
          }
          if (this.area == "jeju") {
            for (var b in sn.val()[a]) {
              if (sn.val()[a][b].addr.indexOf("제주") != -1) { this.martArray.push(sn.val()[a][b]); }
            }
          }




        }
      }
    })
  }
  martfunc() {
    if (this.mart == "lottemart") {
      this.name = "롯데마트";
      this.img = "./assets/imgs/009-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-롯데마트 CI.png";
      var newnametoinput = "";
      newnametoinput = "lotte";
      this.newfunction(newnametoinput)
    }
    if (this.mart == "emart") {
      this.name = "이마트";
      this.img = "./assets/imgs/010-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-이마트 CI.png";
      var newnametoinput = "";
      newnametoinput = "emart";
      this.newfunction(newnametoinput)
    }
    if (this.mart == "homeplus") {
      this.name = "홈플러스";
      this.img = "./assets/imgs/011-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-홈플러스 CI.png";
      var newnametoinput = "";
      newnametoinput = "homeplus";
      this.newfunction(newnametoinput)
    }
    if (this.mart == "costco") {
      this.name = "코스트코";
      this.img = "./assets/imgs/012-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-코스트코 CI.png";
      var newnametoinput = "";
      newnametoinput = "costco";
      this.newfunction(newnametoinput)
    }
    if (this.mart == "traders") {
      this.name = "이마트 트레이더스";
      this.img = "./assets/imgs/013-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-이마트 트레이더스 CI.png";
      var newnametoinput = "";
      newnametoinput = "traders";
      this.newfunction(newnametoinput)
    }
    if (this.mart == "lottedep") {
      this.name = "롯데 백화점";
      this.img = "./assets/imgs/020-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-롯데백화점 CI.png";
      var newnametoinput = "";
      newnametoinput = "lottedep";
      this.newfunction(newnametoinput)
    }
    if (this.mart == "ssgdep") {
      this.name = "신세계 백화점";
      this.img = "./assets/imgs/021-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-신세백화점 CI.png";
      var newnametoinput = "";
      newnametoinput = "sinsaegae";
      this.newfunction(newnametoinput)
    }
    if (this.mart == "hyundep") {
      this.name = "현대 백화점";
      this.img = "./assets/imgs/022-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-현대백화점 CI.png";
      var newnametoinput = "";
      newnametoinput = "hyundai";
      this.newfunction(newnametoinput)
    }
    if (this.mart == "lotteout") {
      this.name = "롯데 아울렛";
      this.img = "./assets/imgs/023-버튼-PPT 4페이지의 가운데 이미지의 아울렛별 로고-롯데아울렛 CI.png";
      var newnametoinput = "";
      newnametoinput = "lotteoutlet";
      this.newfunction(newnametoinput)
    }
  }

  favorite(a, b) {
    console.log(a);
    console.log(this.mart);

    var newnametoinput = "";
    if (this.mart == "lottemart") { newnametoinput = "lotte"; }
    if (this.mart == "emart") { newnametoinput = "emart"; }
    if (this.mart == "homeplus") { newnametoinput = "homeplus"; }
    if (this.mart == "costco") { newnametoinput = "costco"; }
    if (this.mart == "traders") { newnametoinput = "traders"; }
    if (this.mart == "lottedep") { newnametoinput = "lottedep"; }
    if (this.mart == "ssgdep") { newnametoinput = "sinsaegae"; }
    if (this.mart == "hyundep") { newnametoinput = "hyundai"; }
    if (this.mart == "lotteout") { newnametoinput = "lotteoutlet"; }
    console.log(newnametoinput);

    if (b == true) {
      console.log("true");
      this.firemain.child("users").once("value", (sn) => {
        console.log(sn.val());
        for (var aa in sn.val()) {
          console.log(sn.val()[aa]);
          this.firemain.child("users").child(aa).child("favorite").child(newnametoinput).child(a).update({ "favorite": "true" });
        }
      })
    }
    if (b == false) {
      console.log("false");
      this.firemain.child("users").once("value", (sn) => {
        console.log(sn.val());
        for (var aa in sn.val()) {
          console.log(aa);
          console.log(sn.val()[aa]);
          this.firemain.child("users").child(aa).child("favorite").child(newnametoinput).child(a).update({ "favorite": "false" });
        }
      })
    }




  }


}
