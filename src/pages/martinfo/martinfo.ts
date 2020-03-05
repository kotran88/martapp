import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import * as $ from 'jquery'


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
    console.log("hi");
    this.firemain.child("favorite").child(name).once("value", (sn) => {
      console.log(name);
      if (this.area == "seoul") {
        for (var a in sn.val()) {
          // this.firemain.child("favorite").child(name).child(a).update({"favorite":"false"}); //즐겨찾기 초기화

          if (sn.val()[a].addr.indexOf("서울") != -1 && sn.val()[a].addr.indexOf("서울대학로") == -1) {
            this.martArray.push(sn.val()[a])
            console.log(sn.val()[a].name + " : " + sn.val()[a].addr + " 휴일은 " + sn.val()[a].vacation);
            if (this.whatWeek == "첫째주") {
              if (sn.val()[a].vacation.indexOf("첫째") != -1) {
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "둘째주") {
              console.log(this.dayy);
              if (sn.val()[a].vacation.indexOf("둘째") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "셋째주") {
              if (sn.val()[a].vacation.indexOf("셋째") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "넷째주") {
              if (sn.val()[a].vacation.indexOf("넷째") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "다섯째주") {
              if (sn.val()[a].vacation.indexOf("다섯") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
          }
        }
      }
      if (this.area == "gyeonggi") {
        for (var a in sn.val()) {
          if (sn.val()[a].addr.indexOf("경기") != -1) {
            this.martArray.push(sn.val()[a])
            if (this.whatWeek == "첫째주") {
              if (sn.val()[a].vacation.indexOf("첫째") != -1 || sn.val()[a].vacation.indexOf("1") != -1) {
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "둘째주") {
              if (sn.val()[a].vacation.indexOf("둘째") != -1 || sn.val()[a].vacation.indexOf("2") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "셋째주") {
              if (sn.val()[a].vacation.indexOf("셋째") != -1 || sn.val()[a].vacation.indexOf("3") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "넷째주") {
              if (sn.val()[a].vacation.indexOf("넷째") != -1 || sn.val()[a].vacation.indexOf("4") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "다섯째주") {
              if (sn.val()[a].vacation.indexOf("다섯") != -1 || sn.val()[a].vacation.indexOf("5") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
          }
        }
      }
      if (this.area == "incheon") {
        for (var a in sn.val()) {
          if (sn.val()[a].addr.indexOf("인천") != -1) {
            this.martArray.push(sn.val()[a])
            if (this.whatWeek == "첫째주") {
              if (sn.val()[a].vacation.indexOf("첫째") != -1 || sn.val()[a].vacation.indexOf("1") != -1) {
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "둘째주") {
              if (sn.val()[a].vacation.indexOf("둘째") != -1 || sn.val()[a].vacation.indexOf("2") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "셋째주") {
              if (sn.val()[a].vacation.indexOf("셋째") != -1 || sn.val()[a].vacation.indexOf("3") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "넷째주") {
              if (sn.val()[a].vacation.indexOf("넷째") != -1 || sn.val()[a].vacation.indexOf("4") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "다섯째주") {
              if (sn.val()[a].vacation.indexOf("다섯") != -1 || sn.val()[a].vacation.indexOf("5") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
          }
        }
      }
      if (this.area == "gangwon") {
        for (var a in sn.val()) {
          if (sn.val()[a].addr.indexOf("강원") != -1) {
            this.martArray.push(sn.val()[a])
            if (this.whatWeek == "첫째주") {
              if (sn.val()[a].vacation.indexOf("첫째") != -1 || sn.val()[a].vacation.indexOf("1") != -1) {
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "둘째주") {
              console.log(this.dayy);
              if (sn.val()[a].vacation.indexOf("둘째") != -1 || sn.val()[a].vacation.indexOf("2") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "셋째주") {
              if (sn.val()[a].vacation.indexOf("셋째") != -1 || sn.val()[a].vacation.indexOf("3") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "넷째주") {
              if (sn.val()[a].vacation.indexOf("넷째") != -1 || sn.val()[a].vacation.indexOf("4") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "다섯째주") {
              if (sn.val()[a].vacation.indexOf("다섯") != -1 || sn.val()[a].vacation.indexOf("5") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
          }
        }
      }
      if (this.area == "chungbuk") {
        for (var a in sn.val()) {
          if (sn.val()[a].addr.indexOf("충북") != -1) {
            this.martArray.push(sn.val()[a])
            if (this.whatWeek == "첫째주") {
              if (sn.val()[a].vacation.indexOf("첫째") != -1 || sn.val()[a].vacation.indexOf("1") != -1) {
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "둘째주") {
              console.log(this.dayy);
              if (sn.val()[a].vacation.indexOf("둘째") != -1 || sn.val()[a].vacation.indexOf("2") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "셋째주") {
              if (sn.val()[a].vacation.indexOf("셋째") != -1 || sn.val()[a].vacation.indexOf("3") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "넷째주") {
              if (sn.val()[a].vacation.indexOf("넷째") != -1 || sn.val()[a].vacation.indexOf("4") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "다섯째주") {
              if (sn.val()[a].vacation.indexOf("다섯") != -1 || sn.val()[a].vacation.indexOf("5") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
          }
        }
      }
      if (this.area == "chungnam") {
        for (var a in sn.val()) {
          if (sn.val()[a].addr.indexOf("충남") != -1) {
            this.martArray.push(sn.val()[a])
            if (this.whatWeek == "첫째주") {
              if (sn.val()[a].vacation.indexOf("첫째") != -1 || sn.val()[a].vacation.indexOf("1") != -1) {
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "둘째주") {
              console.log(this.dayy);
              if (sn.val()[a].vacation.indexOf("둘째") != -1 || sn.val()[a].vacation.indexOf("2") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "셋째주") {
              if (sn.val()[a].vacation.indexOf("셋째") != -1 || sn.val()[a].vacation.indexOf("3") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "넷째주") {
              if (sn.val()[a].vacation.indexOf("넷째") != -1 || sn.val()[a].vacation.indexOf("4") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "다섯째주") {
              if (sn.val()[a].vacation.indexOf("다섯") != -1 || sn.val()[a].vacation.indexOf("5") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
          }
        }
      }
      if (this.area == "daejeon") {
        for (var a in sn.val()) {
          if (sn.val()[a].addr.indexOf("대전") != -1) {
            this.martArray.push(sn.val()[a])
            if (this.whatWeek == "첫째주") {
              if (sn.val()[a].vacation.indexOf("첫째") != -1 || sn.val()[a].vacation.indexOf("1") != -1) {
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "둘째주") {
              console.log(this.dayy);
              if (sn.val()[a].vacation.indexOf("둘째") != -1 || sn.val()[a].vacation.indexOf("2") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "셋째주") {
              if (sn.val()[a].vacation.indexOf("셋째") != -1 || sn.val()[a].vacation.indexOf("3") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "넷째주") {
              if (sn.val()[a].vacation.indexOf("넷째") != -1 || sn.val()[a].vacation.indexOf("4") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "다섯째주") {
              if (sn.val()[a].vacation.indexOf("다섯") != -1 || sn.val()[a].vacation.indexOf("5") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
          }
        }
      }
      if (this.area == "gyeongbuk") {
        for (var a in sn.val()) {
          if (sn.val()[a].addr.indexOf("경북") != -1) {
            this.martArray.push(sn.val()[a])
            if (this.whatWeek == "첫째주") {
              if (sn.val()[a].vacation.indexOf("첫째") != -1 || sn.val()[a].vacation.indexOf("1") != -1) {
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "둘째주") {
              console.log(this.dayy);
              if (sn.val()[a].vacation.indexOf("둘째") != -1 || sn.val()[a].vacation.indexOf("2") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "셋째주") {
              if (sn.val()[a].vacation.indexOf("셋째") != -1 || sn.val()[a].vacation.indexOf("3") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "넷째주") {
              if (sn.val()[a].vacation.indexOf("넷째") != -1 || sn.val()[a].vacation.indexOf("4") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "다섯째주") {
              if (sn.val()[a].vacation.indexOf("다섯") != -1 || sn.val()[a].vacation.indexOf("5") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
          }
        }
      }
      if (this.area == "daegu") {
        for (var a in sn.val()) {
          if (sn.val()[a].addr.indexOf("대구") != -1) {
            this.martArray.push(sn.val()[a])
            if (this.whatWeek == "첫째주") {
              if (sn.val()[a].vacation.indexOf("첫째") != -1 || sn.val()[a].vacation.indexOf("1") != -1) {
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "둘째주") {
              console.log(this.dayy);
              if (sn.val()[a].vacation.indexOf("둘째") != -1 || sn.val()[a].vacation.indexOf("2") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "셋째주") {
              if (sn.val()[a].vacation.indexOf("셋째") != -1 || sn.val()[a].vacation.indexOf("3") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "넷째주") {
              if (sn.val()[a].vacation.indexOf("넷째") != -1 || sn.val()[a].vacation.indexOf("4") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "다섯째주") {
              if (sn.val()[a].vacation.indexOf("다섯") != -1 || sn.val()[a].vacation.indexOf("5") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
          }
        }
      }
      if (this.area == "ulsan") {
        for (var a in sn.val()) {
          if (sn.val()[a].addr.indexOf("울산") != -1) {
            this.martArray.push(sn.val()[a])
            if (this.whatWeek == "첫째주") {
              if (sn.val()[a].vacation.indexOf("첫째") != -1 || sn.val()[a].vacation.indexOf("1") != -1) {
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "둘째주") {
              console.log(this.dayy);
              if (sn.val()[a].vacation.indexOf("둘째") != -1 || sn.val()[a].vacation.indexOf("2") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "셋째주") {
              if (sn.val()[a].vacation.indexOf("셋째") != -1 || sn.val()[a].vacation.indexOf("3") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "넷째주") {
              if (sn.val()[a].vacation.indexOf("넷째") != -1 || sn.val()[a].vacation.indexOf("4") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "다섯째주") {
              if (sn.val()[a].vacation.indexOf("다섯") != -1 || sn.val()[a].vacation.indexOf("5") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
          }
        }
      }
      if (this.area == "busan") {
        for (var a in sn.val()) {
          if (sn.val()[a].addr.indexOf("부산") != -1) {
            this.martArray.push(sn.val()[a])
            if (this.whatWeek == "첫째주") {
              if (sn.val()[a].vacation.indexOf("첫째") != -1 || sn.val()[a].vacation.indexOf("1") != -1) {
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "둘째주") {
              console.log(this.dayy);
              if (sn.val()[a].vacation.indexOf("둘째") != -1 || sn.val()[a].vacation.indexOf("2") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "셋째주") {
              if (sn.val()[a].vacation.indexOf("셋째") != -1 || sn.val()[a].vacation.indexOf("3") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "넷째주") {
              if (sn.val()[a].vacation.indexOf("넷째") != -1 || sn.val()[a].vacation.indexOf("4") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "다섯째주") {
              if (sn.val()[a].vacation.indexOf("다섯") != -1 || sn.val()[a].vacation.indexOf("5") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
          }
        }
      }
      if (this.area == "gyeongnam") {
        for (var a in sn.val()) {
          if (sn.val()[a].addr.indexOf("경남") != -1) {
            this.martArray.push(sn.val()[a])
            if (this.whatWeek == "첫째주") {
              if (sn.val()[a].vacation.indexOf("첫째") != -1 || sn.val()[a].vacation.indexOf("1") != -1) {
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "둘째주") {
              console.log(this.dayy);
              if (sn.val()[a].vacation.indexOf("둘째") != -1 || sn.val()[a].vacation.indexOf("2") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "셋째주") {
              if (sn.val()[a].vacation.indexOf("셋째") != -1 || sn.val()[a].vacation.indexOf("3") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "넷째주") {
              if (sn.val()[a].vacation.indexOf("넷째") != -1 || sn.val()[a].vacation.indexOf("4") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "다섯째주") {
              if (sn.val()[a].vacation.indexOf("다섯") != -1 || sn.val()[a].vacation.indexOf("5") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
          }
        }

      }
      if (this.area == "jeonbuk") {
        for (var a in sn.val()) {
          if (sn.val()[a].addr.indexOf("전북") != -1) {
            this.martArray.push(sn.val()[a])
            if (this.whatWeek == "첫째주") {
              if (sn.val()[a].vacation.indexOf("첫째") != -1 || sn.val()[a].vacation.indexOf("1") != -1) {
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "둘째주") {
              console.log(this.dayy);
              if (sn.val()[a].vacation.indexOf("둘째") != -1 || sn.val()[a].vacation.indexOf("2") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "셋째주") {
              if (sn.val()[a].vacation.indexOf("셋째") != -1 || sn.val()[a].vacation.indexOf("3") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "넷째주") {
              if (sn.val()[a].vacation.indexOf("넷째") != -1 || sn.val()[a].vacation.indexOf("4") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "다섯째주") {
              if (sn.val()[a].vacation.indexOf("다섯") != -1 || sn.val()[a].vacation.indexOf("5") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
          }
        }
      }
      if (this.area == "gwangju") {
        for (var a in sn.val()) {
          if (sn.val()[a].addr.indexOf("광주") != -1) {
            this.martArray.push(sn.val()[a])
            if (this.whatWeek == "첫째주") {
              if (sn.val()[a].vacation.indexOf("첫째") != -1 || sn.val()[a].vacation.indexOf("1") != -1) {
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "둘째주") {
              if (sn.val()[a].vacation.indexOf("둘째") != -1 || sn.val()[a].vacation.indexOf("2") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "셋째주") {
              if (sn.val()[a].vacation.indexOf("셋째") != -1 || sn.val()[a].vacation.indexOf("3") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "넷째주") {
              if (sn.val()[a].vacation.indexOf("넷째") != -1 || sn.val()[a].vacation.indexOf("4") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "다섯째주") {
              if (sn.val()[a].vacation.indexOf("다섯") != -1 || sn.val()[a].vacation.indexOf("5") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
          }
        }
      }
      if (this.area == "jeonnam") {
        for (var a in sn.val()) {
          if (sn.val()[a].addr.indexOf("전남") != -1) {
            this.martArray.push(sn.val()[a])
            if (this.whatWeek == "첫째주") {
              if (sn.val()[a].vacation.indexOf("첫째") != -1 || sn.val()[a].vacation.indexOf("1") != -1) {
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "둘째주") {
              if (sn.val()[a].vacation.indexOf("둘째") != -1 || sn.val()[a].vacation.indexOf("2") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "셋째주") {
              if (sn.val()[a].vacation.indexOf("셋째") != -1 || sn.val()[a].vacation.indexOf("3") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "넷째주") {
              if (sn.val()[a].vacation.indexOf("넷째") != -1 || sn.val()[a].vacation.indexOf("4") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "다섯째주") {
              if (sn.val()[a].vacation.indexOf("다섯") != -1 || sn.val()[a].vacation.indexOf("5") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
          }
        }
      }
      if (this.area == "jeju") {
        for (var a in sn.val()) {
          if (sn.val()[a].addr.indexOf("제주") != -1) {
            this.martArray.push(sn.val()[a])
            if (this.whatWeek == "첫째주") {
              if (sn.val()[a].vacation.indexOf("첫째") != -1 || sn.val()[a].vacation.indexOf("1") != -1) {
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "둘째주") {
              if (sn.val()[a].vacation.indexOf("둘째") != -1 || sn.val()[a].vacation.indexOf("2") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "셋째주") {
              if (sn.val()[a].vacation.indexOf("셋째") != -1 || sn.val()[a].vacation.indexOf("3") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "넷째주") {
              if (sn.val()[a].vacation.indexOf("넷째") != -1 || sn.val()[a].vacation.indexOf("4") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
            }
            if (this.whatWeek == "다섯째주") {
              if (sn.val()[a].vacation.indexOf("다섯") != -1 || sn.val()[a].vacation.indexOf("5") != -1) {
                if (sn.val()[a].vacation.indexOf("일요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("월요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("화요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("수요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("목요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("금요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
                if (sn.val()[a].vacation.indexOf("토요일") != -1) {
                  if (this.dayy == '일요일') { this.dayoff = ['휴무', '영업', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '월요일') { this.dayoff = ['영업', '휴무', '영업', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '화요일') { this.dayoff = ['영업', '영업', '휴무', '영업', '영업', '영업', '영업']; }
                  if (this.dayy == '수요일') { this.dayoff = ['영업', '영업', '영업', '휴무', '영업', '영업', '영업']; }
                  if (this.dayy == '목요일') { this.dayoff = ['영업', '영업', '영업', '영업', '휴무', '영업', '영업']; }
                  if (this.dayy == '금요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '휴무', '영업']; }
                  if (this.dayy == '토요일') { this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '휴무']; }
                }
              } else {
                this.dayoff = ['영업', '영업', '영업', '영업', '영업', '영업', '영업'];
              }
              this.today = this.dayoff[0];
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
      this.firemain.child("favorite").child(newnametoinput).child(a).update({ "favorite": "true" });
      $('#blanktoyellow').attr('src', "./assets/imgs/046-버튼-PPT 5페이지의 우측 이미지 즐겨찾기 하트 버튼-노란 하트(즐겨찾기후).png")

      // $(function () {
      //   $('.blanktoyellow').click(function () {
      //     $('.blanktoyellow').attr('src', "./assets/imgs/046-버튼-PPT 5페이지의 우측 이미지 즐겨찾기 하트 버튼-노란 하트(즐겨찾기후).png")
      //   })
      // })

    }
    if (b == false) {
      console.log("false");
      this.firemain.child("favorite").child(newnametoinput).child(a).update({ "favorite": "false" });
      $('#yellowtoblank').attr('src', "./assets/imgs/045-버튼-PPT 5페이지의 우측 이미지 즐겨찾기 하트 버튼-블랭크 하트(즐겨찾기전).png")

      // $(function () {
      //   $('.yellowtoblank').click(function () {
      //     $('.yellowtoblank').attr('src', "./assets/imgs/045-버튼-PPT 5페이지의 우측 이미지 즐겨찾기 하트 버튼-블랭크 하트(즐겨찾기전).png")
      //   })
      // })
    }




  }


}
