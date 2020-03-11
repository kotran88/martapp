import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import * as $ from 'jquery';

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
  vacation: any;
  vacationArr = [];
  userarr = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
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
    console.log("this.dayy is " + this.dayy);
    // this.whatWeek = '둘째주';
    console.log("this.whatWeek is " + this.whatWeek);
    var w = prefixes[0 | date.getDate() / 7] + ' ' + days[date.getDay()];
    console.log(w);
  }

  theDate() {
    var datee = new Date,
      days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
      prefixes = ['첫째주', '둘째주', '셋째주', '넷째주', '다섯째주'];
    this.year = this.day.getFullYear();
    this.month = this.day.getMonth() + 1;
    this.date = this.day.getDate();
    this.dayOfweek = this.day.getDay();
    for (var i = 0; i < 7; i++) {
      console.log(i);
      var date = this.day.getDate() + i;
      var dow = this.dayOfweek++;
      console.log("dow is " + dow);
      console.log("date is " + date);
      console.log("this.dayOfweek is " + this.dayOfweek);
      if (this.dayOfweek >= 7) { this.dayOfweek = 0; }
      this.week.push({ "week": prefixes[0 | (date - 1) / 7], "day": date, "dayofweek": days[dow] });
    }
    console.log(this.week);
  }


  newfunction(name) {
    console.log(name);
    this.userId = "a2f05b91-956a-b480-3525-991002905558"
    console.log(this.area);
    this.firemain.child("mart").once("value", (sn) => {
      for (var a in sn.val()) {
        if (a == name) {
          if (this.area == "seoul") {
            var counting = 0;
            for (var b in sn.val()[a]) {

              if (sn.val()[a][b].addr.indexOf("서울") != -1 && sn.val()[a][b].addr.indexOf("서울대학로") == -1) {
                counting++;
                this.martArray.push(sn.val()[a][b]);
                this.vacationArr.push(sn.val()[a][b].vacation);
                this.vacation = sn.val()[a][b].vacation;
                this.vacationFunc(this.week, sn.val()[a][b], counting);
              }
            }

            console.log(this.martArray);
            console.log(this.week);


          }


          if (this.area == "gyeonggi") {
            for (var b in sn.val()[a]) {
              this.vacation = sn.val()[a][b].vacation;
              var counting = 0;
              if (sn.val()[a][b].addr.indexOf("경기") != -1) {
                counting++;
                this.martArray.push(sn.val()[a][b]);
                this.vacationArr.push(sn.val()[a][b].vacation);
                this.vacation = sn.val()[a][b].vacation;
                this.vacationFunc(this.week, sn.val()[a][b], counting);
              }
            }
          }
          if (this.area == "incheon") {
            for (var b in sn.val()[a]) {
              this.vacation = sn.val()[a][b].vacation;

              if (sn.val()[a][b].addr.indexOf("인천") != -1) {
                counting++;
                this.martArray.push(sn.val()[a][b]);
                this.vacationArr.push(sn.val()[a][b].vacation);
                this.vacation = sn.val()[a][b].vacation;
                this.vacationFunc(this.week, sn.val()[a][b], counting);
              }
            }
          }
          if (this.area == "gangwon") {
            for (var b in sn.val()[a]) {
              this.vacation = sn.val()[a][b].vacation;

              if (sn.val()[a][b].addr.indexOf("강원") != -1) {
                this.martArray.push(sn.val()[a][b]);
                this.vacation = sn.val()[a][b].vacation;
                counting++;
                this.martArray.push(sn.val()[a][b]);
                this.vacationArr.push(sn.val()[a][b].vacation);
                this.vacation = sn.val()[a][b].vacation;
                this.vacationFunc(this.week, sn.val()[a][b], counting);
              }
            }
          }
          if (this.area == "chungbuk") {
            for (var b in sn.val()[a]) {
              this.vacation = sn.val()[a][b].vacation;

              if (sn.val()[a][b].addr.indexOf("충북") != -1) {
                this.martArray.push(sn.val()[a][b]);
                this.vacation = sn.val()[a][b].vacation;
                counting++;
                this.martArray.push(sn.val()[a][b]);
                this.vacationArr.push(sn.val()[a][b].vacation);
                this.vacation = sn.val()[a][b].vacation;
                this.vacationFunc(this.week, sn.val()[a][b], counting);
              }
            }
          }
          if (this.area == "chungnam") {
            for (var b in sn.val()[a]) {
              this.vacation = sn.val()[a][b].vacation;

              if (sn.val()[a][b].addr.indexOf("충남") != -1) {
                this.martArray.push(sn.val()[a][b]);
                this.vacation = sn.val()[a][b].vacation;
                counting++;
                this.martArray.push(sn.val()[a][b]);
                this.vacationArr.push(sn.val()[a][b].vacation);
                this.vacation = sn.val()[a][b].vacation;
                this.vacationFunc(this.week, sn.val()[a][b], counting);
              }
            }
          }
          if (this.area == "jeonbuk") {
            for (var b in sn.val()[a]) {
              this.vacation = sn.val()[a][b].vacation;

              if (sn.val()[a][b].addr.indexOf("전북") != -1) {
                this.martArray.push(sn.val()[a][b]);
                this.vacation = sn.val()[a][b].vacation;
                counting++;
                this.martArray.push(sn.val()[a][b]);
                this.vacationArr.push(sn.val()[a][b].vacation);
                this.vacation = sn.val()[a][b].vacation;
                this.vacationFunc(this.week, sn.val()[a][b], counting);
              }
            }
          }
          if (this.area == "jeonnam") {
            for (var b in sn.val()[a]) {
              this.vacation = sn.val()[a][b].vacation;

              if (sn.val()[a][b].addr.indexOf("전남") != -1) {
                this.martArray.push(sn.val()[a][b]);
                this.vacation = sn.val()[a][b].vacation;
                counting++;
                this.martArray.push(sn.val()[a][b]);
                this.vacationArr.push(sn.val()[a][b].vacation);
                this.vacation = sn.val()[a][b].vacation;
                this.vacationFunc(this.week, sn.val()[a][b], counting);
              }
            }
          }
          if (this.area == "gwangju") {
            for (var b in sn.val()[a]) {
              this.vacation = sn.val()[a][b].vacation;

              if (sn.val()[a][b].addr.indexOf("광주") != -1) {
                this.martArray.push(sn.val()[a][b]);
                this.vacation = sn.val()[a][b].vacation;
                counting++;
                this.martArray.push(sn.val()[a][b]);
                this.vacationArr.push(sn.val()[a][b].vacation);
                this.vacation = sn.val()[a][b].vacation;
                this.vacationFunc(this.week, sn.val()[a][b], counting);
              }
            }
          }
          if (this.area == "daejeon") {
            for (var b in sn.val()[a]) {
              this.vacation = sn.val()[a][b].vacation;

              if (sn.val()[a][b].addr.indexOf("대전") != -1) {
                this.martArray.push(sn.val()[a][b]);
                this.vacation = sn.val()[a][b].vacation;
                counting++;
                this.martArray.push(sn.val()[a][b]);
                this.vacationArr.push(sn.val()[a][b].vacation);
                this.vacation = sn.val()[a][b].vacation;
                this.vacationFunc(this.week, sn.val()[a][b], counting);
              }
            }
          }
          if (this.area == "gyeongbuk") {
            for (var b in sn.val()[a]) {
              this.vacation = sn.val()[a][b].vacation;

              if (sn.val()[a][b].addr.indexOf("경북") != -1) {
                this.martArray.push(sn.val()[a][b]);
                this.vacation = sn.val()[a][b].vacation;
                counting++;
                this.martArray.push(sn.val()[a][b]);
                this.vacationArr.push(sn.val()[a][b].vacation);
                this.vacation = sn.val()[a][b].vacation;
                this.vacationFunc(this.week, sn.val()[a][b], counting);
              }
            }
          }
          if (this.area == "gyeongnam") {
            for (var b in sn.val()[a]) {
              this.vacation = sn.val()[a][b].vacation;

              if (sn.val()[a][b].addr.indexOf("경남") != -1) {
                this.martArray.push(sn.val()[a][b]);
                this.vacation = sn.val()[a][b].vacation;
                counting++;
                this.martArray.push(sn.val()[a][b]);
                this.vacationArr.push(sn.val()[a][b].vacation);
                this.vacation = sn.val()[a][b].vacation;
                this.vacationFunc(this.week, sn.val()[a][b], counting);
              }
            }
          }
          if (this.area == "busan") {
            for (var b in sn.val()[a]) {
              this.vacation = sn.val()[a][b].vacation;

              if (sn.val()[a][b].addr.indexOf("부산") != -1) {
                this.martArray.push(sn.val()[a][b]);
                this.vacation = sn.val()[a][b].vacation;
                counting++;
                this.martArray.push(sn.val()[a][b]);
                this.vacationArr.push(sn.val()[a][b].vacation);
                this.vacation = sn.val()[a][b].vacation;
                this.vacationFunc(this.week, sn.val()[a][b], counting);
              }
            }
          }
          if (this.area == "ulsan") {
            for (var b in sn.val()[a]) {
              this.vacation = sn.val()[a][b].vacation;

              if (sn.val()[a][b].addr.indexOf("울산") != -1) {
                this.martArray.push(sn.val()[a][b]);
                counting++;
                this.martArray.push(sn.val()[a][b]);
                this.vacationArr.push(sn.val()[a][b].vacation);
                this.vacation = sn.val()[a][b].vacation;
                this.vacationFunc(this.week, sn.val()[a][b], counting);
              }
            }
          }
          if (this.area == "jeju") {
            for (var b in sn.val()[a]) {
              this.vacation = sn.val()[a][b].vacation;

              if (sn.val()[a][b].addr.indexOf("제주") != -1) {
                this.martArray.push(sn.val()[a][b]);
                this.vacation = sn.val()[a][b].vacation;
                counting++;
                this.martArray.push(sn.val()[a][b]);
                this.vacationArr.push(sn.val()[a][b].vacation);
                this.vacation = sn.val()[a][b].vacation;
                this.vacationFunc(this.week, sn.val()[a][b], counting);
              }
            }
          }
        }
      }
    })
  }
  weekcheck(mart) {
    var returnvalue = "";
    if (mart.vacation.indexOf("월요") > -1) {
      returnvalue = "월요일";
    }
    if (mart.vacation.indexOf("화요") > -1) {
      returnvalue = "화요일";
    }
    if (mart.vacation.indexOf("수요") > -1) {
      returnvalue = "수요일";
    }
    if (mart.vacation.indexOf("목요") > -1) {
      returnvalue = "목요일";
    }
    if (mart.vacation.indexOf("금요") > -1) {
      returnvalue = "금요일";
    }
    if (mart.vacation.indexOf("토요") > -1) {
      returnvalue = "토요일";
    }
    if (mart.vacation.indexOf("일요") > -1) {
      returnvalue = "일요일";
    }
    return returnvalue
  }

  vacationFunc(v, mart, count) {

    console.log(v); //this.week
    console.log(mart); //db
    console.log(count); //count
    console.log("mart to change json");
    console.log(this.martArray)
    var counting = 0;
    var dayoffarray = [];
    for (var a in v) {
      counting++;
      if (counting == 1) {
        console.log("first is");
        console.log(v[a].week, v[a].day + "," + v[a].dayofweek)//오늘 날짜
      }
      console.log(v[a].week); //몇주?
      console.log(v[a].dayofweek);//요일?
      if (mart.vacation.indexOf("첫째") > -1) { //db.vacation에 '첫째'라는 글자가 있을 경우
        if (v[a].week.indexOf("첫째") > -1 && v[a].week.indexOf("둘째") > -1) { //this.week에 '첫째','둘째'라는 글자가 있을 경우
          var weekoff = this.weekcheck(this.martArray[count - 1]);
          console.log("off is : " + weekoff);
          console.log(weekoff + "1111,,," + v[a].dayofweek);
          if (weekoff == v[a].dayofweek) {
            dayoffarray.push("휴무")
          } else {
            dayoffarray.push("영업")
          }
        }
      }
      if (mart.vacation.indexOf("둘째") > -1) {
        if (v[a].week.indexOf("둘째") > -1 && v[a].week.indexOf("셋째") > -1) {
          var weekoff = this.weekcheck(this.martArray[count - 1])
          console.log("off is : " + weekoff)
          console.log(weekoff + "2222,,," + v[a].dayofweek);;
          if (weekoff == v[a].dayofweek) {
            dayoffarray.push("휴무")
          } else {
            dayoffarray.push("영업")
          }
        }
      }
      if (mart.vacation.indexOf("셋째") > -1) {
        if (v[a].week.indexOf("셋째") > -1 && v[a].week.indexOf("넷째") > -1) {
          var weekoff = this.weekcheck(this.martArray[count - 1])
          console.log("off is : " + weekoff);
          console.log(weekoff + "333,,," + v[a].dayofweek);
          if (weekoff == v[a].dayofweek) {
            dayoffarray.push("휴무")
          } else {
            dayoffarray.push("영업")
          }
        }
      }
      if (mart.vacation.indexOf("넷째") > -1) {
        // if(v[a].week.indexOf("넷째")>-1&&v[a].week.indexOf("다섯째")>-1){
        var weekoff = this.weekcheck(this.martArray[count - 1])
        console.log("off is : " + weekoff);
        console.log(weekoff + "444,,," + v[a].dayofweek);
        if (weekoff == v[a].dayofweek) {
          dayoffarray.push("휴무")
        } else {
          dayoffarray.push("영업")
        }
      }
      // }
      // if (mart.vacation.indexOf("다섯째") > -1) {
      //   var weekoff = this.weekcheck(this.martArray[count - 1])
      //   console.log("off is : " + weekoff);
      //   if (weekoff == v[a].dayofweek) {
      //     dayoffarray.push("휴무")
      //   } else {
      //     dayoffarray.push("영업")
      //   }
      // }


      this.martArray[count - 1].dayoffarray = dayoffarray;

      console.log(this.martArray);
      console.log("done")
      console.log(dayoffarray);
      this.today = dayoffarray[0];
    }
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

  favorite(a, idx) {
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
    console.log(a);//db
    console.log(idx);
    console.log(this.martArray[idx])
    console.log(!flag);
    var flag=this.martArray[idx].favorite; 
    if(flag!=true){
      console.log(flag);
      this.martArray[idx].favorite=true;
      this.firemain.child("users").child(this.userId).child("favorite").child(newnametoinput).child(a.key).update(this.martArray[idx]);
      console.log(this.martArray[idx]);
      const toast = this.toastCtrl.create({
        message: '첫 화면 "즐겨찾기"에 추가되었습니다.',
        duration: 2000,
      });
      toast.present();
    }
    else {
      flag=false;
      console.log(flag);
      this.martArray[idx].favorite=false;
      this.firemain.child("users").child(this.userId).child("favorite").child(newnametoinput).child(a.key).remove();
      const toast = this.toastCtrl.create({
        message: '삭제되었습니다.',
        duration: 2000,
      });
      toast.present();
    }
    
  }
}


