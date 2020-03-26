webpackJsonp([0],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MartinfoviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MartinfoviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MartinfoviewPage = /** @class */ (function () {
    function MartinfoviewPage(navCtrl, navParams, callNumber) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.id = "a2f05b91-956a-b480-3525-991002905558";
        this.firemain = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref();
        this.martinfo = [];
        this.today = new Date();
        this.date = new Date();
        this.logo = [];
        this.calendar = new Date();
        this.day = this.calendar.getDate();
        this.year = this.calendar.getFullYear();
        this.month = this.calendar.getMonth();
        this.firstDate = new Date(this.year, this.month, 1).getDay(); //첫날의 요일
        this.lastDate = new Date(this.year, this.month + 1, 0); //마지막 날의 요일
        this.dateArr = [];
        this.weekArr = [];
        this.dayoffArr = [];
        this.dayofweekCal = 0;
        this.offArr = [];
        this.martinfo = this.navParams.get("martinfo");
        console.log(this.martinfo);
        for (var i in this.martinfo) {
            if (i == "tel") {
                console.log(this.martinfo[i]);
            }
        }
        this.month = this.date.getMonth() + 1;
        this.getDaysOfMonth();
        this.firemain.child("users").child(this.id).once("value", function (sn) {
            for (var a in sn.val()) {
                console.log(a);
                console.log(sn.val()[a]);
                if (a == "favorite") {
                    console.log(sn.val()[a]);
                    for (var b in sn.val()[a]) {
                        if (b == "lotte") {
                            _this.logo.push({ "image": "./assets/imgs/009-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-롯데마트 CI.png", "name": "롯데마트", "flag": "lotte" });
                        }
                        if (b == "emart") {
                            _this.logo.push({ "image": ".assets/imgs/010-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-이마트 CI.png", "name": "이마트", "flag": "emart" });
                        }
                        if (b == "homeplus") {
                            _this.logo.push({ "image": "./assets/imgs/011-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-홈플러스 CI.png", "name": "홈플러스", "flag": "homeplus" });
                        }
                        if (b == "costco") {
                            _this.logo.push({ "image": "./assets/imgs/012-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-코스트코 CI.png", "name": "코스트코", "flag": "costco" });
                        }
                        if (b == "traders") {
                            _this.logo.push({ "image": "./assets/imgs/013-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-이마트 트레이더스 CI.png", "name": "이마트 트레이더스", "flag": "traders" });
                        }
                        if (b == "lottedep") {
                            _this.logo.push({ "image": "./assets/imgs/020-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-롯데백화점 CI.png", "name": "롯데백화점", "flag": "lottedep" });
                        }
                        if (b == "sinsaegae") {
                            _this.logo.push({ "image": "./assets/imgs/021-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-신세백화점 CI.png", "name": "신세계백화점", "flag": "sinsaegae" });
                        }
                        if (b == "hyundai") {
                            _this.logo.push({ "image": "./assets/imgs/022-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-현대백화점 CI.png", "name": "현대백화점", "flag": "hyundai" });
                        }
                        if (b == "lotteoutlet") {
                            _this.logo.push({ "image": "./assets/imgs/023-버튼-PPT 4페이지의 가운데 이미지의 아울렛별 로고-롯데아울렛 CI.png", "name": "롯데아울렛", "flag": "lotteoutlet" });
                        }
                    }
                }
            }
        });
        this.dayoff();
        console.log(this.offArr);
        console.log(this.daysInThisMonth);
        for (var j = 0; j < this.daysInThisMonth.length; j++) {
            for (var k = 0; k < this.offArr.length; k++) {
                if (this.daysInThisMonth[j] == this.offArr[k]) {
                    this.daysInThisMonth[j] = "i" + this.daysInThisMonth[j];
                }
            }
        }
        console.log(this.daysInThisMonth);
    }
    MartinfoviewPage.prototype.getDaysOfMonth = function () {
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array();
        this.currentMonth = this.date.getMonth() + 1;
        this.currentYear = this.date.getFullYear();
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (var j = 0; j < thisNumOfDays; j++) {
            this.daysInThisMonth.push(j + 1);
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        for (var k = 0; k < (6 - lastDayThisMonth); k++) {
            this.daysInNextMonth.push(k + 1);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        if (totalDays < 36) {
            for (var l = (7 - lastDayThisMonth); l < ((7 - lastDayThisMonth)); l++) {
                console.log(lastDayThisMonth);
                console.log(l);
                this.daysInNextMonth.push(l);
                console.log(this.daysInNextMonth);
            }
        }
    };
    MartinfoviewPage.prototype.calling = function () {
        var _this = this;
        console.log("aaa");
        console.log(this.martinfo);
        for (var i in this.martinfo) {
            if (i == "tel") {
                console.log(this.martinfo[i]);
                this.marttel = this.martinfo[i];
            }
        }
        setTimeout(function () {
            _this.callNumber.callNumber(_this.marttel, true)
                .then(function (res) { return console.log('Launched dialer!', res); })
                .catch(function (err) {
                console.log('Error launching dialer', err);
                _this.callNumber.callNumber(_this.marttel, true)
                    .then(function (res) { return console.log('Launched dialer!', res); }).catch(function (e) {
                    console.log(e);
                });
            });
        }, 1000);
    };
    MartinfoviewPage.prototype.map = function () {
        location.href = "http://naver.com";
        // window.open("http://naver.com", '_blank');
        console.log("map");
        console.log("hhhh");
    };
    MartinfoviewPage.prototype.truecheck = function (day1) {
        var day = day1 + "";
        if (day.indexOf("i") > -1) {
            return -1;
        }
        else {
            return 0;
        }
    };
    MartinfoviewPage.prototype.dayoff = function () {
        var dayofWeek = ['일', '월', '화', '수', '목', '금', '토'];
        for (var i in this.martinfo) {
            if (i == "vacation") {
                console.log(this.martinfo[i]);
                if (this.martinfo[i].indexOf("첫째") > -1 && this.martinfo[i].indexOf("일요일") > -1) {
                    this.offday = "10";
                    console.log("첫째주 일요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("첫째") > -1 && this.martinfo[i].indexOf("월요일") > -1) {
                    this.offday = "11";
                    console.log("첫째주 월요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("첫째") > -1 && this.martinfo[i].indexOf("화요일") > -1) {
                    this.offday = "12";
                    console.log("첫째주 화요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("첫째") > -1 && this.martinfo[i].indexOf("수요일") > -1) {
                    this.offday = "13";
                    console.log("첫째주 수요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("첫째") > -1 && this.martinfo[i].indexOf("목요일") > -1) {
                    this.offday = "14";
                    console.log("첫째주 목요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("첫째") > -1 && this.martinfo[i].indexOf("금요일") > -1) {
                    this.offday = "15";
                    console.log("첫째주 금요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("첫째") > -1 && this.martinfo[i].indexOf("토요일") > -1) {
                    this.offday = "16";
                    console.log("첫째주 토요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("둘째") > -1 && this.martinfo[i].indexOf("일요일") > -1) {
                    this.offday = "20";
                    console.log("둘째주 일요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("둘째") > -1 && this.martinfo[i].indexOf("월요일") > -1) {
                    this.offday = "21";
                    console.log("둘째주 월요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("둘째") > -1 && this.martinfo[i].indexOf("화요일") > -1) {
                    this.offday = "22";
                    console.log("둘째주 화요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("둘째") > -1 && this.martinfo[i].indexOf("수요일") > -1) {
                    this.offday = "23";
                    console.log("둘째주 수요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("둘째") > -1 && this.martinfo[i].indexOf("목요일") > -1) {
                    this.offday = "24";
                    console.log("둘째주 목요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("둘째") > -1 && this.martinfo[i].indexOf("금요일") > -1) {
                    this.offday = "25";
                    console.log("둘째주 금요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("둘째") > -1 && this.martinfo[i].indexOf("토요일") > -1) {
                    this.offday = "26";
                    console.log("둘째주 토요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("셋째") > -1 && this.martinfo[i].indexOf("일요일") > -1) {
                    this.offday = "30";
                    console.log("셋째주 일요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("셋째") > -1 && this.martinfo[i].indexOf("월요일") > -1) {
                    this.offday = "31";
                    console.log("셋째주 월요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("셋째") > -1 && this.martinfo[i].indexOf("화요일") > -1) {
                    this.offday = "32";
                    console.log("셋째주 화요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("셋째") > -1 && this.martinfo[i].indexOf("수요일") > -1) {
                    this.offday = "33";
                    console.log("셋째주 수요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("셋째") > -1 && this.martinfo[i].indexOf("목요일") > -1) {
                    this.offday = "34";
                    console.log("셋째주 목요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("셋째") > -1 && this.martinfo[i].indexOf("금요일") > -1) {
                    this.offday = "35";
                    console.log("셋째주 금요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("셋째") > -1 && this.martinfo[i].indexOf("토요일") > -1) {
                    this.offday = "36";
                    console.log("셋째주 토요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("넷째") > -1 && this.martinfo[i].indexOf("일요일") > -1) {
                    this.offday = "40";
                    console.log("넷째주 일요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("넷째") > -1 && this.martinfo[i].indexOf("월요일") > -1) {
                    this.offday = "41";
                    console.log("넷째주 월요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("넷째") > -1 && this.martinfo[i].indexOf("화요일") > -1) {
                    this.offday = "42";
                    console.log("넷째주 화요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("넷째") > -1 && this.martinfo[i].indexOf("수요일") > -1) {
                    this.offday = "43";
                    console.log("넷째주 수요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("넷째") > -1 && this.martinfo[i].indexOf("목요일") > -1) {
                    this.offday = "44";
                    console.log("넷째주 목요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("넷째") > -1 && this.martinfo[i].indexOf("금요일") > -1) {
                    this.offday = "45";
                    console.log("넷째주 금요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("넷째") > -1 && this.martinfo[i].indexOf("토요일") > -1) {
                    this.offday = "46";
                    console.log("넷째주 토요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("다섯째") > -1 && this.martinfo[i].indexOf("일요일") > -1) {
                    this.offday = "50";
                    console.log("다섯째주 일요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("다섯째") > -1 && this.martinfo[i].indexOf("월요일") > -1) {
                    this.offday = "51";
                    console.log("다섯째주 월요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("다섯째") > -1 && this.martinfo[i].indexOf("화요일") > -1) {
                    this.offday = "52";
                    console.log("다섯째주 화요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("다섯째") > -1 && this.martinfo[i].indexOf("수요일") > -1) {
                    this.offday = "53";
                    console.log("다섯째주 수요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("다섯째") > -1 && this.martinfo[i].indexOf("목요일") > -1) {
                    this.offday = "54";
                    console.log("다섯째주 목요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("다섯째") > -1 && this.martinfo[i].indexOf("금요일") > -1) {
                    this.offday = "55";
                    console.log("다섯째주 금요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
                if (this.martinfo[i].indexOf("다섯째") > -1 && this.martinfo[i].indexOf("토요일") > -1) {
                    this.offday = "56";
                    console.log("다섯째주 토요일 " + this.offday);
                    this.dayoffArr.push(this.offday);
                }
            }
        }
        console.log(this.dayoffArr);
        console.log(this.day);
        var count = 0;
        console.log(this.lastDate.getDate());
        for (var m = 1; m <= this.lastDate.getDate(); m++) {
            var date = this.calendar.getDate() + (m - this.calendar.getDate());
            this.dateArr.push(date);
            var week = Math.ceil((date) / 7);
            this.weekArr.push(week);
            if (count > 6) { // 0:일, 1:월, 2:화, 3:수, 4:목, 5:금, 6:토
                count = 0;
            }
            console.log(date + "일은 " + week + "주 " + dayofWeek[count] + "요일");
            // console.log(week+""+count);
            this.off = week + "" + count;
            console.log(this.off);
            for (var cnt = 0; cnt < this.dayoffArr.length; cnt++) {
                if (this.off.indexOf(this.dayoffArr[cnt]) > -1) {
                    console.log(this.off + "=" + this.dayoffArr[cnt]);
                    this.offweek = this.dayoffArr[cnt].substr(0, 1);
                    this.offdayofweek = this.dayoffArr[cnt].substr(1, 2);
                    console.log(this.offweek);
                    console.log(this.offdayofweek);
                    if (this.offweek == "1") {
                        this.weekCal = 1;
                        if (this.firstDate == 0) {
                            this.dayofweekCal = 0;
                        }
                        ;
                    }
                    if (this.offweek == "2") {
                        this.weekCal = 2;
                        if (this.firstDate == 0) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 8;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 9;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 10;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 11;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 12;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 13;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 14;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 1) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 7;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 8;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 9;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 10;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 11;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 12;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 13;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 2) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 6;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 7;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 8;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 9;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 10;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 11;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 12;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 3) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 5;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 6;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 7;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 8;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 9;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 10;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 11;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 4) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 4;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 5;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 6;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 7;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 8;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 9;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 10;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 5) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 3;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 4;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 5;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 6;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 7;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 8;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 9;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 6) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 2;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 3;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 4;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 5;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 6;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 7;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 8;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                    }
                    if (this.offweek == "3") {
                        this.weekCal = 3;
                        if (this.firstDate == 0) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 15;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 16;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 17;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 18;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 19;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 20;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 21;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 1) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 14;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 15;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 16;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 17;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 18;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 19;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 20;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 2) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 13;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 14;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 15;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 16;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 17;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 18;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 19;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 3) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 12;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 13;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 14;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 15;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 16;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 17;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 18;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 4) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 11;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 12;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 13;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 14;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 15;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 16;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 17;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 5) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 10;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 11;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 12;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 13;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 14;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 15;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 16;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 6) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 9;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 10;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 11;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 12;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 13;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 14;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 15;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                    }
                    if (this.offweek == "4") {
                        this.weekCal = 4;
                        if (this.firstDate == 0) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 22;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 23;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 24;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 25;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 26;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 27;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 28;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 1) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 21;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 22;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 23;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 24;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 25;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 26;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 27;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 2) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 20;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 21;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 22;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 23;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 24;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 25;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 26;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 3) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 19;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 20;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 21;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 22;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 23;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 24;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 25;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 4) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 18;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 19;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 20;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 21;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 22;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 23;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 24;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 5) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 17;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 18;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 19;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 20;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 21;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 22;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 23;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 6) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 16;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 17;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 18;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 19;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 20;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 21;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 22;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                    }
                    if (this.offweek == "5") {
                        this.weekCal = 5;
                        if (this.firstDate == 0) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 29;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 30;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 31;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 1) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 28;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 29;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 30;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 31;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 2) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 27;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 28;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 29;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 30;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 31;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 3) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 26;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 27;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 28;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 29;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 30;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 31;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 4) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 25;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 26;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 27;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 28;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 29;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 30;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 31;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 5) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 24;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 25;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 26;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 27;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 28;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 29;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 30;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                        if (this.firstDate == 6) {
                            if (this.offdayofweek == 0) {
                                this.dayofweekCal = this.firstDate + 23;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 1) {
                                this.dayofweekCal = this.firstDate + 24;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 2) {
                                this.dayofweekCal = this.firstDate + 25;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 3) {
                                this.dayofweekCal = this.firstDate + 26;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 4) {
                                this.dayofweekCal = this.firstDate + 27;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 5) {
                                this.dayofweekCal = this.firstDate + 28;
                                this.offArr.push(this.dayofweekCal);
                            }
                            if (this.offdayofweek == 6) {
                                this.dayofweekCal = this.firstDate + 29;
                                this.offArr.push(this.dayofweekCal);
                            }
                        }
                        ;
                    }
                    console.log("휴무일은 " + this.weekCal + "주 " + dayofWeek[this.offdayofweek] + "요일");
                    console.log("휴무일은 " + this.weekCal + "주 " + this.dayofweekCal + "일");
                    console.log(this.offArr);
                }
            }
            count++;
        }
    };
    MartinfoviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-martinfoview',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/martinfoview/martinfoview.html"*/'<ion-header>\n    <ion-navbar>\n        <div style="text-align: center;" *ngIf="martinfo.name.indexOf(\'롯데마트\')>-1">\n            <img src="./assets/imgs/009-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-롯데마트 CI.png" class="logoimage " style="height:40px; margin-right: 10px; " alt=" ">\n            <a style="margin:3px; font-size:17px; font-weight: bold; color: #808080;">롯데마트</a>\n        </div>\n        <div style="text-align: center;" *ngIf="martinfo.name.indexOf(\'이마트\')>-1&&martinfo.name.indexOf(\'트레이더스\')==-1">\n            <img src="./assets/imgs/010-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-이마트 CI.png" class="logoimage " style="height:40px; margin-right: 10px; " alt=" ">\n            <a style="margin:3px; font-size:17px; font-weight: bold; color: #808080;">이마트</a>\n        </div>\n        <div style="text-align: center;" *ngIf="martinfo.name.indexOf(\'홈플러스\')>-1" (click)="martview(i)">\n            <img src="./assets/imgs/011-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-홈플러스 CI.png" class="logoimage " style="height:40px; margin-right: 10px; " alt=" ">\n            <a style="margin:3px; font-size:17px; color: #808080;">홈플러스</a>\n        </div>\n        <div style="text-align: center;" *ngIf="martinfo.name.indexOf(\'코스트코\')>-1" (click)="martview(i)">\n            <img src="./assets/imgs/012-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-코스트코 CI.png" class="logoimage " style="height:40px; margin-right: 10px; " alt=" ">\n            <a style="margin:3px; font-size:17px; color: #808080;">코스트코</a>\n        </div>\n        <div style="text-align: center;" *ngIf="martinfo.name.indexOf(\'이마트트레이더스\')>-1" (click)="martview(i)">\n            <img src="./assets/imgs/013-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-이마트 트레이더스 CI.png" class="logoimage " style="height:40px; margin-right: 10px; " alt=" ">\n            <a style="margin:3px; font-size:17px; color: #808080;">이마트트레이더스</a>\n        </div>\n        <div style="text-align: center;" *ngIf="martinfo.name.indexOf(\'롯데백화점\')>-1" (click)="martview(i)">\n            <img src="./assets/imgs/020-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-롯데백화점 CI.png" class="logoimage " style="height:40px; margin-right: 10px; " alt=" ">\n            <a style="margin:3px; font-size:17px; color: #808080;">롯데백화점</a>\n        </div>\n        <div style="text-align: center;" *ngIf="martinfo.name.indexOf(\'신세계\')>-1" (click)="martview(i)">\n            <img src="./assets/imgs/021-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-신세백화점 CI.png" class="logoimage " style="height:40px; margin-right: 10px; " alt=" ">\n            <a style="margin:3px; font-size:17px; color: #808080;">신세계백화점</a>\n        </div>\n        <div style="text-align: center;" *ngIf="martinfo.name.indexOf(\'현대백화점\')>-1" (click)="martview(i)">\n            <img src="./assets/imgs/022-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-현대백화점 CI.png" class="logoimage " style="height:40px; margin-right: 10px; " alt=" ">\n            <a style="margin:3px; font-size:17px; color: #808080;">현대백화점</a>\n        </div>\n        <div style="text-align: center;" *ngIf="martinfo.name.indexOf(\'롯데 아울렛\')>-1" (click)="martview(i)">\n            <img src="./assets/imgs/023-버튼-PPT 4페이지의 가운데 이미지의 아울렛별 로고-롯데아울렛 CI.png" class="logoimage " style="height:40px; margin-right: 10px; " alt=" ">\n            <a style="margin:3px; font-size:17px; color: #808080;">롯데아울렛</a>\n        </div>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div style="padding-top:20px; padding-left:20px; margin-bottom:10px; ">\n        <span style="font-weight: bold; font-size:18px; color:#808080 ">{{martinfo.storename}}</span>\n    </div>\n    <table class="tableStyle ">\n        <tbody>\n            <tr>\n                <p style="color:black; font-weight: normal; font-size:16px; text-align: left; margin:3px; ">1. 정기 휴무일 : {{martinfo.vacation}}</p>\n            </tr>\n            <tr>\n                <p style="color:black; font-weight: normal; font-size:16px; text-align: left; margin:3px; ">2. 대표번호 : {{martinfo.tel}}</p>\n            </tr>\n            <tr>\n                <p style="color:black; font-weight: normal; font-size:16px; text-align: left; margin:3px; ">3. 위치 : {{martinfo.addr}}</p>\n            </tr>\n            <tr>\n                <p style="color:black; font-weight: normal; font-size:16px; text-align: left; margin:3px; ">4. 영업시간 : {{martinfo.optime}}</p>\n            </tr>\n\n        </tbody>\n    </table>\n    <div style="margin-left:auto; margin-right:auto; text-align: center; ">\n        <button style="text-align:center; width:40%; letter-spacing: 3px; font-size:15px; background-color: #71E8E8; border-radius: 5px; " (click)="calling() "><img src="./assets/imgs/048-버튼-PPT 8페이지의 가운데 이미지의 전화걸기-수화기.png" style="width:20%; margin-right:3px; ">전화걸기</button>\n        <button style="text-align:center; width:40%; letter-spacing: 3px; font-size:15px; background-color: #71E8E8; border-radius: 5px; " (click)="map() "><img src="./assets/imgs/049-버튼-PPT 8페이지의 가운데 이미지의 지도 확인-지도.png" style="width:20%; margin-right:3px; ">지도확인</button>\n    </div>\n    <div class="calendar-body ">\n        <ion-grid>\n            <ion-row class="calendar-month ">\n                {{month}}월\n            </ion-row>\n            <ion-row class="calendar-weekday ">\n                <ion-col style="color:red ">일</ion-col>\n                <ion-col>월</ion-col>\n                <ion-col>화</ion-col>\n                <ion-col>수</ion-col>\n                <ion-col>목</ion-col>\n                <ion-col>금</ion-col>\n                <ion-col style="color:blue ">토</ion-col>\n            </ion-row>\n            <ion-row class="calendar-date ">\n                <ion-col col-1 *ngFor="let day of daysInThisMonth">\n                    <span class="currentDate " *ngIf="( currentDate===day && today.getMonth()+1===currentMonth && today.getFullYear()===currentYear ) ">{{day}}</span>\n                    <span class="otherDate" style="color:red" *ngIf="truecheck(day)==-1">{{day.substring(1)}}</span>\n                    <span class="otherDate" *ngIf="truecheck(day)==0&&( currentDate !=day && today.getMonth()+1===currentMonth && today.getFullYear()===currentYear );">{{day}}</span>\n                </ion-col>\n                <ion-col col-1 *ngFor="let nextDay of daysInNextMonth " class="next-month">{{nextDay}}</ion-col>\n            </ion-row>\n\n        </ion-grid>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/martinfoview/martinfoview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */]])
    ], MartinfoviewPage);
    return MartinfoviewPage;
}());

//# sourceMappingURL=martinfoview.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritemodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FavoritemodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritemodalPage = /** @class */ (function () {
    function FavoritemodalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavoritemodalPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    FavoritemodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritemodalPage');
    };
    FavoritemodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favoritemodal',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/favoritemodal/favoritemodal.html"*/'<ion-content style="background-color: #00bbb2;">\n    <ion-row>\n        <ion-col col-10 style="margin-left:auto; margin-right:auto; text-align: center;">\n            <span style="font-size:21px; font-weight: 900; text-align: center;">\n        <br><br><br>앱의 원활한 구동을 위하여<br>(속도, 데이터, 배터리 절약)<br><br>"즐겨 찾기 매장"은<br>최대 20곳 까지 가능합니다.<br><br>불필요한 곳을 삭제 후<br><br>"즐겨찾기"를 추가해주세요.<br><br>노란 하트를 다시 터치하시면<br><br>"즐겨찾기에서 삭제"됩니다.<br><br>\n    </span>\n        </ion-col>\n\n    </ion-row>\n    <button (click)="goBack()" style="background-color: #00bbb2; opacity: 0.8; margin-left:70%; font-size:21px; font-weight: 900;">닫기</button>\n\n\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/favoritemodal/favoritemodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FavoritemodalPage);
    return FavoritemodalPage;
}());

//# sourceMappingURL=favoritemodal.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 225;

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddshopingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_speech_recognition__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddshopingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddshopingPage = /** @class */ (function () {
    function AddshopingPage(speechRecognition, navCtrl, navParams, alertCtrl, toastCtrl) {
        this.speechRecognition = speechRecognition;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.totalnumber = 0;
        this.flag = false;
        this.firemain = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref();
        this.addinglist = [];
        this.sum = 0;
        this.printsum = 0;
        this.flagInput = false;
        this.nextdirectory = this.firemain.child("id");
        this.a = this.navParams.get("obj");
        this.id = this.navParams.get("id");
        this.title = this.navParams.get("title");
        this.value = this.navParams.get("flag");
        console.log("this.flag:" + this.value);
        this.key = this.navParams.get("key");
        var thisday = new Date();
        thisday.toLocaleString('ko-KR', { hour: 'numeric', minute: 'numeric', hour12: true });
        this.month = thisday.getMonth() + 1;
        this.date = thisday.getDate();
        var hour = thisday.getHours();
        var minute = thisday.getMinutes();
        this.fullyear = thisday.getFullYear();
        var second = thisday.getSeconds();
        console.log("this is the day");
        console.log("title " + this.title + " obj " + this.a + " id " + this.id + " value " + this.value);
        // new Date().toString("hh:mm tt")
        console.log(thisday);
        console.log(this.month + 1);
        console.log(this.date);
        console.log((hour) + "시");
        console.log(minute);
        console.log(this.fullyear);
        this.nowtime = "" + (this.month) + "월" + this.date + "일" + (hour) + "시" + minute + "분";
    }
    AddshopingPage.prototype.formatNumber = function (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };
    AddshopingPage.prototype.add = function () {
        console.log(this.adding);
        if (this.price < 1 || this.price > 99999999) {
            this.price = 1;
            var toast = this.toastCtrl.create({
                message: '단가는 99,999,999원까지 입력 가능합니다.',
                duration: 2000,
            });
            toast.present();
        }
        if (this.price == "") {
            this.price = 1;
        }
        if (this.quantity == "") {
            this.quantity = 1;
        }
        this.addinglist.push({ "name": this.adding, "checked": false, "price": this.price, "quantity": this.quantity });
        this.totalnumber = this.addinglist.length;
        this.addprice();
        this.adding = "";
        this.price = "";
        this.quantity = "";
    };
    AddshopingPage.prototype.addprice = function () {
        /*가격받아오기*/
        console.log(this.price);
        console.log(this.addinglist);
        this.sum += Number(this.price) * Number(this.quantity);
        this.printsum = this.formatNumber(this.sum);
        console.log(this.sum);
        console.log(this.printsum);
    };
    AddshopingPage.prototype.priceandquantity = function () {
        this.flagInput = true;
        this.price = "";
        this.quantity = "";
    };
    AddshopingPage.prototype.cancel = function () {
        this.flagInput = false;
    };
    AddshopingPage.prototype.addValue = function (v) {
        console.log(v);
        var count = 0;
        console.log(v.checked);
        console.log(this.addinglist);
        for (var i = 0; i < this.addinglist.length; i++) {
            if (this.addinglist[i].checked == true) {
                count++;
            }
        }
        this.selected = count;
    };
    AddshopingPage.prototype.save = function () {
        var _this = this;
        console.log("addshoping saving....");
        this.flag = true;
        this.flagInput = false;
        var alert = this.alertCtrl.create({
            title: '작성 중이던 목록을 저장할까요?',
            buttons: [
                {
                    text: '아니요',
                    role: 'cancel',
                    handler: function (data) {
                        _this.firemain.child("users").child(_this.id).child(_this.value).child(_this.title).remove().then(function () {
                            console.log("Cancel");
                        });
                    }
                },
                {
                    text: '예',
                    handler: function (data) {
                        console.log(_this.addinglist);
                        console.log(_this.adding);
                        console.log(_this.id);
                        console.log(_this.key);
                        console.log(_this.value);
                        console.log(_this.title);
                        if (_this.addinglist.length == 0) {
                            window.alert("목록을 입력해주세요.");
                            _this.add();
                        }
                        else {
                            _this.firemain.child("users").child(_this.id).child(_this.value).child(_this.title).child(_this.key).update({ "time": _this.nowtime, "flag": "entered", "key": _this.key });
                            _this.firemain.child("users").child(_this.id).child(_this.value).child(_this.title).child(_this.key).child("list").update(_this.addinglist);
                            window.alert("저장되었습니다.");
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    AddshopingPage.prototype.goBack = function () {
        if (this.addinglist.length == 0) {
            this.firemain.child("users").child(this.id).child(this.value).child(this.title).remove().then(function () {
                console.log("Cancel");
            });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
    };
    AddshopingPage.prototype.speeching = function () {
        var options = {
            "language": "ko-KR",
            "matches": 1,
            "prompt": "평소 말하는 것처럼 말해주세요",
            "showPopup": true,
            "showPartial": true
        };
        // Check feature available
        this.speechRecognition.isRecognitionAvailable()
            .then(function (available) { return console.log(available); }).catch(function (e) {
            console.log(e);
        });
        // Start the recognition process
        this.speechRecognition.startListening(options)
            .subscribe(function (matches) { return console.log(matches); }, function (onerror) { return console.log('error:', onerror); });
        // Stop the recognition process (iOS only)
        this.speechRecognition.stopListening();
        // Get the list of supported languages
        this.speechRecognition.getSupportedLanguages()
            .then(function (languages) { return console.log(languages); }, function (error) { return console.log(error); });
        // Check permission
        this.speechRecognition.hasPermission()
            .then(function (hasPermission) { return console.log(hasPermission); });
        // Request permissions
        this.speechRecognition.requestPermission()
            .then(function () { return console.log('Granted'); }, function () { return console.log('Denied'); });
    };
    AddshopingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddshopingPage');
    };
    AddshopingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addshoping',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/addshoping/addshoping.html"*/'<!--\n  Generated template for the AddshopingPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n    <ion-navbar>\n        <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n</ion-header> -->\n<ion-content>\n    <div style="background-color: #71E8E8; display:flex;">\n        <button class="goback" (click)="goBack()"><img src="./assets/imgs/064-버튼-PPT 19페이지의  우측 이미지-뒤로가기 화살표.png" style="width:30px; margin:5px;" alt=""></button>\n        <span style="color:white; font-size:18px; font-weight: 900; margin-top:11px; margin-left:10px;">{{title}}</span>\n    </div>\n    <ion-item-divider color="light" style="height: 40px;"><img src="{{img}}" style="width:60px; margin-right:10px;">\n        <img *ngIf="value==\'mart\'" src="./assets/imgs/079-버튼-PPT 27페이지의 가운데 이미지-카트(마트).png" style="width:30px;" alt="">\n        <img *ngIf="value==\'dep\'" src="./assets/imgs/080-버튼-PPT 27페이지의 가운데 이미지-쇼핑백(백화점).png" style="width:30px;" alt="">\n        <img *ngIf="value==\'outlet\'" src="./assets/imgs/081-버튼-PPT 27페이지의 가운데 이미지-보석+구두(아울렛).png" style="width:30px;" alt="">\n        <img *ngIf="value==\'dep\'" src="./assets/imgs/081-버튼-PPT 27페이지의 가운데 이미지-etc(기타).png" style="width:30px;" alt="">\n\n        <span style="color:rgb(88, 189, 207); font-size:15px; font-weight: bold;">\n            <!--{{nowtime}}-->\n            {{fullyear}}년 {{month}}월 {{date}}일\n        </span>\n        <button class="saveButton" (click)="save()">저장</button>\n    </ion-item-divider>\n\n    <ion-row style="margin-top:6px; margin-left:auto; margin-right:auto; background-color:rgb(194, 243, 250); width:80%;border-radius: 6px;">\n        <ion-col col-8>\n            <span *ngIf="flag==false" style="color: #42B8B8; font-size:15px; font-weight: 900;">{{totalnumber}}</span>\n            <span *ngIf="flag==true" style="color: #42B8B8; font-size:15px; font-weight: 900;">{{totalnumber}}개 중 {{selected}}개 구입</span>\n\n        </ion-col>\n        <ion-col col-4>\n            <span style="color: #42B8B8; font-size:15px; font-weight: 900;">₩{{printsum}}</span>\n        </ion-col>\n    </ion-row>\n    <div class="main" *ngIf="addinglist.length!=0">\n        <ion-item *ngFor="let att of addinglist; let idx = index">\n            <ion-icon *ngIf="flag==false" name="close"></ion-icon>\n            <ion-checkbox [(ngModel)]="att.checked" style="z-index: 999999;" (ionChange)="addValue($event)" *ngIf="flag==true" color="dark" slot="start"></ion-checkbox>\n            <ion-input style="width: 20%;float: left;" placeholder="상품명" [(ngModel)]="addinglist[idx].name"></ion-input>\n            <ion-input style="width: 20%;float: right;" placeholder="수량" [(ngModel)]="addinglist[idx].quantity"></ion-input>\n            <ion-input style="width: 20%;float: right;" placeholder="가격" [(ngModel)]="addinglist[idx].price"></ion-input>\n        </ion-item>\n    </div>\n    <div style="margin-left:10px; position: absolute;bottom: 70px;width: 100%;" class="bottom">\n        <ion-input *ngIf="flag!=true" style="color:#808080; width: 63%; border-bottom-color:rgb(74, 190, 190); border-bottom: solid 1px;float: left;" [(ngModel)]="adding" placeholder="품목을 입력하세요."></ion-input>\n        <button *ngIf="flag!=true" style="height: 3.5rem;background: transparent;border-radius: 7px;margin-top: 5px;margin-left: 10px;" (click)="speeching()">\n            <img src="./assets/imgs/086-버튼-PPT 31페이지의 가운데 이미지-녹음 마이크.png" style="width:30px;" alt="">\n        </button>\n        <button *ngIf="flag!=true" style="height: 40px;background-color:#71E8E8;border-radius: 7px;margin-top: 5px;margin-left: 3px;" (click)="add()">추가하기</button>\n        <div *ngIf="flag!=true&&flagInput==false" class="inputprice">\n            <img *ngIf="flag!=true&&flagInput==false" src="./assets/imgs/084-버튼-PPT 31페이지의 가운데 이미지-점3개-회전1단계(시작).png " style="width:30px; " alt=" ">\n            <span *ngIf="flag!=true&&flagInput==false" style="color:rgb(74, 190, 190); font-size:14px; font-weight: bold;" (click)="priceandquantity()">가격 및 수량도 입력하기</span>\n\n        </div>\n        <div>\n            <button *ngIf="flagInput!=false" style="height: 3.5rem;background-color:#71E8E8;border-radius: 7px; margin-top: 3px;margin-left: 10px;" (click)="cancel()">상세취소</button>\n            <!-- <ion-input *ngIf="flagInput!=false" style="color:#808080; width: 34%; height: 3.5rem; border-bottom: solid 1px; float: left; margin-right: 2px; margin-left:2px;" [(ngModel)]="quantity" placeholder="수량"></ion-input> -->\n            <ion-select [(ngModel)]="number" *ngIf="flagInput!=false" style="color:#808080; width: 34%; height: 4rem; border-bottom: solid 1px; float: left; margin-right: 2px; margin-left:2px;" [(ngModel)]="quantity" placeholder="수량">\n                <ion-option>1</ion-option>\n                <ion-option>2</ion-option>\n                <ion-option>3</ion-option>\n                <ion-option>4</ion-option>\n                <ion-option>5</ion-option>\n                <ion-option>6</ion-option>\n                <ion-option>7</ion-option>\n\n            </ion-select>\n\n            <ion-input *ngIf="flagInput!=false" style="color:#808080; width: 34%; height: 4rem; border-bottom: solid 1px; float: left; margin-left: 2px; margin-right:5px;" [(ngModel)]="price" placeholder="가격"></ion-input>\n        </div>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/addshoping/addshoping.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_speech_recognition__["a" /* SpeechRecognition */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], AddshopingPage);
    return AddshopingPage;
}());

//# sourceMappingURL=addshoping.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewshoppinglistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ViewshoppinglistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewshoppinglistPage = /** @class */ (function () {
    function ViewshoppinglistPage(navParam, navCtrl, navParams, iab, alertCtrl, admobFree, toastCtrl, modal, viewCtrl) {
        this.navParam = navParam;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.admobFree = admobFree;
        this.toastCtrl = toastCtrl;
        this.modal = modal;
        this.viewCtrl = viewCtrl;
        this.onPressRelease = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.totalnumber = 0;
        this.flag = false;
        this.firemain = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref();
        this.addinglist = [];
        this.sum = 0;
        this.printsum = 0;
        this.flagInput = false; //가격 및 수량도 입력하기 버튼을 위한 boolean형 변수
        this.count = 0;
        this.allbuy = false;
        this.number = [];
        this.srct = {
            text: '',
            url: ''
        };
        this.delflag1 = false;
        this.delflag2 = false;
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
        thisday.toLocaleString('ko-KR', { hour: 'numeric', minute: 'numeric', hour12: true });
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
        __WEBPACK_IMPORTED_MODULE_4_jquery__(document).ready(function () {
            console.log("ready!");
        });
        for (var i = 1; i <= 50; i++) {
            this.number.push({ "count": i });
        }
        console.log(this.number);
    }
    // closeFab(fab:FabContainer){
    //   fab.close();
    // }
    ViewshoppinglistPage.prototype.pressed = function () {
        console.log("pressed");
    };
    ViewshoppinglistPage.prototype.touchstart = function () {
        console.log("touchstart");
        this.pressflag = true;
    };
    ViewshoppinglistPage.prototype.active = function () {
        console.log("active");
    };
    ViewshoppinglistPage.prototype.released = function () {
        // window.alert("released");
        // console.log("releaseddddd"+this.pressflag);
        // if(this.pressflag==true){
        //   window.alert("released2")
        // this.navCtrl.push(AddquestionPage,{"home":this.home,"first":this.firstvalue,"value":this.value,"flag:":"modify","array":v})
        // }
        this.pressflag = false;
    };
    /*숫자에 콤마 찍기*/
    ViewshoppinglistPage.prototype.formatNumber = function (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };
    ViewshoppinglistPage.prototype.addprice = function () {
        var _this = this;
        /*가격받아오기*/
        this.firemain.child("users").child(this.id).child(this.shop).child(this.title).child(this.key).child("list").once("value", function (snap) {
            for (var a = 0; a < snap.val().length; a++) {
                console.log(snap.val()[a]);
                console.log(Number(snap.val()[a].quantity) * Number(snap.val()[a].price));
                console.log(_this.sum);
                _this.sum += Number(snap.val()[a].quantity) * Number(snap.val()[a].price);
                _this.printsum = _this.formatNumber(_this.sum);
            }
            console.log(_this.sum);
            console.log(_this.printsum);
        });
    };
    /*check 여부 DB 불러오기 */
    ViewshoppinglistPage.prototype.checkedbuy = function () {
        var _this = this;
        var count = 0;
        this.firemain.child("users").child(this.id).child(this.shop).child(this.title).child(this.key).child("list").once("value", function (snap) {
            for (var a = 0; a < snap.val().length; a++) {
                console.log(snap.val()[a]);
                console.log(snap.val()[a].checked);
                if (snap.val()[a].checked == true) {
                    count++;
                    console.log(count);
                }
            }
            _this.selected = count;
            console.log(_this.selected);
        });
    };
    /*새로고침*/
    ViewshoppinglistPage.prototype.refreshname = function () {
        var _this = this;
        this.a.list = [];
        var sum = 0;
        this.firemain.child("users").child(this.id).child(this.shop).child(this.title).child(this.key).child("list").once("value", function (snap) {
            for (var a = 0; a < snap.val().length; a++) {
                if (snap.val()[a].name = null) {
                    snap.val()[a].name = "-";
                }
                console.log(snap.val()[a].name, snap.val()[a].checked, snap.val()[a].price, snap.val()[a].quantity);
                sum += Number(snap.val()[a].quantity) * Number(snap.val()[a].price); //가격 다시 받기
                _this.printsum = _this.formatNumber(sum);
                _this.a.list.push({ "name": snap.val()[a].name, "checked": snap.val()[a].checked, "price": snap.val()[a].price, "quantity": snap.val()[a].quantity });
            }
            console.log(sum);
        });
    };
    ViewshoppinglistPage.prototype.add = function () {
        console.log(this.a.list);
        if (this.price < 1 && this.price > 99999999) {
            this.price = 1;
            var toast = this.toastCtrl.create({
                message: '단가는 99,999,999원까지 입력 가능합니다.',
                duration: 2000,
            });
            toast.present();
        }
        if (this.price == "") {
            this.price = 1;
        }
        if (this.quantity == "") {
            this.quantity = 1;
        }
        this.a.list.push({ "name": this.adding, "checked": false, "price": this.price, "quantity": this.quantity });
        this.totalnumber = this.a.list.length;
        this.adding = "";
        this.price = "";
        this.quantity = "";
    };
    /*가격 및 수량도 입력하기*/
    ViewshoppinglistPage.prototype.priceandquantity = function () {
        this.flagInput = true;
    };
    /*취소버튼*/
    ViewshoppinglistPage.prototype.cancel = function () {
        this.flagInput = false;
    };
    ViewshoppinglistPage.prototype.addValue = function (v) {
        var count = 0;
        console.log(v);
        console.log(v.checked);
        console.log(this.a.list);
        console.log(this.a.list.length);
        for (var i = 0; i < this.a.list.length; i++) {
            if (this.a.list[i].checked == true) {
                count++;
                console.log(count);
            }
        }
        this.selected = count;
        console.log(this.a.title);
        if (this.selected == this.a.list.length) {
            this.allbuy = true;
            var toast = this.toastCtrl.create({
                message: this.a.title + " " + this.a.list.length + ' 품목 구입 완료 되었습니다.',
                duration: 2000,
            });
            toast.present();
        }
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
            this.a.list.push(unchecked[i]);
        }
        for (var i = 0; i < checked.length; i++) {
            this.a.list.push(checked[i]);
        }
        console.log(this.a.list);
    };
    ViewshoppinglistPage.prototype.save = function () {
        var _this = this;
        this.flag = false;
        this.flagInput = false;
        var alert = this.alertCtrl.create({
            title: '작성 중이던 목록을 저장할까요?',
            buttons: [
                {
                    text: '아니요',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '예',
                    handler: function (data) {
                        for (var v = 0; v < _this.a.list.length; v++) {
                            console.log(_this.a.list[v]);
                            console.log(_this.a.list[v].name);
                            if (_this.a.list[v].name == "") {
                                window.alert("목록을 입력해주세요");
                            }
                            else {
                                _this.firemain.child("users").child(_this.id).child(_this.shop).child(_this.title).child(_this.key).update({ "time": _this.nowtime, "flag": "entered", "key": _this.key });
                                _this.firemain.child("users").child(_this.id).child(_this.shop).child(_this.title).child(_this.key).child("list").update(_this.a.list);
                                _this.refreshname();
                                _this.showToastWithCloseButton();
                                _this.checkedbuy();
                            }
                        }
                        console.log(_this.a.list);
                        console.log(_this.shop);
                    }
                }
            ]
        });
        alert.present();
    };
    /*수정*/
    ViewshoppinglistPage.prototype.insertData = function (fab) {
        this.flag = true;
        this.closeFab(fab);
    };
    /*삭제*/
    ViewshoppinglistPage.prototype.delete = function (fab) {
        this.delflag1 = true;
        this.flag = true;
        console.log(this.delflag1);
        var toast = this.toastCtrl.create({
            message: '삭제를 원하시는 품목을 눌러주세요.',
            duration: 2000,
        });
        toast.present();
    };
    ViewshoppinglistPage.prototype.del = function (name) {
        var _this = this;
        this.delflag2 = true;
        console.log(name);
        // this.delNameArray.push(name);
        // console.log(this.delNameArray)
        var alert = this.alertCtrl.create({
            title: '정말로 삭제하시겠습니까?',
            buttons: [
                {
                    text: '취소',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '확인',
                    handler: function (data) {
                        console.log(_this.a.list);
                        for (var i = 0; i < _this.a.list.length; i++) {
                            if (_this.a.list[i].name == name) {
                                _this.a.list[i] = "NC";
                            }
                        }
                        var filtered = _this.a.list.filter(function (value) {
                            return value != "NC";
                        });
                        _this.a.list = filtered;
                        console.log(_this.a.list);
                        /*입력 리스트에서 삭제된 항목을 firebase에서 삭제하기위해 list 삭제*/
                        _this.firemain.child("users").child(_this.id).child(_this.shop).child(_this.title).child(_this.key).child("list").once("value", function (snap) {
                            for (var a in snap.val()) {
                                _this.firemain.child("users").child(_this.id).child(_this.shop).child(_this.title).child(_this.key).child("list").remove().then(function () {
                                    console.log("success");
                                }).catch(function (e) {
                                    console.log("error" + e);
                                });
                            }
                            /*삭제한 list를 update를 통해 수정된 데이터로 다시 넣어줌 */
                            _this.firemain.child("users").child(_this.id).child(_this.shop).child(_this.title).child(_this.key).child("list").update(_this.a.list).then(function () {
                                console.log(_this.a.list);
                            });
                            /*totalNumber와 Select값 가져오기*/
                            _this.totalnumber = _this.a.list.length;
                            var count = 0;
                            for (var i = 0; i < _this.a.list.length; i++) {
                                if (_this.a.list[i].checked == true) {
                                    count++;
                                }
                            }
                            _this.refreshname(); //새로고침
                        });
                        //         console.log(this.a.list); //this.a.list는 입력을 받은 배열
                        //         for (var i = 0; i < this.a.list.length; i++) {
                        //           /*a.list에 있는 항목이 체크가 되어있으면 newlist에 push*/
                        //           if (this.a.list[i].checked == true) {
                        //             console.log(this.a.list[i].checked);
                        //             newlist.push(i);
                        //             const toast = this.toastCtrl.create({
                        //               message: '삭제되었습니다.',
                        //               duration: 2000,
                        //             });
                        //             toast.present();
                        //           }
                        //         }
                        //         for (var i = 0; i < newlist.length; i++) {
                        //           this.a.list[newlist[i]] = "NC"
                        //         }
                        //         console.log(this.a.list)
                        //         var filtered = this.a.list.filter(function (value) {
                        //           console.log(value)
                        //           return value != "NC";
                        //         });
                        //         console.log(filtered)
                        //         this.a.list = filtered
                        //         console.log(this.a.list);
                        //         /*입력 리스트에서 삭제된 항목을 firebase에서 삭제하기위해 list 삭제*/
                        //         this.firemain.child("users").child(this.id).child(this.shop).child(this.title).child(this.key).child("list").once("value", (snap) => {
                        //           for (var a in snap.val()) {
                        //             this.firemain.child("users").child(this.id).child(this.shop).child(this.title).child(this.key).child("list").remove().then(() => {
                        //               console.log("success")
                        //             }).catch((e) => {
                        //               console.log("error" + e);
                        //             })
                        //           }
                        //           /*삭제한 list를 update를 통해 수정된 데이터로 다시 넣어줌 */
                        //           this.firemain.child("users").child(this.id).child(this.shop).child(this.title).child(this.key).child("list").update(this.a.list).then(() => {
                        //             console.log(this.a.list);
                        //           });
                        //           /*totalNumber와 Select값 가져오기*/
                        //           this.totalnumber = this.a.list.length;
                        //           var count = 0;
                        //           for (var i = 0; i < this.a.list.length; i++) {
                        //             if (this.a.list[i].checked == true) {
                        //               count++;
                        //             }
                        //           }
                        //           this.selected = count;
                        //           this.refreshname(); //새로고침
                        //         })
                    }
                }
            ]
        });
        alert.present();
    };
    /*sort구현*/
    ViewshoppinglistPage.prototype.sortlist = function (fab) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '정렬하시겠습니까?',
            buttons: [
                {
                    text: '아니요',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '예',
                    handler: function (data) {
                        // var sortingField = this.check;
                        // console.log(sortingField);
                        // this.a.list.sort(function (name1, name2) { // 오름차순
                        // console.log(this.check);
                        // return (a[sortingField] === b[sortingField])? 0 : a[sortingField]? -1 : 1;
                        // var x = name1[sortingField]; var y = name2[sortingField];
                        // return name1.name[sortingField] < name2.name[sortingField] ? -1 : name1.name[sortingField] > name2.name[sortingField] ? 1 : 0;
                        // });
                        _this.a.list.sort(function (name1, name2) {
                            return name1.name.toLowerCase() < name2.name.toLowerCase() ? -1 : name1.name.toLowerCase() > name2.name.toLowerCase() ? 1 : 0;
                        });
                        console.log(_this.a.list);
                        window.alert("정렬되었습니다.");
                        _this.firemain.child("users").child(_this.id).child(_this.shop).child(_this.title).child(_this.key).child("list").update(_this.a.list).then(function () {
                            console.log(_this.a.list);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    /*가격비교 검색*/
    ViewshoppinglistPage.prototype.select_sort = function (c) {
        console.log(c);
        this.srct.url = 'https://msearch.shopping.naver.com/search/all.nhn?origQuery=' + this.a.list[c].name + '&pagingIndex=1&pagingSize=40&viewType=list&sort=' + __WEBPACK_IMPORTED_MODULE_4_jquery__("#slt").val() + '&frm=NVSHATC&query=' + this.a.list[c].name;
        console.log(this.srct.url);
        var browser = this.iab.create(this.srct.url, "_blank", "location=no,toolbar=no");
        browser.on('loadstop').subscribe(function (event) {
            browser.insertCSS({ code: "body{color: red;}" });
        });
    };
    /*토스트버튼*/
    ViewshoppinglistPage.prototype.showToastWithCloseButton = function () {
        if (this.selected >= 0) {
            var toast = this.toastCtrl.create({
                message: this.totalnumber + '개 중 ' + this.selected + ' 개 구입 완료.',
                duration: 2000,
            });
            toast.present();
        }
    };
    ViewshoppinglistPage.prototype.speeching = function () {
        var options = {
            "language": "ko-KR",
            "matches": 1,
            "prompt": "평소 말하는 것처럼 말해주세요",
            "showPopup": true,
            "showPartial": true
        };
        // Check feature available
        this.speechRecognition.isRecognitionAvailable()
            .then(function (available) { return console.log(available); }).catch(function (e) {
            console.log(e);
        });
        // Start the recognition process
        this.speechRecognition.startListening(options)
            .subscribe(function (matches) { return console.log(matches); }, function (onerror) { return console.log('error:', onerror); });
        // Stop the recognition process (iOS only)
        this.speechRecognition.stopListening();
        // Get the list of supported languages
        this.speechRecognition.getSupportedLanguages()
            .then(function (languages) { return console.log(languages); }, function (error) { return console.log(error); });
        // Check permission
        this.speechRecognition.hasPermission()
            .then(function (hasPermission) { return console.log(hasPermission); });
        // Request permissions
        this.speechRecognition.requestPermission()
            .then(function () { return console.log('Granted'); }, function () { return console.log('Denied'); });
    };
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */]) === "function" ? _a : Object)
    ], ViewshoppinglistPage.prototype, "navBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])('long-press'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]) === "function" ? _b : Object)
    ], ViewshoppinglistPage.prototype, "onPressRelease", void 0);
    ViewshoppinglistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewshoppinglist',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/viewshoppinglist/viewshoppinglist.html"*/'<ion-header>\n    <ion-navbar color="navbar">\n        <span style="color:white; font-size:23px; font-weight: 900">{{a.title}}</span>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-row>\n        <ion-col col-10>\n            <span style="font-size:18px; color:#42B8B8; font-weight: 900;">{{a.time}}</span>\n        </ion-col>\n        <ion-col col-2>\n            <button class="saveButton" (click)="save()">저장</button>\n        </ion-col>\n    </ion-row>\n    <ion-row style="background-color: #9FFAFA; border-radius: 6px;">\n        <ion-col col-8>\n            <span *ngIf="flag==false&&allbuy==false" style="color: #42B8B8; font-size:15px; font-weight: 900;">{{totalnumber}}개 중 {{selected}}개 구입</span>\n            <span *ngIf="flag==true&&allbuy==false" style="color: #42B8B8; font-size:15px; font-weight: 900;">{{totalnumber}}</span>\n            <span *ngIf="allbuy==true" style="color: #42B8B8; font-size:15px; font-weight: 900;">구입완료 {{totalnumber}}품목</span>\n\n        </ion-col>\n        <ion-col col-4>\n            <span style="color: #42B8B8; font-size:15px; font-weight: 900;">₩{{printsum}}</span>\n        </ion-col>\n    </ion-row>\n    <div>\n\n        <ion-item ion-long-press [interval]="3000" (pressed)="pressed()" (longPressed)="active()" (pressEnded)="released()" *ngFor="let att of a.list; let idx = index">\n\n            <ion-icon *ngIf="flag==true" class="iconwidth" style="margin:9px 3px 9px 4px;" name="close"></ion-icon>\n            <ion-checkbox [(ngModel)]="att.checked" style="z-index: 999999;" (ionChange)="addValue($event)" *ngIf="flag==false" color="dark" slot="start"></ion-checkbox>\n            <button outline item-start style="float:left; width:13%; background-color:white; z-index:999999" *ngIf="flag==true&&delflag1==true" (click)="del(a.list[idx].name)">\n                <img src="./assets/imgs/087-버튼-PPT 32페이지의 좌측 이미지-휴지통 뚜껑 닫힌거.png" alt="">\n            </button>\n            <ion-input text-center style="width: 10%;float: left; font-size:15px;" placeholder="상품명" [(ngModel)]="a.list[idx].name"></ion-input>\n            <ion-input text-center style="width: 5%;float: left; font-size:15px;" placeholder="수량" [(ngModel)]="a.list[idx].quantity"></ion-input>\n            <ion-input text-center style="width: calc(100%-0px-1px);float: left; font-size:13px;" placeholder="가격" [(ngModel)]="a.list[idx].price"></ion-input>\n            <button outline item-end style="float:right; width:15%;background-color: white;" (click)="select_sort(idx)"><img src="./assets/imgs/088-버튼-PPT 32페이지의 좌측 이미지-인터넷 지구+돋보기.png" alt=""></button>\n\n            <!-- <button ion-button outline item-end style="width:10%;" (click)="select_sort(idx)"><ion-icon name=\'search\' is-active="false"></ion-icon></button> -->\n        </ion-item>\n\n    </div>\n\n    <div style="width: 100%; margin-left:0px; margin-right:0px;" class="bottom">\n        <ion-input *ngIf="flag!=false" style="color:#808080; width: 65%;border-bottom: solid 1px;  border-bottom-color:rgb(74, 190, 190); float: left;" [(ngModel)]="adding" placeholder="품목을 입력하세요."></ion-input>\n        <button *ngIf="flag!=false" style="height: 3.5rem;background: transparent;border-radius: 7px;margin-left: 4px;" (click)="speeching()"><img src="./assets/imgs/086-버튼-PPT 31페이지의 가운데 이미지-녹음 마이크.png" style="width:30px;" alt=""></button>\n        <button *ngIf="flag!=false" style="height: 3.5rem;background: #9FFAFA;border: solid 1px #9FFAFA;border-radius: 7px;margin-top: 5px;margin-left: 4px;" (click)="add()">추가하기</button>\n        <div *ngIf="flag!=false&&flagInput==false" class="inputprice" style="margin-top:5px;">\n            <img *ngIf="flag!=false&&flagInput==false" src="./assets/imgs/084-버튼-PPT 31페이지의 가운데 이미지-점3개-회전1단계(시작).png " style="width:30px; " alt=" ">\n            <button *ngIf="flag!=false&&flagInput==false" style="background-color:white;color:rgb(74, 190, 190); font-size:14px; font-weight: bold;" (click)="priceandquantity()">가격 및 수량도 입력하기</button>\n        </div>\n        <div>\n            <button *ngIf="flagInput!=false" style="margin:0px; height: 3.5rem;background-color:#71E8E8;border-radius: 7px; margin-top: 3px;margin-left: 10px; margin-bottom:20px;" (click)="cancel()">상세취소</button>\n            <!-- <ion-input *ngIf="flagInput!=false" style="margin: 0px 0px; color:#808080; width: 30%; height: 3.5rem; border-bottom: solid 1px; float: left; margin-right: 2px; margin-left:2px;" [(ngModel)]="quantity" placeholder="수량"></ion-input> -->\n            <ion-select style="width:20%;height: 20%" [(ngModel)]="num" *ngIf="flagInput!=false" style="z-index:-999999; color:#808080; width: 34%; height: 4.3rem; border-bottom: solid 1px; float: left; margin-right: 2px; margin-left:2px;" [(ngModel)]="quantity"\n                placeholder="수량">\n                <ion-label>수량</ion-label>\n                <ion-option *ngFor="let number of number">{{number.count}}</ion-option>\n            </ion-select>\n            <ion-input *ngIf="flagInput!=false" style="margin: 0px 0px; color:#808080; width: 30%; height: 4.3rem; border-bottom: solid 1px; float: left; margin-left: 2px; margin-right:5px;" [(ngModel)]="price" placeholder="가격"></ion-input>\n        </div>\n    </div>\n\n    <div>\n        <ion-fab right bottom>\n            <button ion-fab mini style="background-color:white"><img class="rotate" src="./assets/imgs/084-버튼-PPT 31페이지의 가운데 이미지-점3개-회전1단계(시작).png " alt=" "></button>\n            <ion-fab-list side="top">\n                <button ion-fab class="fab-close" style="background-color:white" name="close" role="img" aria-label="close" ng-reflect-name="close"><img src="./assets/imgs/084-버튼-PPT 31페이지의 가운데 이미지-점3개-회전1단계(시작).png " alt=" "></button>\n                <button ion-fab style="background-color: white;" (click)="delete(a)"><img src="./assets/imgs/093-버튼-PPT 51페이지의 우측 이미지- 삭제하기 휴지통.png" alt=""></button>\n                <button ion-fab style="background-color: white;" (click)="insertData(a)"><img src="./assets/imgs/092-버튼-PPT 51페이지의 우측 이미지- 수정하기 연필모양.png" alt=""></button>\n                <button ion-fab style="background-color: white;" (click)="sortlist(a)"><img src="./assets/imgs/091-버튼-PPT 51페이지의 우측 이미지- 가나다순.png" style="width:100%" alt=""></button>\n\n            </ion-fab-list>\n        </ion-fab>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/viewshoppinglist/viewshoppinglist.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" ? _g : Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__["a" /* AdMobFree */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__["a" /* AdMobFree */]) === "function" ? _h : Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" ? _j : Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" ? _k : Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" ? _l : Object])
    ], ViewshoppinglistPage);
    return ViewshoppinglistPage;
}());

//# sourceMappingURL=viewshoppinglist.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return licenseModalPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return privacyModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = /** @class */ (function () {
    function SettingPage(modal, iab, socialSharing, alertCtrl, navCtrl, navParams) {
        this.modal = modal;
        this.iab = iab;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.version = 'V1.10.01';
        this.shownGroup = null;
        this.flag = false;
        this.test = false;
        this.buttontoggle = [
            { name: '7일 전', check: false },
            { name: '3일 전', check: false },
            { name: '1일 전', check: false },
            { name: '받지 않기', check: true },
        ];
    }
    SettingPage.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    SettingPage.prototype.toggleGroup = function () {
        this.flag = true;
        this.shownGroup = !this.shownGroup;
    };
    ;
    SettingPage.prototype.checkbutton = function () {
        var val = false;
        for (var i = 0; i < this.buttontoggle.length; i++) {
            if (this.buttontoggle[i].check == true) {
                if (i < 3)
                    val = true;
                else
                    val = false;
            }
        }
        return val;
    };
    SettingPage.prototype.clickButton = function (i) {
        this.buttontoggle[i].check = !(this.buttontoggle[i].check);
        if (i == 3) {
            this.buttontoggle[0].check = false;
            this.buttontoggle[1].check = false;
            this.buttontoggle[2].check = false;
        }
        else
            this.buttontoggle[3].check = false;
        console.log(i, this.buttontoggle[i]);
    };
    ;
    SettingPage.prototype.checkButton = function (i) {
        return this.buttontoggle[i];
    };
    SettingPage.prototype.alarmcheck = function () {
        for (var i = 0; i < 4; i++) {
            console.log(i, this.buttontoggle[i]);
        }
        this.shownGroup = false;
        this.flag = false;
    };
    SettingPage.prototype.evaluation = function () {
        //window.alert('evaluation');
        window.open('market://details?id=com.kakao.talk', '_system');
    };
    SettingPage.prototype.license = function () {
        //window.alert('license');
        var modal = this.modal.create(licenseModalPage);
        modal.present();
    };
    SettingPage.prototype.email = function () {
        //window.alert('email');
        var msg = "백화점 마트 헛걸음 방지 앱. '백마헛방' 쇼핑가기전엔 언제나 '백마헛방'";
        console.log(msg);
        //this.socialSharing.share(msg, null, null, null);
        this.socialSharing.shareViaEmail(null, '문의 사항', ['superstepmall@gmail.com'], null);
    };
    SettingPage.prototype.privacy = function () {
        //window.alert('privacy');
        var modal = this.modal.create(privacyModalPage);
        modal.present();
    };
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/setting/setting.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>설정</ion-title>\n  </ion-navbar>\n</ion-header> -->\n<!-- <ion-header>\n    <ion-navbar>\n        <span style="color:white; font-size:22px; font-weight: bold;">설정</span>\n    </ion-navbar>\n</ion-header>\n/Users/limchae/martapp/src/assets/imgs/064-버튼-PPT 19페이지의  우측 이미지-뒤로가기 화살표.png -->\n\n<ion-content>\n    <div style="background-color: #71E8E8; margin-bottom:5px; display:flex;">\n        <button class="goback" (click)="goBack()"><img src="./assets/imgs/064-버튼-PPT 19페이지의  우측 이미지-뒤로가기 화살표.png" style="width:30px; margin:5px;" alt=""></button>\n        <span style="color:white; font-size:18px; font-weight: 900; margin-top:11px; margin-left:20px;">설정</span>\n    </div>\n    <ion-list>\n        <ion-item>\n            <span><img src="./assets/imgs/065-버튼-PPT 19페이지의  우측 이미지-버전 정보의 i .png" style="width:25px; margin-right:10px" alt="">버전정보 Ver : {{version}}</span>\n        </ion-item>\n\n        <ion-item>\n            <span><img src="./assets/imgs/066-버튼-PPT 19페이지의  우측 이미지-앱 평가하기의 별 모양.png" style="width:25px; margin-right:10px;" alt="">앱 평가하기</span>\n            <button (click)="evaluation()" class="arrow1"><img src="./assets/imgs/071-버튼-PPT 19페이지의  우측 이미지-화살표 ＞ .png" alt="" style="width:30px;"></button>\n        </ion-item>\n\n        <ion-item>\n            <span><img src="./assets/imgs/067-버튼-PPT 19페이지의  우측 이미지-오픈소스 라이선스의 c .png" style="width:25px; margin-right:10px;" alt="">오픈소스 라이센스</span>\n            <button (click)="license()" class="arrow2"><img src="./assets/imgs/071-버튼-PPT 19페이지의  우측 이미지-화살표 ＞ .png" alt="" style="width:30px;"></button>\n        </ion-item>\n\n        <ion-item>\n            <span><img src="./assets/imgs/068-버튼-PPT 19페이지의  우측 이미지-개발자 문의 하기의 편지.png" style="width:25px; margin-right:10px;" alt="">개발자 문의하기</span>\n            <button (click)="email()" class="arrow3"><img src="./assets/imgs/071-버튼-PPT 19페이지의  우측 이미지-화살표 ＞ .png" alt="" style="width:30px;"></button>\n\n        </ion-item>\n\n        <ion-item>\n            <span><img src="./assets/imgs/069-버튼-PPT 19페이지의  우측 이미지-푸쉬 알람 설정의 선셋 점셋.png" style="width:25px; margin-right:10px;" alt="">푸쉬 알람 설정</span>\n\n            <button *ngIf="flag==false" (click)="toggleGroup()" class="arrow4">\n              <img class="rotate" *ngIf="flag==false" src="./assets/imgs/072-버튼-PPT 19페이지의  우측 이미지-화살표 ∨-회전1단계(시작).png" alt="" style="width:30px;">\n              <img class="rotate" *ngIf="flag==true" src="./assets/imgs/075-버튼-PPT 21페이지의  우측 이미지-화살표 ∧-회전1단계(시작).png" alt="" style="width:30px;">\n            </button>\n            <button *ngIf="flag==true" (click)="alarmcheck()" class="arrow4">\n              <img class="rotate" *ngIf="flag==false" src="./assets/imgs/072-버튼-PPT 19페이지의  우측 이미지-화살표 ∨-회전1단계(시작).png" alt="" style="width:30px;">\n              <img class="rotate" *ngIf="flag==true" src="./assets/imgs/075-버튼-PPT 21페이지의  우측 이미지-화살표 ∧-회전1단계(시작).png" alt="" style="width:30px;">\n            </button>\n\n\n            <div *ngIf="shownGroup" style="margin:5px;padding:3px;">\n                즐겨 찾기 한 매장의 휴무일 푸쉬 알림 받기\n                <div></div>\n                <a class="test" *ngFor="let button of buttontoggle; let i = index">\n\n                    <button ion-button (click)="clickButton(i)" style="width:50px; margin-right:5px;" [ngClass]="button.check===true?\'B_on\':\'B_off\'">{{button.name}}</button>\n\n                </a>\n                <div *ngIf="checkbutton()===true">\n                    <ion-item>\n                        <ion-label>Time</ion-label>\n                        <ion-datetime displayFormat="HH:mm" pickerFormat="HH mm" [(ngModel)]="DateTime">\n                        </ion-datetime>\n                    </ion-item>\n\n                </div>\n                <button ion-button (click)="alarmcheck()" style="width:50px;">완료</button>\n            </div>\n        </ion-item>\n\n        <ion-item>\n            <span><img src="./assets/imgs/070-버튼-PPT 19페이지의  우측 이미지-개인정보 취급 방침의 신분증.png" style="width:25px; margin-right:10px;" alt="">개인정보 취급방침</span>\n            <button (click)="privacy()" class="arrow2"><img src="./assets/imgs/071-버튼-PPT 19페이지의  우측 이미지-화살표 ＞ .png" alt="" style="width:30px;"></button>\n        </ion-item>\n\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SettingPage);
    return SettingPage;
}());

var licenseModalPage = /** @class */ (function () {
    function licenseModalPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
    }
    licenseModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    licenseModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n  <ion-content class=\"main-view\" style=\"background: transparent;\n  background-color: white;\n  outline-color=black;\n  border: solid 1px;\n  border-radius: 10px;\n  height: 80%;\n  width:80%;\n  top: 10%;\n  left:10%;\n  \" padding>\n      \n    <div class=\"modal_content\">\n        \n          <div class=\"img\">\n               \n        </div>\n        <div class=\"footer\">\n          <button ion-button (click)=\"dismiss()\">\n          \uB098\uAC00\uAE30\n          </button>\n        </div>\n     \n    </div>\n    </ion-content>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], licenseModalPage);
    return licenseModalPage;
}());

var privacyModalPage = /** @class */ (function () {
    function privacyModalPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
    }
    privacyModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    privacyModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n  <ion-content class=\"main-view\" style=\"background: transparent;\n  background-color: white;\n  outline-color=black;\n  border: solid 1px;\n  border-radius: 10px;\n  height: 80%;\n  width:80%;\n  top: 10%;\n  left:10%;\n  \" padding>\n      \n    <div class=\"modal_content\">\n        \n          <div class=\"img\">\n               \n        </div>\n        <div class=\"footer\">\n          <button ion-button (click)=\"dismiss()\">\n          \uB098\uAC00\uAE30\n          </button>\n        </div>\n     \n    </div>\n    </ion-content>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], privacyModalPage);
    return privacyModalPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopymodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CopymodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CopymodalPage = /** @class */ (function () {
    function CopymodalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.isChecked3 = false;
        this.isChecked2 = false;
        this.isChecked1 = false;
        this.data1 = false;
        this.data2 = false;
        this.data3 = false;
    }
    CopymodalPage.prototype.disableall = function () {
        console.log("disabled");
        this.data1 = false;
        this.data2 = false;
        this.data3 = false;
    };
    CopymodalPage.prototype.allValue1 = function () {
        console.log("1");
        this.disableall();
        this.selectedvalue = "1";
        this.data1 = true;
    };
    CopymodalPage.prototype.allValue2 = function () {
        this.selectedvalue = "2";
        console.log("2");
        this.disableall();
        this.data2 = true;
    };
    CopymodalPage.prototype.allValue3 = function () {
        this.selectedvalue = "3";
        console.log("3");
        this.disableall();
        this.data3 = true;
    };
    CopymodalPage.prototype.newCopy = function () {
        this.viewCtrl.dismiss({ "flag": "new", "value": this.selectedvalue });
    };
    CopymodalPage.prototype.btn = function () {
        this.viewCtrl.dismiss({ "flag": "old", "value": this.selectedvalue });
    };
    CopymodalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ "flag": "cancel" });
    };
    CopymodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-copymodal',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/copymodal/copymodal.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>쇼핑예정목록복사하기</ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()">취소</button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n        <ion-checkbox name="check1" [(ngModel)]="data1" (click)="allValue1()"></ion-checkbox>\n        <ion-label>구입하지 않은 목록</ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-checkbox name="check2" [(ngModel)]="data2" (click)="allValue2()"></ion-checkbox>\n        <ion-label>구입한 목록</ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-checkbox name="check3" [(ngModel)]="data3" (click)="allValue3()"></ion-checkbox>\n        <ion-label>전체 목록</ion-label>\n    </ion-item>\n\n    <button (click)="newCopy()" style="margin-left:30px; margin-top:5px; width:130px; height:30px; font-size:14px; background-color: #71E8E8; border-radius: 5px;">신규로 복사하기</button>\n    <button (click)="btn()" style="margin-right:30px; margin-top:5px; width:130px; height:30px; font-size:14px; background-color: #71E8E8; border-radius: 5px;">기존 목록에 덧붙이기</button>\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/copymodal/copymodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], CopymodalPage);
    return CopymodalPage;
}());

//# sourceMappingURL=copymodal.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListlimitmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ListlimitmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListlimitmodalPage = /** @class */ (function () {
    function ListlimitmodalPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firemain = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref();
        this.id = "a2f05b91-956a-b480-3525-991002905558";
        this.nextdirectory = this.firemain.child(this.id);
        this.a = 0;
        console.log(this.firemain);
        this.flag = this.navParams.get("flag");
        this.title = this.navParams.get("title");
        this.value = this.navParams.get("obj");
    }
    ListlimitmodalPage.prototype.delete = function () {
        var temp;
        console.log(this.title);
        console.log(this.value);
        for (var a = 0; a < this.value.length - 1; a++) {
            console.log(a + "번째" + this.value[a].time);
            console.log(a + "번째" + this.value[a + 1].time);
            if (this.value[a].time < this.value[a + 1].time) {
                temp = this.value[a];
                this.value[a] = this.value[a + 1];
                this.value[a + 1] = temp;
                console.log(this.value);
            }
        }
        console.log(this.value);
        this.viewCtrl.dismiss({ "value": temp });
    };
    ListlimitmodalPage.prototype.btn = function () {
        this.viewCtrl.dismiss();
    };
    ListlimitmodalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ "value": "" });
    };
    ListlimitmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listlimitmodal',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/listlimitmodal/listlimitmodal.html"*/'<ion-header>\n</ion-header>\n<ion-content style="background:#9FFAFA;">\n    <div style="text-align:center; background:#9FFAFA">\n        <ion-row>\n            <ion-col col-10 style="margin-left:auto; margin-right:auto;">\n                <span style="font-size:21px; font-weight: 600;">\n                <br><br><br>앱의 원활한 구동을 위하여<br>(속도, 데이터, 배터리 절약)<br><br> "쇼핑 목록"은 최대 50개까지<br> 저장 가능합니다.<br><br> (현재 50개의 품목이 저장되어 계십니다.) <br><br> 추가로 저장을 원하실 경우<br><br> 불필요한 "쇼핑목록"을 삭제하신 후<br><br> 신규로 저장하여 주시기 바랍니다.<br><br>\n            </span>\n            </ion-col>\n\n        </ion-row>\n        <button class="buttonSize" (click)="delete()">기존 목록 한개 삭제하기</button>\n        <button class="buttonSize" (click)="dismiss()">닫기</button>\n    </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/listlimitmodal/listlimitmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListlimitmodalPage);
    return ListlimitmodalPage;
}());

//# sourceMappingURL=listlimitmodal.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MartlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__martmap_martmap__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ad_ad__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rate_rate__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MartlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MartlistPage = /** @class */ (function () {
    function MartlistPage(navCtrl, navParams, socialSharing, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.modal = modal;
    }
    MartlistPage.prototype.martmap = function (id) {
        console.log("hi");
        console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__martmap_martmap__["a" /* MartmapPage */], { "id": id });
    };
    MartlistPage.prototype.regularShare = function () {
        var msg = "백화점 마트 헛걸음 방지 앱\n '백마헛방'\n 쇼핑가기전엔 언제나\n '백마헛방'";
        console.log(msg);
        this.socialSharing.share(msg, null, null, null);
    };
    MartlistPage.prototype.NoneAd = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__ad_ad__["a" /* AdPage */]);
        modal.present();
    };
    MartlistPage.prototype.appstore = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__rate_rate__["a" /* RatePage */]);
        modal.present();
    };
    MartlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-martlist',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/martlist/martlist.html"*/'<ion-content>\n    <div style="background-color: #71E8E8; margin-bottom:5px; display:flex;">\n        <img src="./assets/imgs/008-버튼-PPT 4페이지의 가운데 이미지의 상단 좌측-말 얼굴.png" style="width:50px; margin:5px;" alt="">\n        <span style="color:white; font-size:18px; font-weight: 900; margin:auto;">매장 유형을 선택해주세요</span>\n        <button style="background-color:#71E8E8;"><img src="./assets/imgs/004-버튼-PPT 3페이지의 이미지의 상단 가운데-광고금지.png" (click)="NoneAd()" style="width:25px;"></button>\n        <button style="background-color:#71E8E8;"><img src="./assets/imgs/005-버튼-PPT 3페이지의 이미지의 상단 우측-평가하기 별점주기.png" (click)="appstore()" style="width:25px;"></button>\n        <button style="background-color:#71E8E8;"><img src="./assets/imgs/006-버튼-PPT 3페이지의 이미지의 상단 우측-공유하기 점 세개.png" (click)="regularShare()" style="width:25px;"></button>\n    </div>\n    <div>\n        <ion-item-group>\n            <ion-item-divider color="light" style="margin-left:10px;">마트</ion-item-divider>\n            <button ion-item (click)="martmap(\'lottemart\')"><img src="./assets/imgs/009-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-롯데마트 CI-2.png" style="width:15%; margin-right:20px;">롯데마트</button>\n            <button ion-item (click)="martmap(\'emart\')"><img src="./assets/imgs/010-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-이마트 CI.png" style="width:15%; margin-right:20px;">이마트</button>\n            <button ion-item (click)="martmap(\'homeplus\')"><img src="./assets/imgs/011-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-홈플러스 CI.png" style="width:15%; margin-right:20px;">홈플러스</button>\n            <button ion-item (click)="martmap(\'costco\')"><img src="./assets/imgs/012-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-코스트코 CI.png" style="width:15%; margin-right:20px;">코스트코</button>\n            <button ion-item (click)="martmap(\'traders\')"><img src="./assets/imgs/013-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-이마트 트레이더스 CI.png" style="width:15%; margin-right:20px;">이마트 트레이더스</button>\n        </ion-item-group>\n        <ion-item-group>\n            <ion-item-divider color="light" style="margin-left:10px;">백화점</ion-item-divider>\n            <button ion-item (click)="martmap(\'lottedep\')"><img src="./assets/imgs/020-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-롯데백화점 CI.png" style="width:15%; height:10%; margin-right:20px;">롯데 백화점</button>\n            <button ion-item (click)="martmap(\'ssgdep\')"><img src="./assets/imgs/021-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-신세백화점 CI.png" style="width:15%; margin-right:20px;">신세계 백화점</button>\n            <button ion-item (click)="martmap(\'hyundep\')"><img src="./assets/imgs/022-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-현대백화점 CI.png" style="width:15%; margin-right:20px;">현대 백화점</button>\n        </ion-item-group>\n        <ion-item-group>\n            <ion-item-divider color="light" style="margin-left:10px;">아울렛</ion-item-divider>\n            <button ion-item (click)="martmap(\'lotteout\')"><img src="./assets/imgs/023-버튼-PPT 4페이지의 가운데 이미지의 아울렛별 로고-롯데아울렛 CI.png" style="width:15%; height:10%; margin-right:20px;">롯데 아울렛</button>\n            <button ion-item (click)="martmap(\'ssgout\')"><img src="./assets/imgs/025-버튼-PPT 4페이지의 가운데 이미지의 아울렛별 로고-신세계아울렛 CI.png" style="width:15%; margin-right:20px;">신세계 아울렛</button>\n            <button ion-item (click)="martmap(\'hyunout\')"><img src="./assets/imgs/024-버튼-PPT 4페이지의 가운데 이미지의 아울렛별 로고-현대아울렛 CI.png" style="width:15%; margin-right:20px;">현대 아울렛</button>\n        </ion-item-group>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/martlist/martlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], MartlistPage);
    return MartlistPage;
}());

//# sourceMappingURL=martlist.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MartmapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__martinfo_martinfo__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ad_ad__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rate_rate__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MartmapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MartmapPage = /** @class */ (function () {
    function MartmapPage(navCtrl, navParams, socialSharing, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.modal = modal;
        this.martflag = 0;
        this.id = this.navParams.get("id");
        this.listPrint();
    }
    MartmapPage.prototype.regularShare = function () {
        var msg = "백화점 마트 헛걸음 방지 앱\n '백마헛방'\n 쇼핑가기전엔 언제나\n '백마헛방'";
        console.log(msg);
        this.socialSharing.share(msg, null, null, null);
    };
    MartmapPage.prototype.NoneAd = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__ad_ad__["a" /* AdPage */]);
        modal.present();
    };
    MartmapPage.prototype.appstore = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__rate_rate__["a" /* RatePage */]);
        modal.present();
    };
    MartmapPage.prototype.listPrint = function () {
        if (this.id == "lottemart") {
            this.martflag = "1";
            this.img = "./assets/imgs/009-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-롯데마트 CI.png";
            this.name = "롯데마트";
            this.map = "./assets/imgs/028-버튼-PPT 5페이지의 가운데 이미지의 전국지도 버튼-마트-롯데마트.png";
        }
        else if (this.id == "emart") {
            this.martflag = "2";
            this.img = "./assets/imgs/010-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-이마트 CI.png";
            this.name = "이마트";
            this.map = "./assets/imgs/026-버튼-PPT 5페이지의 가운데 이미지의 전국지도 버튼-마트-이마트.png";
        }
        else if (this.id == "homeplus") {
            this.martflag = "3";
            this.img = "./assets/imgs/011-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-홈플러스 CI.png";
            this.name = "홈플러스";
            this.map = "./assets/imgs/027-버튼-PPT 5페이지의 가운데 이미지의 전국지도 버튼-마트-홈플러스.png";
        }
        else if (this.id == "costco") {
            this.martflag = "4";
            this.img = "./assets/imgs/012-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-코스트코 CI.png";
            this.name = "코스트코";
            this.map = "./assets/imgs/029-버튼-PPT 5페이지의 가운데 이미지의 전국지도 버튼-마트-코스트코.png";
        }
        else if (this.id == "traders") {
            this.martflag = "5";
            this.img = "./assets/imgs/013-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-이마트 트레이더스 CI.png";
            this.name = "이마트 트레이더스";
            this.map = "./assets/imgs/030-버튼-PPT 5페이지의 가운데 이미지의 전국지도 버튼-마트-이마트 트레이더스.png";
        }
        else if (this.id == "lottedep") {
            this.martflag = "6";
            this.img = "./assets/imgs/020-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-롯데백화점 CI.png";
            this.name = "롯데 백화점";
            this.map = "./assets/imgs/037-버튼-PPT 5페이지의 가운데 이미지의 전국지도 버튼-백화점-롯데백화점.png";
        }
        else if (this.id == "ssgdep") {
            this.martflag = "7";
            this.img = "./assets/imgs/021-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-신세백화점 CI.png";
            this.name = "신세계 백화점";
            this.map = "./assets/imgs/038-버튼-PPT 5페이지의 가운데 이미지의 전국지도 버튼-백화점-신세계백화점.png";
        }
        else if (this.id == "hyundep") {
            this.martflag = "8";
            this.img = "./assets/imgs/022-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-현대백화점 CI.png";
            this.name = "현대 백화점";
            this.map = "./assets/imgs/039-버튼-PPT 5페이지의 가운데 이미지의 전국지도 버튼-백화점-현대백화점.png";
        }
        else if (this.id == "lotteout") {
            this.martflag = "9";
            this.img = "./assets/imgs/023-버튼-PPT 4페이지의 가운데 이미지의 아울렛별 로고-롯데아울렛 CI.png";
            this.name = "롯데 아울렛";
            this.map = "./assets/imgs/040-버튼-PPT 5페이지의 가운데 이미지의 전국지도 버튼-아울렛-롯데아울렛.png";
        }
        else if (this.id == "ssgout") {
            this.martflag = "10";
            this.img = "./assets/imgs/025-버튼-PPT 4페이지의 가운데 이미지의 아울렛별 로고-신세계아울렛 CI.png";
            this.name = "신세계 아울렛";
            this.map = "./assets/imgs/041-버튼-PPT 5페이지의 가운데 이미지의 전국지도 버튼-아울렛-신세계아울렛.png";
        }
        else if (this.id == "hyunout") {
            this.martflag = "11";
            this.img = "./assets/imgs/024-버튼-PPT 4페이지의 가운데 이미지의 아울렛별 로고-현대아울렛 CI.png";
            this.name = "현대아울렛";
            this.map = "./assets/imgs/042-버튼-PPT 5페이지의 가운데 이미지의 전국지도 버튼-아울렛-현대아울렛.png";
        }
    };
    MartmapPage.prototype.lottemartlist = function (area) {
        console.log(area);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__martinfo_martinfo__["a" /* MartinfoPage */], { "mart": "lottemart", "area": area });
    };
    MartmapPage.prototype.emartlist = function (area) {
        console.log(area);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__martinfo_martinfo__["a" /* MartinfoPage */], { "mart": "emart", "area": area });
    };
    MartmapPage.prototype.homepluslist = function (area) {
        console.log(area);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__martinfo_martinfo__["a" /* MartinfoPage */], { "mart": "homeplus", "area": area });
    };
    MartmapPage.prototype.costcolist = function (area) {
        console.log(area);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__martinfo_martinfo__["a" /* MartinfoPage */], { "mart": "costco", "area": area });
    };
    MartmapPage.prototype.traderslist = function (area) {
        console.log(area);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__martinfo_martinfo__["a" /* MartinfoPage */], { "mart": "traders", "area": area });
    };
    MartmapPage.prototype.lottedeplist = function (area) {
        console.log(area);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__martinfo_martinfo__["a" /* MartinfoPage */], { "mart": "lottedep", "area": area });
    };
    MartmapPage.prototype.ssgdeplist = function (area) {
        console.log(area);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__martinfo_martinfo__["a" /* MartinfoPage */], { "mart": "ssgdep", "area": area });
    };
    MartmapPage.prototype.hyundeplist = function (area) {
        console.log(area);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__martinfo_martinfo__["a" /* MartinfoPage */], { "mart": "hyundep", "area": area });
    };
    MartmapPage.prototype.lotteoutlist = function (area) {
        console.log(area);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__martinfo_martinfo__["a" /* MartinfoPage */], { "mart": "lotteout", "area": area });
    };
    MartmapPage.prototype.ssgoutlist = function (area) {
        console.log(area);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__martinfo_martinfo__["a" /* MartinfoPage */], { "mart": "ssgout", "area": area });
    };
    MartmapPage.prototype.hyunoutlist = function (area) {
        console.log(area);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__martinfo_martinfo__["a" /* MartinfoPage */], { "mart": "hyunout", "area": area });
    };
    MartmapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-martmap',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/martmap/martmap.html"*/'<ion-content>\n    <div style="background-color: #71E8E8; margin-bottom:5px; display:flex;">\n        <img src="./assets/imgs/008-버튼-PPT 4페이지의 가운데 이미지의 상단 좌측-말 얼굴.png" style="width:50px; margin:5px;" alt="">\n        <span style="color:white; font-size:18px; font-weight: 900; margin:auto;">지역을 선택해주세요</span>\n        <button (click)="NoneAd()" style="background-color:#71E8E8; z-index: 999999;"><img src="./assets/imgs/004-버튼-PPT 3페이지의 이미지의 상단 가운데-광고금지.png" style="width:25px;"></button>\n        <button (click)="appstore()" style="background-color:#71E8E8; z-index: 999999;"><img src="./assets/imgs/005-버튼-PPT 3페이지의 이미지의 상단 우측-평가하기 별점주기.png" style="width:25px;"></button>\n        <button (click)="regularShare()" style="background-color:#71E8E8; z-index: 999999;"><img src="./assets/imgs/006-버튼-PPT 3페이지의 이미지의 상단 우측-공유하기 점 세개.png" style="width:25px;"></button>\n    </div>\n    <ion-item-divider color="light"><img src="{{img}}" style="width:50px;margin-right:10px;">{{name}}</ion-item-divider>\n    <div *ngIf="martflag==1">\n        <button (click)="lottemartlist(\'gangwon\')" style="position:absolute; left:47%; top:27%; width:60px; height: 60px; opacity: 0;">강원</button>\n        <button (click)="lottemartlist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="lottemartlist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="lottemartlist(\'incheon\')" style="position:absolute; left:9%; top:34%; width:40px; height: 30px; opacity: 0;">인천</button>\n        <button (click)="lottemartlist(\'chungnam\')" style="position:absolute; left:16%; top:48%; width:40px; height: 30px; opacity: 0;">충남</button>\n        <button (click)="lottemartlist(\'chungbuk\')" style="position:absolute; left:40%; top:42%; width:40px; height: 30px; opacity: 0;">충북</button>\n        <!-- <button (click)="lottemartlist(\'sejong\')" style="position:absolute; left:30%; top:47%; width:40px; height: 30px; opacity: 0;">세종</button> -->\n        <button (click)="lottemartlist(\'daejeon\')" style="position:absolute; left:30%; top:53%; width:40px; height: 30px; opacity: 0;">대전</button>\n        <button (click)="lottemartlist(\'gyeongbuk\')" style="position:absolute; left:61%; top:50%; width:40px; height: 30px; opacity: 0;">경북</button>\n        <button (click)="lottemartlist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <button (click)="lottemartlist(\'ulsan\')" style="position:absolute; left:71%; top:62%; width:40px; height: 30px; opacity: 0;">울산</button>\n        <button (click)="lottemartlist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <button (click)="lottemartlist(\'gyeongnam\')" style="position:absolute; left:48%; top:65%; width:40px; height: 30px; opacity: 0;">경남</button>\n        <button (click)="lottemartlist(\'jeonbuk\')" style="position:absolute; left:26%; top:60%; width:40px; height: 30px; opacity: 0;">전북</button>\n        <button (click)="lottemartlist(\'gwangju\')" style="position:absolute; left:19%; top:69%; width:40px; height: 30px; opacity: 0;">광주</button>\n        <button (click)="lottemartlist(\'jeonnam\')" style="position:absolute; left:20%; top:75%; width:40px; height: 30px; opacity: 0;">전남</button>\n        <button (click)="lottemartlist(\'jeju\')" style="position:absolute; left:5%; top:88%; width:40px; height: 30px; opacity: 0;">제주</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n    <div *ngIf="martflag==2">\n        <button (click)="emartlist(\'gangwon\')" style="position:absolute; left:47%; top:27%; width:60px; height: 60px; opacity: 0;">강원</button>\n        <button (click)="emartlist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="emartlist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="emartlist(\'incheon\')" style="position:absolute; left:9%; top:34%; width:40px; height: 30px; opacity: 0;">인천</button>\n        <button (click)="emartlist(\'chungnam\')" style="position:absolute; left:16%; top:48%; width:40px; height: 30px; opacity: 0;">충남</button>\n        <button (click)="emartlist(\'chungbuk\')" style="position:absolute; left:40%; top:42%; width:40px; height: 30px; opacity: 0;">충북</button>\n        <button (click)="emartlist(\'daejeon\')" style="position:absolute; left:30%; top:53%; width:40px; height: 30px; opacity: 0;">대전</button>\n        <button (click)="emartlist(\'gyeongbuk\')" style="position:absolute; left:61%; top:50%; width:40px; height: 30px; opacity: 0;">경북</button>\n        <button (click)="emartlist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <button (click)="emartlist(\'ulsan\')" style="position:absolute; left:71%; top:62%; width:40px; height: 30px; opacity: 0;">울산</button>\n        <button (click)="emartlist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <button (click)="emartlist(\'gyeongnam\')" style="position:absolute; left:48%; top:65%; width:40px; height: 30px; opacity: 0;">경남</button>\n        <button (click)="emartlist(\'jeonbuk\')" style="position:absolute; left:26%; top:60%; width:40px; height: 30px; opacity: 0;">전북</button>\n        <button (click)="emartlist(\'gwangju\')" style="position:absolute; left:19%; top:69%; width:40px; height: 30px; opacity: 0;">광주</button>\n        <button (click)="emartlist(\'jeonnam\')" style="position:absolute; left:20%; top:75%; width:40px; height: 30px; opacity: 0;">전남</button>\n        <button (click)="emartlist(\'jeju\')" style="position:absolute; left:5%; top:88%; width:40px; height: 30px; opacity: 0;">제주</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n    <div *ngIf="martflag==3">\n        <button (click)="homepluslist(\'gangwon\')" style="position:absolute; left:47%; top:27%; width:60px; height: 60px; opacity: 0;">강원</button>\n        <button (click)="homepluslist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="homepluslist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="homepluslist(\'incheon\')" style="position:absolute; left:9%; top:34%; width:40px; height: 30px; opacity: 0;">인천</button>\n        <button (click)="homepluslist(\'chungnam\')" style="position:absolute; left:16%; top:48%; width:40px; height: 30px; opacity: 0;">충남</button>\n        <button (click)="homepluslist(\'chungbuk\')" style="position:absolute; left:40%; top:42%; width:40px; height: 30px; opacity: 0;">충북</button>\n        <button (click)="homepluslist(\'sejong\')" style="position:absolute; left:30%; top:47%; width:40px; height: 30px; opacity: 0;">세종</button>\n        <button (click)="homepluslist(\'daejeon\')" style="position:absolute; left:30%; top:53%; width:40px; height: 30px; opacity: 0;">대전</button>\n        <button (click)="homepluslist(\'gyeongbuk\')" style="position:absolute; left:61%; top:50%; width:40px; height: 30px; opacity: 0;">경북</button>\n        <button (click)="homepluslist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <button (click)="homepluslist(\'ulsan\')" style="position:absolute; left:71%; top:62%; width:40px; height: 30px; opacity: 0;">울산</button>\n        <button (click)="homepluslist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <button (click)="homepluslist(\'gyeongnam\')" style="position:absolute; left:48%; top:65%; width:40px; height: 30px; opacity: 0;">경남</button>\n        <button (click)="homepluslist(\'jeonbuk\')" style="position:absolute; left:26%; top:60%; width:40px; height: 30px; opacity: 0;">전북</button>\n        <button (click)="homepluslist(\'gwangju\')" style="position:absolute; left:19%; top:69%; width:40px; height: 30px; opacity: 0;">광주</button>\n        <button (click)="homepluslist(\'jeonnam\')" style="position:absolute; left:20%; top:75%; width:40px; height: 30px; opacity: 0;">전남</button>\n        <button (click)="homepluslist(\'jeju\')" style="position:absolute; left:5%; top:88%; width:40px; height: 30px; opacity: 0;">제주</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n    <div *ngIf="martflag==4">\n        <button (click)="costcolist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="costcolist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="costcolist(\'incheon\')" style="position:absolute; left:9%; top:34%; width:40px; height: 30px; opacity: 0;">인천</button>\n        <button (click)="costcolist(\'chungnam\')" style="position:absolute; left:16%; top:48%; width:40px; height: 30px; opacity: 0;">충남</button>\n        <button (click)="costcolist(\'sejong\')" style="position:absolute; left:30%; top:47%; width:40px; height: 30px; opacity: 0;">세종</button>\n        <button (click)="costcolist(\'daejeon\')" style="position:absolute; left:30%; top:53%; width:40px; height: 30px; opacity: 0;">대전</button>\n        <button (click)="costcolist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <button (click)="costcolist(\'ulsan\')" style="position:absolute; left:71%; top:62%; width:40px; height: 30px; opacity: 0;">울산</button>\n        <button (click)="costcolist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n    <div *ngIf="martflag==5">\n        <button (click)="traderslist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="traderslist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="traderslist(\'incheon\')" style="position:absolute; left:9%; top:34%; width:40px; height: 30px; opacity: 0;">인천</button>\n        <button (click)="traderslist(\'chungnam\')" style="position:absolute; left:16%; top:48%; width:40px; height: 30px; opacity: 0;">충남</button>\n        <button (click)="traderslist(\'daejeon\')" style="position:absolute; left:30%; top:53%; width:40px; height: 30px; opacity: 0;">대전</button>\n        <button (click)="traderslist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <button (click)="traderslist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <button (click)="traderslist(\'gyeongnam\')" style="position:absolute; left:48%; top:65%; width:40px; height: 30px; opacity: 0;">경남</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n\n    </div>\n    <div *ngIf="martflag==6">\n        <button (click)="lottedeplist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="lottedeplist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="lottedeplist(\'incheon\')" style="position:absolute; left:9%; top:34%; width:40px; height: 30px; opacity: 0;">인천</button>\n        <button (click)="lottedeplist(\'daejeon\')" style="position:absolute; left:30%; top:53%; width:40px; height: 30px; opacity: 0;">대전</button>\n        <button (click)="lottedeplist(\'gyeongbuk\')" style="position:absolute; left:61%; top:50%; width:40px; height: 30px; opacity: 0;">경북</button>\n        <button (click)="lottedeplist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <button (click)="lottedeplist(\'ulsan\')" style="position:absolute; left:71%; top:62%; width:40px; height: 30px; opacity: 0;">울산</button>\n        <button (click)="lottedeplist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <button (click)="lottedeplist(\'gyeongnam\')" style="position:absolute; left:48%; top:65%; width:40px; height: 30px; opacity: 0;">경남</button>\n        <button (click)="lottedeplist(\'jeonbuk\')" style="position:absolute; left:26%; top:60%; width:40px; height: 30px; opacity: 0;">전북</button>\n        <button (click)="lottedeplist(\'gwangju\')" style="position:absolute; left:19%; top:69%; width:40px; height: 30px; opacity: 0;">광주</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n    <div *ngIf="martflag==7">\n        <button (click)="ssgdeplist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="ssgdeplist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="ssgdeplist(\'chungnam\')" style="position:absolute; left:16%; top:48%; width:40px; height: 30px; opacity: 0;">충남</button>\n        <button (click)="ssgdeplist(\'daejeon\')" style="position:absolute; left:30%; top:53%; width:40px; height: 30px; opacity: 0;">대전</button>\n        <button (click)="ssgdeplist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <button (click)="ssgdeplist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <button (click)="ssgdeplist(\'gyeongnam\')" style="position:absolute; left:48%; top:65%; width:40px; height: 30px; opacity: 0;">경남</button>\n        <button (click)="ssgdeplist(\'gwangju\')" style="position:absolute; left:19%; top:69%; width:40px; height: 30px; opacity: 0;">광주</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n    <div *ngIf="martflag==8">\n        <button (click)="hyundeplist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="hyundeplist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="hyundeplist(\'chungbuk\')" style="position:absolute; left:40%; top:42%; width:40px; height: 30px; opacity: 0;">충북</button>\n        <button (click)="hyundeplist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <button (click)="hyundeplist(\'ulsan\')" style="position:absolute; left:71%; top:62%; width:40px; height: 30px; opacity: 0;">울산</button>\n        <button (click)="hyundeplist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n    <div *ngIf="martflag==9">\n        <button (click)="lotteoutlist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="lotteoutlist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="lotteoutlist(\'chungnam\')" style="position:absolute; left:16%; top:48%; width:40px; height: 30px; opacity: 0;">충남</button>\n        <button (click)="lotteoutlist(\'chungbuk\')" style="position:absolute; left:40%; top:42%; width:40px; height: 30px; opacity: 0;">충북</button>\n        <button (click)="lotteoutlist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <button (click)="lotteoutlist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <button (click)="lotteoutlist(\'gyeongnam\')" style="position:absolute; left:48%; top:65%; width:40px; height: 30px; opacity: 0;">경남</button>\n        <button (click)="lotteoutlist(\'jeonbuk\')" style="position:absolute; left:26%; top:60%; width:40px; height: 30px; opacity: 0;">전북</button>\n        <button (click)="lotteoutlist(\'gwangju\')" style="position:absolute; left:19%; top:69%; width:40px; height: 30px; opacity: 0;">광주</button>\n        <button (click)="lotteoutlist(\'jeonnam\')" style="position:absolute; left:20%; top:75%; width:40px; height: 30px; opacity: 0;">전남</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n    <div *ngIf="martflag==10">\n        <button (click)="ssgoutlist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="ssgoutlist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n    <div *ngIf="martflag==11">\n        <button (click)="hyunoutlist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="hyunoutlist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="hyunoutlist(\'incheon\')" style="position:absolute; left:9%; top:34%; width:40px; height: 30px; opacity: 0;">인천</button>\n        <button (click)="hyunoutlist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/martmap/martmap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], MartmapPage);
    return MartmapPage;
}());

//# sourceMappingURL=martmap.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MartinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ad_ad__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rate_rate__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__martinfoview_martinfoview__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__favoritemodal_favoritemodal__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the MartinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MartinfoPage = /** @class */ (function () {
    function MartinfoPage(navCtrl, navParams, toastCtrl, socialSharing, modal) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.socialSharing = socialSharing;
        this.modal = modal;
        this.day = new Date();
        this.martArray = [];
        this.firemain = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref();
        this.week = [];
        this.dayweek = [];
        this.dayoff = [];
        this.todayy = [];
        this.vacationArr = [];
        this.userarr = [];
        this.date = new Date();
        this.thismonth = [];
        this.offdayyear = [];
        this.dayoffarray = [];
        this.aaa = [];
        this.offdayarray = [];
        this.favoriteList = [];
        this.mart = this.navParams.get("mart");
        this.area = this.navParams.get("area");
        this.martfunc();
        this.todayy.push("오늘", "", "", "", "", "", "");
        console.log(this.mart);
        console.log(this.area);
        this.year = this.day.getFullYear();
        this.month = this.day.getMonth() + 1;
        // this.date = this.day.getDate();
        this.dayOfweek = this.day.getDay();
        // this.theDate();
        console.log(this.martArray);
        this.firemain.child("users").child(this.userId).child("favorite").once("value", function (sn) {
            console.log(sn.val());
            for (var i in sn.val()) {
                for (var j in sn.val()[i]) {
                    // this.fav = sn.val[i][j].favorite;
                    console.log(sn.val()[i][j].favorite);
                    _this.favoriteList.push(sn.val()[i][j]);
                    // console.log(this.fav);
                    for (var mart in _this.martArray) {
                        if (sn.val()[i][j].name == _this.martArray[mart].name) {
                            if (sn.val()[i][j].favorite == true) {
                                _this.martArray[mart].favorite = true;
                                console.log("success");
                            }
                        }
                    }
                }
            }
        });
        // for(var fav in this.favoriteList){
        //   console.log(this.favoriteList);
        //   for(var mart in this.martArray){
        //     console.log("mart");
        //     if(this.favoriteList[fav].name == this.martArray[mart].name){
        //       console.log(this.favoriteList[fav].name);
        //       console.log(this.martArray[mart].name);
        //       if(this.favoriteList[fav].favorite == true){
        //         this.martArray[mart].favorite = true;
        //       }
        //     }
        //   }
        // }
        this.favchange();
        console.log(this.favoriteList);
        console.log(this.martArray);
        this.newDate();
    }
    MartinfoPage.prototype.favchange = function () {
        for (var a in this.favoriteList) {
            console.log("1111111111");
            for (var b in this.martArray) {
                console.log("22222222");
                if (this.favoriteList[a].addr == this.martArray[b].addr) {
                    console.log("33333333");
                }
            }
        }
    };
    MartinfoPage.prototype.martview = function (martinfo) {
        console.log(martinfo);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__martinfoview_martinfoview__["a" /* MartinfoviewPage */], { "martinfo": martinfo });
    };
    MartinfoPage.prototype.regularShare = function () {
        var msg = "백화점 마트 헛걸음 방지 앱\n '백마헛방'\n 쇼핑가기전엔 언제나\n '백마헛방'";
        console.log(msg);
        this.socialSharing.share(msg, null, null, null);
    };
    MartinfoPage.prototype.NoneAd = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__ad_ad__["a" /* AdPage */]);
        modal.present();
    };
    MartinfoPage.prototype.appstore = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__rate_rate__["a" /* RatePage */]);
        modal.present();
    };
    MartinfoPage.prototype.newfunction = function (name) {
        var _this = this;
        console.log(name);
        console.log(this.favoriteList);
        this.userId = "a2f05b91-956a-b480-3525-991002905558";
        console.log(this.area);
        this.firemain.child("mart").once("value", function (sn) {
            for (var a in sn.val()) {
                if (a == name) {
                    if (_this.area == "seoul") {
                        var counting = 0;
                        for (var b in sn.val()[a]) {
                            if (sn.val()[a][b].addr.indexOf("서울") != -1 && sn.val()[a][b].addr.indexOf("서울대학로") == -1) {
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                console.log(_this.martArray);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "gyeonggi") {
                        var counting = 0;
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("경기") != -1) {
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "incheon") {
                        var counting = 0;
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("인천") != -1) {
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "gangwon") {
                        var counting = 0;
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("강원") != -1) {
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "chungbuk") {
                        var counting = 0;
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("충북") != -1) {
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "chungnam") {
                        var counting = 0;
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("충남") != -1) {
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "jeonbuk") {
                        var counting = 0;
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("전북") != -1) {
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "jeonnam") {
                        var counting = 0;
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("전남") != -1) {
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "gwangju") {
                        var counting = 0;
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("광주") != -1) {
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "daejeon") {
                        var counting = 0;
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("대전") != -1) {
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "daegu") {
                        var counting = 0;
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("대구") != -1 && sn.val()[a][b].addr.indexOf("해운대구") == -1) {
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "gyeongbuk") {
                        var counting = 0;
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("경북") != -1) {
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "gyeongnam") {
                        var counting = 0;
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("경남") != -1) {
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "busan") {
                        var counting = 0;
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("부산") != -1) {
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "ulsan") {
                        var counting = 0;
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("울산") != -1) {
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "jeju") {
                        var counting = 0;
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("제주") != -1) {
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                }
            }
        });
    };
    MartinfoPage.prototype.weekcheck = function (number, mart) {
        console.log(number);
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
        console.log(returnvalue);
        return returnvalue;
    };
    MartinfoPage.prototype.vacationFunc = function (v, mart, count) {
        console.log(v); //this.week
        console.log(mart); //db
        console.log(count); //count
        this.cnt = count;
        console.log("mart to change json");
        console.log(this.martArray);
        console.log(mart.vacation);
        var counting = 0;
        this.dayoffarray = [];
        for (var a in v) {
            counting++;
            var flag = false;
            if (counting == 1) {
                console.log("first is");
                console.log(v[a].week, v[a].day + "," + v[a].dayofweek); //오늘 날짜
            }
            console.log(v[a].week); //몇주?
            console.log(v[a].dayofweek); //요일?
            if (mart.vacation.indexOf("첫째") > -1) {
                if (v[a].week.indexOf("첫째") > -1 && v[a].week.indexOf("둘째") > -1) {
                    var weekoff = this.weekcheck("1", this.martArray[count - 1]);
                    console.log("off is : " + weekoff);
                    console.log(weekoff + "1111,,," + v[a].dayofweek);
                    if (this.dayoffarray.length > 6) {
                        console.log("hi");
                    }
                    else if (this.dayoffarray.length <= 6) {
                        if (v[a].week.indexOf("첫째") != 0) {
                            console.log("1 add 1");
                            this.dayoffarray.push("영업");
                        }
                        else {
                            if (weekoff == v[a].dayofweek) {
                                console.log("1 add 2");
                                this.dayoffarray.push("휴무");
                            }
                            else {
                                console.log("1 add 3");
                                this.dayoffarray.push("영업");
                            }
                        }
                    }
                }
            }
            if (mart.vacation.indexOf("둘째") > -1) {
                console.log("2th week");
                console.log(mart);
                console.log(v[a].week);
                if (v[a].week.indexOf("둘째") > -1 || v[a].week.indexOf("셋째") > -1) {
                    var weekoff = this.weekcheck("2", this.martArray[count - 1]);
                    console.log("off is : " + weekoff);
                    console.log(weekoff + "2222,,," + v[a].dayofweek);
                    ;
                    console.log(this.week);
                    if (this.dayoffarray.length > 6) {
                        console.log("hi");
                    }
                    else if (this.dayoffarray.length <= 6) {
                        if (v[a].week.indexOf("둘째") != 0) {
                            console.log("2 add 1");
                            this.dayoffarray.push("영업");
                            flag = true;
                        }
                        else {
                            if (weekoff == v[a].dayofweek) {
                                console.log("2 add 2");
                                this.dayoffarray.push("휴무");
                                flag = true;
                            }
                            else {
                                console.log("2 add 3");
                                this.dayoffarray.push("영업");
                                flag = true;
                            }
                        }
                    }
                }
            }
            if (mart.vacation.indexOf("셋째") > -1) {
                console.log("3th week");
                if (v[a].week.indexOf("셋째") > -1 && v[a].week.indexOf("넷째") > -1) {
                    var weekoff = this.weekcheck("3", this.martArray[count - 1]);
                    console.log("weekoff" + " : " + weekoff);
                    console.log("off is : " + weekoff);
                    console.log(weekoff + "333,,," + v[a].dayofweek);
                    if (this.dayoffarray.length > 6) {
                        console.log("hi");
                    }
                    else if (this.dayoffarray.length <= 6) {
                        if (v[a].week.indexOf("셋째") != 0) {
                            console.log("3 add 1");
                            this.dayoffarray.push("영업");
                        }
                        else {
                            if (weekoff == v[a].dayofweek) {
                                this.dayoffarray.push("휴무");
                                console.log("3 add 2");
                            }
                            else {
                                this.dayoffarray.push("영업");
                                console.log("3 add 3");
                            }
                        }
                    }
                }
            }
            if (mart.vacation.indexOf("넷째") > -1) {
                console.log("4th week");
                // if(v[a].week.indexOf("넷째")>-1&&v[a].week.indexOf("다섯째")>-1){
                var weekoff = this.weekcheck("4", this.martArray[count - 1]);
                console.log("off is : " + weekoff);
                console.log(v[a].week + ",," + weekoff + "444,,,,," + v[a].dayofweek);
                console.log("flag is : " + flag);
                if (this.dayoffarray.length > 6) {
                    console.log("hi");
                }
                else if (this.dayoffarray.length <= 6) {
                    if (v[a].week.indexOf("넷째") != 0) {
                        console.log("4 add 1");
                        if (!flag) {
                            this.dayoffarray.push("영업");
                        }
                        else {
                            flag = false;
                        }
                    }
                    else {
                        if (weekoff == v[a].dayofweek) {
                            console.log("4 add 2");
                            if (!flag) {
                                this.dayoffarray.push("휴무");
                            }
                            else {
                                flag = false;
                            }
                        }
                        else {
                            console.log("4 add 3");
                            if (!flag) {
                                this.dayoffarray.push("영업");
                            }
                            else {
                                flag = false;
                            }
                        }
                    }
                }
            }
            else {
                console.log("hi");
                if (this.dayoffarray.length <= 6) {
                    this.dayoffarray.push("영업");
                }
            }
            console.log(this.dayoffarray);
            console.log("dayofarray");
            this.martArray[count - 1].dayoffarray = this.dayoffarray;
            console.log(this.martArray);
            console.log("done");
            console.log(this.dayoffarray);
            console.log(this.martArray[count - 1]);
            this.today = this.dayoffarray[0];
        }
        console.log(this.dayoffarray);
        this.offdayarray = this.dayoffarray;
        this.offdayyear = [
            { "year": "2020", "seol": "1월25", "chuseok": "10월1" },
            { "year": "2021", "seol": "2월12", "chuseok": "9월21" },
            { "year": "2022", "seol": "2월1", "chuseok": "9월10" },
            { "year": "2023", "seol": "1월22", "chuseok": "9월29" },
            { "year": "2024", "seol": "2월10", "chuseok": "9월17" },
            { "year": "2025", "seol": "1월29", "chuseok": "10월6" },
            { "year": "2026", "seol": "2월17", "chuseok": "9월25" },
            { "year": "2027", "seol": "2월7", "chuseok": "9월15" },
            { "year": "2028", "seol": "1월27", "chuseok": "10월3" },
            { "year": "2029", "seol": "2월13", "chuseok": "9월22" },
            { "year": "2030", "seol": "2월3", "chuseok": "9월12" },
        ];
        for (var off in this.offdayyear) {
            if (this.offdayyear[off].year == this.currentYear) {
                if (this.offdayyear[off].seol == this.currentMonth + "월" + this.currentDate) {
                    console.log(this.currentMonth + "월" + this.currentDate);
                    this.offdayname = "설날";
                }
                if (this.offdayyear[off].chuseok == this.currentMonth + "월" + this.currentDate) {
                    console.log(this.currentMonth + "월" + this.currentDate);
                    this.offdayname = "추석";
                }
                else if (this.offdayyear[off].seol != this.currentMonth + "월" + this.currentDate && this.offdayyear[off].chuseok != this.currentMonth + "월" + this.currentDate) {
                    this.offdayname = "";
                }
                console.log(this.offdayname);
            }
        }
        console.log(this.week);
        for (var off2 in this.week) {
            for (var off3 in this.offdayyear) {
                if (this.offdayyear[off3].year == this.currentYear) {
                    if (this.week[off2].month + "월" + this.week[off2].day == this.offdayyear[off3].seol) {
                        console.log("설날");
                        this.todayy[off2] = "설날";
                        console.log(this.todayy);
                        console.log(this.dayoffarray);
                        this.dayoffarray[off2] = "휴무";
                        console.log(this.dayoffarray);
                        console.log(this.cnt);
                        for (var cnt = 0; cnt < count; cnt++) {
                            this.martArray[count - 1].dayoffarray = this.dayoffarray;
                        }
                    }
                    if (this.week[off2].month + "월" + this.week[off2].day == this.offdayyear[off3].chuseok) {
                        console.log("추석");
                        this.todayy[off2] = "추석";
                        console.log(this.todayy);
                        console.log(this.dayoffarray);
                        this.dayoffarray[off2] = "휴무";
                        console.log(this.dayoffarray);
                        console.log(this.cnt);
                        for (var cnt = 0; cnt < count; cnt++) {
                            this.martArray[count - 1].dayoffarray = this.dayoffarray;
                        }
                    }
                }
            }
        }
    };
    MartinfoPage.prototype.newDate = function () {
        console.log(this.martArray);
        console.log(this.dayoffarray);
        var days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        var prefixes = ['첫째주', '둘째주', '셋째주', '넷째주', '다섯째주'];
        // this.currentMonth = this.date.getMonth() + 1;
        this.currentMonth = this.date.getMonth() - 1;
        this.currentYear = this.date.getFullYear();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        var dayofweek = this.date.getDay();
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        var count = 0;
        console.log("1: " + this.currentDate);
        for (var i = 0; i < 7; i++) {
            console.log(thisNumOfDays);
            var dow = dayofweek++;
            if (dayofweek >= 7) {
                dayofweek = 0;
            }
            if (this.currentDate + i <= thisNumOfDays) {
                this.week.push({ "week": prefixes[0 | (this.currentDate + i - 1) / 7], "month": this.currentMonth, "day": this.currentDate + i, "dayofweek": days[dow] }); //30일
                console.log(dayofweek);
            }
            else if (this.currentDate + i > thisNumOfDays) {
                count++;
                this.week.push({ "week": prefixes[0 | (count + i - 1) / 7], "month": this.currentMonth + 1, "day": count, "dayofweek": days[dow] }); //30일
                console.log(dayofweek);
            }
            console.log(count);
        }
        console.log(this.week);
        console.log(prevNumOfDays); //첫날과 마지막 날을 제외한 이 달의 일수
        console.log(thisNumOfDays); //한 달의 날수
        console.log(lastDayThisMonth); //이 달의 마지막 날의 요일.
    };
    MartinfoPage.prototype.martfunc = function () {
        if (this.mart == "lottemart") {
            this.name = "롯데마트";
            this.img = "./assets/imgs/009-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-롯데마트 CI.png";
            var newnametoinput = "";
            newnametoinput = "lotte";
            this.newfunction(newnametoinput);
        }
        if (this.mart == "emart") {
            this.name = "이마트";
            this.img = "./assets/imgs/010-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-이마트 CI.png";
            var newnametoinput = "";
            newnametoinput = "emart";
            this.newfunction(newnametoinput);
        }
        if (this.mart == "homeplus") {
            this.name = "홈플러스";
            this.img = "./assets/imgs/011-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-홈플러스 CI.png";
            var newnametoinput = "";
            newnametoinput = "homeplus";
            this.newfunction(newnametoinput);
        }
        if (this.mart == "costco") {
            this.name = "코스트코";
            this.img = "./assets/imgs/012-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-코스트코 CI.png";
            var newnametoinput = "";
            newnametoinput = "costco";
            this.newfunction(newnametoinput);
        }
        if (this.mart == "traders") {
            this.name = "이마트 트레이더스";
            this.img = "./assets/imgs/013-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-이마트 트레이더스 CI.png";
            var newnametoinput = "";
            newnametoinput = "traders";
            this.newfunction(newnametoinput);
        }
        if (this.mart == "lottedep") {
            this.name = "롯데 백화점";
            this.img = "./assets/imgs/020-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-롯데백화점 CI.png";
            var newnametoinput = "";
            newnametoinput = "lottedep";
            this.newfunction(newnametoinput);
        }
        if (this.mart == "ssgdep") {
            this.name = "신세계 백화점";
            this.img = "./assets/imgs/021-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-신세백화점 CI.png";
            var newnametoinput = "";
            newnametoinput = "sinsaegae";
            this.newfunction(newnametoinput);
        }
        if (this.mart == "hyundep") {
            this.name = "현대 백화점";
            this.img = "./assets/imgs/022-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-현대백화점 CI.png";
            var newnametoinput = "";
            newnametoinput = "hyundai";
            this.newfunction(newnametoinput);
        }
        if (this.mart == "lotteout") {
            this.name = "롯데 아울렛";
            this.img = "./assets/imgs/023-버튼-PPT 4페이지의 가운데 이미지의 아울렛별 로고-롯데아울렛 CI.png";
            var newnametoinput = "";
            newnametoinput = "lotteoutlet";
            this.newfunction(newnametoinput);
        }
    };
    MartinfoPage.prototype.favorite = function (a, idx) {
        var newnametoinput = "";
        if (this.mart == "lottemart") {
            newnametoinput = "lotte";
        }
        if (this.mart == "emart") {
            newnametoinput = "emart";
        }
        if (this.mart == "homeplus") {
            newnametoinput = "homeplus";
        }
        if (this.mart == "costco") {
            newnametoinput = "costco";
        }
        if (this.mart == "traders") {
            newnametoinput = "traders";
        }
        if (this.mart == "lottedep") {
            newnametoinput = "lottedep";
        }
        if (this.mart == "ssgdep") {
            newnametoinput = "sinsaegae";
        }
        if (this.mart == "hyundep") {
            newnametoinput = "hyundai";
        }
        if (this.mart == "lotteout") {
            newnametoinput = "lotteoutlet";
        }
        console.log(newnametoinput);
        console.log(a); //db
        console.log(idx);
        console.log(this.martArray[idx]);
        console.log(!flag);
        console.log(this.martArray);
        var flag = this.martArray[idx].favorite;
        if (flag != true) {
            this.firemain.child("users").child(this.userId).child("favorite").once("value", function (sn) {
                console.log(sn.val());
            });
            // for(var fav in this.favoriteList){
            //   for(var mart in this.martArray){
            //     if(this.favoriteList[fav].name == this.martArray[mart].name){
            //       if(this.favoriteList[fav].favorite == true){
            //         this.martArray[mart].favorite = true;
            //       }
            //     }
            //   }
            // }
            console.log(this.martArray);
            console.log(this.favoriteList);
            if (this.favoriteList.length < 20) {
                this.martArray[idx].favorite = true;
                this.firemain.child("users").child(this.userId).child("favorite").child(newnametoinput).child(a.key).update(this.martArray[idx]);
                console.log(this.martArray[idx]);
                var toast = this.toastCtrl.create({
                    message: '첫 화면 "즐겨찾기"에 추가되었습니다.',
                    duration: 2000,
                });
                toast.present();
            }
            else if (this.favoriteList.length >= 20) {
                var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_7__favoritemodal_favoritemodal__["a" /* FavoritemodalPage */], null, {
                    cssClass: "modalSize"
                });
                modal.present();
            }
        }
        else {
            flag = false;
            console.log(flag);
            this.martArray[idx].favorite = false;
            this.firemain.child("users").child(this.userId).child("favorite").child(newnametoinput).child(a.key).remove();
            var toast = this.toastCtrl.create({
                message: '삭제되었습니다.',
                duration: 2000,
            });
            toast.present();
        }
    };
    MartinfoPage.prototype.heart = function () {
    };
    MartinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-martinfo',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/martinfo/martinfo.html"*/'<ion-content>\n    <div style="background-color: #71E8E8; margin-bottom:5px; display:flex;">\n        <img src="./assets/imgs/008-버튼-PPT 4페이지의 가운데 이미지의 상단 좌측-말 얼굴.png" style="width:50px; margin:5px;" alt="">\n        <span style="color:white; font-size:18px; font-weight: 900; margin:auto;">즐겨찾기 추가는 "♡"터치</span>\n        <button style="background-color:#71E8E8;"><img src="./assets/imgs/004-버튼-PPT 3페이지의 이미지의 상단 가운데-광고금지.png" (click)="NoneAd()" style="width:25px;"></button>\n        <button style="background-color:#71E8E8;"><img src="./assets/imgs/005-버튼-PPT 3페이지의 이미지의 상단 우측-평가하기 별점주기.png" (click)="appstore()" style="width:25px;"></button>\n        <button style="background-color:#71E8E8;"><img src="./assets/imgs/006-버튼-PPT 3페이지의 이미지의 상단 우측-공유하기 점 세개.png" (click)="regularShare()" style="width:25px;"></button>\n    </div>\n    <div style="background-color: #fafafa;">\n        <ion-item-divider color="light"><img src="{{img}}" style="width:50px;margin-right:10px;">{{name}}</ion-item-divider>\n        <ion-item-group style="background-color: #fafafa;">\n            <div *ngFor="let i of martArray; let idx = index " class="border">\n                <button style="background-color: white;" class="btn1">\n                  <table>\n                    <thead>\n                      <th class="martname" style="margin-top: 10px;" (click)="martview(i)">\n                        {{i.name}}\n                      </th>\n                      <th class="dayoffimg">\n                        <img (click)="martview(i)"*ngIf="today==\'영업\'" src="./assets/imgs/043-버튼-PPT 5페이지의 우측 이미지 영업 알림 버튼-오늘 영업.png" style="width:60%;">\n                        <img (click)="martview(i)" *ngIf="today==\'휴무\'" src="./assets/imgs/044-버튼-PPT 5페이지의 우측 이미지 영업 알림 버튼-오늘 휴무.png" style="width:60%;">\n                        <button (click)="favorite(i, idx);" style="width:40px; height:40px; background-color: white;">\n                          <img class="heart" *ngIf="i.favorite==\'false\'" src="./assets/imgs/045-버튼-PPT 5페이지의 우측 이미지 즐겨찾기 하트 버튼-블랭크 하트(즐겨찾기전).png" style="width:100%;" alt="">\n                          <img class="heart" *ngIf="i.favorite==true" src="./assets/imgs/046-버튼-PPT 5페이지의 우측 이미지 즐겨찾기 하트 버튼-노란 하트(즐겨찾기후).png" style="width:100%;" alt="">\n                          <img class="heart" *ngIf="i.favorite==false" src="./assets/imgs/045-버튼-PPT 5페이지의 우측 이미지 즐겨찾기 하트 버튼-블랭크 하트(즐겨찾기전).png" style="width:100%;" alt="">\n                        </button>\n                </th>\n                </thead>\n                </table>\n                <table>\n                    <tbody>\n                        <tr class="datespan">\n                            <td class="tabletd" *ngFor="let i of todayy" style="margin-top:10px;">\n                                <span *ngIf="i!=\'오늘\'" style="color:red; font-weight: 500;">{{i}}</span>\n                                <span *ngIf="i==\'오늘\'" style="color:rgb(0, 119, 255); font-weight: 500;">{{i}}</span>\n                            </td>\n                        </tr>\n                        <tr class="datespan">\n                            <td *ngFor="let j of week" class="tabletd">\n                                <span>{{j.dayofweek}}</span>\n                            </td>\n                        </tr>\n                        <tr class="datespan">\n                            <td *ngFor="let j of week" class="tabletd">\n                                <span>{{j.month}}/{{j.day}}</span>\n                            </td>\n                        </tr>\n                        <tr class="datespan">\n                            <td *ngFor="let m of i.dayoffarray" class="tabletd">\n                                <span *ngIf="m==\'휴무\'" class="mSpan1">{{m}}</span>\n                                <span *ngIf="m==\'영업\'" class="mSpan2">{{m}}</span>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                </button>\n\n            </div>\n        </ion-item-group>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/martinfo/martinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], MartinfoPage);
    return MartinfoPage;
}());

//# sourceMappingURL=martinfo.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(388);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ad_ad__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_unique_device_id__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_speech_recognition__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_admob_free__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_addshoping_addshoping__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_viewshoppinglist_viewshoppinglist__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_social_sharing__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_setting_setting__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_purchase__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_rate_rate__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_copymodal_copymodal__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_listlimitmodal_listlimitmodal__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_martlist_martlist__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_martmap_martmap__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_martinfo_martinfo__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_martinfoview_martinfoview__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_favoritemodal_favoritemodal__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ionic_long_press__ = __webpack_require__(734);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var firebaseConfig = {
    apiKey: "AIzaSyDTw06TUezPym9Iu9Xw5tqkoMCa5kU7B3w",
    authDomain: "inhand-85421.firebaseapp.com",
    databaseURL: "https://inhand-85421.firebaseio.com",
    projectId: "inhand-85421",
    storageBucket: "inhand-85421.appspot.com",
    messagingSenderId: "552511846926",
    appId: "1:552511846926:web:f3678ad4f1d97e28651a5f"
};
// Initialize Firebase
__WEBPACK_IMPORTED_MODULE_6_firebase___default.a.initializeApp(firebaseConfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_rate_rate__["a" /* RatePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_addshoping_addshoping__["a" /* AddshopingPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_viewshoppinglist_viewshoppinglist__["a" /* ViewshoppinglistPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_setting_setting__["b" /* licenseModalPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_setting_setting__["c" /* privacyModalPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ad_ad__["a" /* AdPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_copymodal_copymodal__["a" /* CopymodalPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_listlimitmodal_listlimitmodal__["a" /* ListlimitmodalPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_martlist_martlist__["a" /* MartlistPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_martmap_martmap__["a" /* MartmapPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_martinfo_martinfo__["a" /* MartinfoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_martinfoview_martinfoview__["a" /* MartinfoviewPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_favoritemodal_favoritemodal__["a" /* FavoritemodalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_30_ionic_long_press__["a" /* LongPressModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_addshoping_addshoping__["a" /* AddshopingPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_rate_rate__["a" /* RatePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_viewshoppinglist_viewshoppinglist__["a" /* ViewshoppinglistPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_setting_setting__["b" /* licenseModalPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_setting_setting__["c" /* privacyModalPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ad_ad__["a" /* AdPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_copymodal_copymodal__["a" /* CopymodalPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_listlimitmodal_listlimitmodal__["a" /* ListlimitmodalPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_martlist_martlist__["a" /* MartlistPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_martmap_martmap__["a" /* MartmapPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_martinfo_martinfo__["a" /* MartinfoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_martinfoview_martinfoview__["a" /* MartinfoviewPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_favoritemodal_favoritemodal__["a" /* FavoritemodalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_purchase__["a" /* InAppPurchase */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    // rootPage:any = MartinfoviewPage;
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/limchae/martapp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/limchae/martapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_purchase__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdPage = /** @class */ (function () {
    function AdPage(iap, navCtrl, navParams, viewCtrl) {
        this.iap = iap;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.more_info = false;
        this.select_option = -1;
        this.option = [
            { price: 990, text: '1개월' },
            { price: 1980, text: '6개월' },
            { price: 3520, text: '1년' },
            { price: 4730, text: '평생' },
        ];
    }
    AdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdPage');
    };
    AdPage.prototype.purchase_base = function () {
        this.iap
            .getProducts(['prod1', 'prod2'])
            .then(function (products) {
            console.log(products);
            //  [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', price: '...' }, ...]
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AdPage.prototype.clickbutton = function (i) {
        console.log(i);
        if (this.select_option == i)
            this.select_option = -1;
        else
            this.select_option = i;
    };
    AdPage.prototype.purchase = function () {
        this.purchase_base();
        this.iap
            .buy('prod1')
            .then(function (data) {
            console.log(data);
            // {
            //   transactionId: ...
            //   receipt: ...
            //   signature: ...
            // }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AdPage.prototype.add_menu = function () {
        //this.viewCtrl.dismiss();
        this.more_info = true;
    };
    AdPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ad',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/ad/ad.html"*/'<ion-content class="main-view" style="background: transparent;\n  background-color: rgb(240, 240, 240);\n  outline-color:rgb(0, 167, 179);\n  border: solid 2px;\n  border-radius: 10px;\n  border-color:rgb(0, 167, 179);\n  height: 80%;\n  width:80%;\n  top: 10%;\n  left:10%;\n  " padding>\n\n    <div style="margin-left:auto; margin-right:auto;">\n        <img src="./assets/imgs/050-배경 이미지-PPT 15페이지의  우측 이미지-이마 프리미엄 글씨+말얼굴.png" alt="">\n        <div style="margin-right:auto; margin-left:auto;">\n\n            <a class="test" *ngFor="let opt of option; let i = index" style="margin-left:auto; margin-right:auto;">\n\n                <button type="button" (click)="clickbutton(i)" [ngClass]="select_option===i?\'B_on\':\'B_off\'" *ngIf="more_info||(i==0||i==3)" style="width: 45%; margin-right:auto; margin-left:auto;">\n              <img *ngIf="opt.price==990" src="./assets/imgs/051-버튼-PPT 15페이지의  우측 이미지-990원(선택 전 테두리 없음).png" style="width:100%; margin-right:auto; margin-left:auto;" alt="">\n              <img *ngIf="opt.price==1980" src="./assets/imgs/059-버튼-PPT 16페이지의  우측 이미지-1980원(선택 전 테두리 없음).png" style="width:100%; margin-right:auto; margin-left:auto;" alt="">\n              <img *ngIf="opt.price==3520" src="./assets/imgs/061-버튼-PPT 16페이지의  우측 이미지-3520원(선택 전 테두리 없음).png" style="width:100%; margin-right:auto; margin-left:auto;" alt="">\n              <img *ngIf="opt.price==4730" src="./assets/imgs/053-버튼-PPT 15페이지의  우측 이미지-4730원(선택 전 테두리 없음).png" style="width:100%; margin-right:auto; margin-left:auto;" alt="">\n\n        <!-- {{opt.price}}원 -->\n        <br>\n        <!-- {{opt.text}} -->\n        </button>\n\n            </a>\n        </div>\n\n\n        <button type="button" *ngIf="more_info===false" (click)="add_menu()" style="width: 45%; margin-right:auto; margin-left:auto; background-color:rgb(240,240,240);">\n          <img src="./assets/imgs/057-버튼-PPT 15페이지의  우측 이미지-더 많은 정보 보기(선택 전 테두리 없음).png" style="margin-left:auto; margin-right:auto;" alt=" ">\n      <!-- 더 많은 정보 보기 -->\n    </button>\n        <!-- <button ion-button *ngIf="more_info===true " (click)="dismiss() "> -->\n        <!-- 닫기\n        </button> -->\n\n        <button type="button" (click)="purchase() " style="width: 45%; margin-right:auto; margin-left:auto; background-color:rgb(240,240,240);">\n        <img src="./assets/imgs/055-버튼-PPT 15페이지의  우측 이미지-ok 계속하기(선택 전 테두리 없음).png" alt="">\n        <!-- OK계속하기 -->\n        </button>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/ad/ad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_purchase__["a" /* InAppPurchase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], AdPage);
    return AdPage;
}());

//# sourceMappingURL=ad.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RatePage = /** @class */ (function () {
    function RatePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    RatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RatePage');
    };
    RatePage.prototype.appstore = function () {
        window.open('market://details?id=com.kakao.talk', '_system');
    };
    RatePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rate',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/rate/rate.html"*/'<ion-content class="main-view" style="background: transparent;\n  background-color: rgb(240, 240, 240);\n  outline-color:black;\n  border: solid 2px;\n  border-radius: 10px;\n  border-color:rgb(0, 167, 179);\n  height: 60%;\n  width:80%;\n  top: 10%;\n  left:10%;\n  " padding>\n\n    <div style="text-align: center;">\n        <img src="./assets/imgs/063-배경 이미지-PPT 18페이지의  우측 이미지-이마 별5개+말얼굴.png" alt="">\n        <span>앱 평가하러 가기</span>\n        <!-- <button ion-button (click)="appstore()"> 앱 평가하기</button> -->\n\n    </div>\n    <div style="text-align:center; margin-left: auto; margin-right:auto;">\n        <button ion-button (click)="dismiss()" ng-show="more_info" style="height:30px; margin-left:50px; margin-right:10px;">아니요</button>\n        <button ion-button (click)="appstore()" style="height:30px; margin-left:10px; margin-right: 50px;">예</button>\n\n    </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/rate/rate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], RatePage);
    return RatePage;
}());

//# sourceMappingURL=rate.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number___ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_unique_device_id__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addshoping_addshoping__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__viewshoppinglist_viewshoppinglist__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__setting_setting__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ad_ad__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rate_rate__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__copymodal_copymodal__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__listlimitmodal_listlimitmodal__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_onesignal__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__martlist_martlist__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__martinfoview_martinfoview__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__favoritemodal_favoritemodal__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var HomePage = /** @class */ (function () {
    function HomePage(modal, socialSharing, iab, uniqueDeviceID, alertCtrl, callnumber, admobFree, navCtrl, platform, navParams, oneSignal, toastCtrl, loadingCtrl) {
        var _this = this;
        this.modal = modal;
        this.socialSharing = socialSharing;
        this.iab = iab;
        this.uniqueDeviceID = uniqueDeviceID;
        this.alertCtrl = alertCtrl;
        this.callnumber = callnumber;
        this.admobFree = admobFree;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.oneSignal = oneSignal;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.firemain = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref();
        this.newarraylist = [];
        this.id = "a2f05b91-956a-b480-3525-991002905558";
        this.tab = "tab1";
        this.nextdirectory = this.firemain.child("users").child(this.id);
        this.count = 0;
        this.copyflag = false;
        this.checkedlistlength = 0;
        this.listcount = 0;
        this.favoriteList = [];
        this.logo = [];
        this.weekarr = [];
        this.today = [];
        this.martkind = [];
        this.martinfo = [];
        this.shopping = false;
        this.offday = [];
        this.date = new Date();
        this.thismonth = [];
        this.week = [];
        this.offdayyear = [];
        this.firstDate = new Date(this.year, this.month, 1).getDay(); //첫날의 요일
        this.lastDate = new Date(this.year, this.month + 1, 0); //마지막 날의 요일
        this.dayoffarray = [];
        this.srct = {
            text: '',
            url: '',
        };
        this.presentLoadingDefault();
        this.fabButtonOpened = false;
        this.refreshname();
        this.favorite();
        this.today.push("오늘", "", "", "", "", "", "");
        console.log(this.today);
        this.newDate();
        setTimeout(function () {
            _this.uniqueDeviceID.get()
                .then(function (uuid) { _this.id = uuid; console.log(uuid); })
                .catch(function (error) { return console.log(error); });
            var bannerConfig = {
                // add your config here
                // for the sake of this example we will just use the test config
                isTesting: true,
                autoShow: true
            };
            _this.admobFree.banner.config(bannerConfig);
            _this.admobFree.banner.prepare()
                .then(function () {
                // banner Ad is ready
                console.log("ok");
                _this.admobFree.banner.show().then(function () {
                    console.log("success");
                }).catch(function (e) {
                    console.log(e);
                });
                // if we set autoShow to false, then we will need to call the show method here
            })
                .catch(function (e) { return console.log(e); });
        }, 3000);
    }
    HomePage_1 = HomePage;
    HomePage.prototype.newDate = function () {
        var days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        var prefixes = ['첫째주', '둘째주', '셋째주', '넷째주', '다섯째주'];
        // this.currentMonth = this.date.getMonth() + 1;
        this.currentMonth = this.date.getMonth() - 1;
        this.currentYear = this.date.getFullYear();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        var dayofweek = this.date.getDay();
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        // var aaaa = this.currentDate+12;
        var count = 0;
        console.log("1: " + this.currentDate);
        for (var i = 0; i < 7; i++) {
            console.log(thisNumOfDays);
            // if(dayofweek+i>=7){dayofweek=0;}
            var dow = dayofweek++;
            if (dayofweek >= 7) {
                dayofweek = 0;
            }
            if (this.currentDate + i <= thisNumOfDays) {
                this.week.push({ "week": prefixes[0 | (this.currentDate + i - 1) / 7], "month": this.currentMonth, "day": this.currentDate + i, "dayofweek": days[dow] }); //30일
                console.log(dayofweek);
            }
            else if (this.currentDate + i > thisNumOfDays) {
                count++;
                this.week.push({ "week": prefixes[0 | (count + i - 1) / 7], "month": this.currentMonth + 1, "day": count, "dayofweek": days[dow] }); //30일
                console.log(dayofweek);
            }
        }
        console.log(this.week);
        console.log(prevNumOfDays); //첫날과 마지막 날을 제외한 이 달의 일수
        console.log(thisNumOfDays); //한 달의 날수
        console.log(lastDayThisMonth); //이 달의 마지막 날의 요일.
    };
    HomePage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'loading'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 3000);
    };
    HomePage.prototype.martview = function (martinfo) {
        console.log(martinfo);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__martinfoview_martinfoview__["a" /* MartinfoviewPage */], { "martinfo": martinfo });
    };
    HomePage.prototype.favorite = function () {
        var _this = this;
        var count = 0;
        this.firemain.child("users").child(this.id).child("favorite").once("value", function (sn) {
            console.log(sn.val());
            for (var i in sn.val()) {
                console.log(i);
                _this.martkind.push(i);
                console.log(sn.val()[i]);
                for (var j in sn.val()[i]) {
                    count++;
                    _this.todayoff = sn.val()[i][j].dayoffarray[1];
                    console.log(_this.todayoff);
                    console.log(sn.val()[i][j].dayoffarray);
                    _this.favoriteList.push(sn.val()[i][j]);
                    console.log(_this.favoriteList);
                    _this.vacationFunc(_this.week, sn.val()[i][j], count);
                }
            }
        });
        console.log(this.favoriteList);
        console.log(this.favoriteList.length);
        if (this.favoriteList.length >= 6) {
            var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_19__favoritemodal_favoritemodal__["a" /* FavoritemodalPage */]);
            modal.present();
            // this.firemain.child("users").child(this.id).child("favorte").remove();
        }
    };
    HomePage.prototype.weekcheck = function (number, mart) {
        console.log(number);
        console.log(mart);
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
        console.log(returnvalue);
        return returnvalue;
    };
    HomePage.prototype.vacationFunc = function (week, mart, count) {
        console.log(week);
        console.log(mart.vacation);
        console.log(count);
        this.cnt = count;
        console.log(this.cnt);
        var counting = 0;
        this.dayoffarray = [];
        for (var a in week) {
            counting++;
            var flag = false;
            if (counting == 1) {
                console.log("오늘은 " + week[a].week + " " + week[a].day + "일 " + week[a].dayofweek);
            }
            if (mart.vacation.indexOf("첫째") > -1) {
                if (week[a].week.indexOf("첫째") > -1 && week[a].week.indexOf("둘째") > -1) {
                    var weekoff = this.weekcheck("1", mart);
                    console.log("off is : " + weekoff);
                    console.log(weekoff + "1111,,," + week[a].dayofweek);
                    if (this.dayoffarray.length > 6) {
                        console.log("hi");
                    }
                    else if (this.dayoffarray.length <= 6) {
                        if (week[a].week.indexOf("첫째") != 0) {
                            console.log("1 add 1");
                            this.dayoffarray.push("영업");
                        }
                        else {
                            if (weekoff == week[a].dayofweek) {
                                console.log("1 add 2");
                                this.dayoffarray.push("휴무");
                            }
                            else {
                                console.log("1 add 3");
                                this.dayoffarray.push("영업");
                            }
                        }
                    }
                }
            }
            if (mart.vacation.indexOf("둘째") > -1) {
                console.log("2th week");
                console.log(mart);
                console.log(week[a].week);
                if (week[a].week.indexOf("둘째") > -1 || week[a].week.indexOf("셋째") > -1) {
                    var weekoff = this.weekcheck("2", mart);
                    console.log("off is : " + weekoff);
                    console.log(weekoff + "2222,,," + week[a].dayofweek);
                    ;
                    console.log(this.week);
                    if (this.dayoffarray.length > 6) {
                        console.log("hi");
                    }
                    else if (this.dayoffarray.length <= 6) {
                        if (week[a].week.indexOf("둘째") != 0) {
                            console.log("2 add 1");
                            this.dayoffarray.push("영업");
                            flag = true;
                        }
                        else {
                            if (weekoff == week[a].dayofweek) {
                                console.log("2 add 2");
                                this.dayoffarray.push("휴무");
                                flag = true;
                            }
                            else {
                                console.log("2 add 3");
                                this.dayoffarray.push("영업");
                                flag = true;
                            }
                        }
                    }
                }
            }
            if (mart.vacation.indexOf("셋째") > -1) {
                console.log("3th week");
                if (week[a].week.indexOf("셋째") > -1 && week[a].week.indexOf("넷째") > -1) {
                    var weekoff = this.weekcheck("3", mart);
                    console.log("weekoff" + " : " + weekoff);
                    console.log("off is : " + weekoff);
                    console.log(weekoff + "333,,," + week[a].dayofweek);
                    if (this.dayoffarray.length > 6) {
                        console.log("hi");
                    }
                    else if (this.dayoffarray.length <= 6) {
                        if (week[a].week.indexOf("셋째") != 0) {
                            console.log("3 add 1");
                            this.dayoffarray.push("영업");
                        }
                        else {
                            if (weekoff == week[a].dayofweek) {
                                this.dayoffarray.push("휴무");
                                console.log("3 add 2");
                            }
                            else {
                                this.dayoffarray.push("영업");
                                console.log("3 add 3");
                            }
                        }
                    }
                }
            }
            if (mart.vacation.indexOf("넷째") > -1) {
                console.log("4th week");
                var weekoff = this.weekcheck("4", mart);
                console.log("off is : " + weekoff);
                console.log(week[a].week + ",," + weekoff + "444,,,,," + week[a].dayofweek);
                console.log("flag is : " + flag);
                if (this.dayoffarray.length > 6) {
                    console.log("hi");
                }
                else if (this.dayoffarray.length <= 6) {
                    if (week[a].week.indexOf("넷째") != 0) {
                        console.log("4 add 1");
                        if (!flag) {
                            this.dayoffarray.push("영업");
                        }
                        else {
                            flag = false;
                        }
                    }
                    else {
                        if (weekoff == week[a].dayofweek) {
                            console.log("4 add 2");
                            if (!flag) {
                                this.dayoffarray.push("휴무");
                            }
                            else {
                                flag = false;
                            }
                        }
                        else {
                            console.log("4 add 3");
                            if (!flag) {
                                this.dayoffarray.push("영업");
                            }
                            else {
                                flag = false;
                            }
                        }
                    }
                }
            }
            else {
                console.log("hi");
                if (this.dayoffarray.length <= 6) {
                    this.dayoffarray.push("영업");
                }
            }
            console.log(count);
            console.log(this.favoriteList);
            this.favoriteList[count - 1].dayoffarray = this.dayoffarray;
            // console.log(this.favoriteList[count-1].dayoffarry);
            // this.favoriteList[count-1].dayoffarray = this.dayoffarray;
        }
    };
    HomePage.prototype.bookmark = function (a, idx) {
        this.favoriteIndex = idx;
        this.martinfo = a;
        console.log(this.martinfo);
        console.log(this.martkind);
        console.log(a);
        console.log(a.key);
        console.log(idx);
        console.log(this.martkind[idx]);
        this.firemain.child("users").child(this.id).child("favorite").child(this.martkind[idx]).child(a.key).remove();
        var toast = this.toastCtrl.create({
            message: '삭제되었습니다.',
            duration: 2000,
        });
        toast.present();
        this.navCtrl.push(HomePage_1);
    };
    HomePage.prototype.main = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__martlist_martlist__["a" /* MartlistPage */]);
    };
    HomePage.prototype.openFabButton = function () {
        if (this.fabButtonOpened == false) {
            this.fabButtonOpened = true;
        }
        else {
            this.fabButtonOpened = false;
        }
    };
    HomePage.prototype.refreshname = function () {
        var _this = this;
        // console.log(this.newarraylist);
        this.newarraylist = [];
        this.firemain.child("users").child(this.id).once("value", function (sn) {
            for (var a in sn.val()) {
                if (a != "setting" && a != "favorite" && a != "deviceID") {
                    // console.log(sn.val()[a]);
                    for (var b in sn.val()[a]) {
                        _this.listcount++;
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
                            var aa = sn.val()[a][b][c].time.split("일");
                            console.log(aa[0]);
                            var bb = aa[0].split("월");
                            console.log(bb[0]);
                            console.log(bb[1]);
                            console.log(_this.currentMonth);
                            console.log(_this.currentDate);
                            console.log(_this.currentYear);
                            _this.offdayyear = [
                                { "year": "2020", "seol": "1월25", "chuseok": "10월1" },
                                { "year": "2021", "seol": "2월12", "chuseok": "9월21" },
                                { "year": "2022", "seol": "2월1", "chuseok": "9월10" },
                                { "year": "2023", "seol": "1월22", "chuseok": "9월29" },
                                { "year": "2024", "seol": "2월10", "chuseok": "9월17" },
                                { "year": "2025", "seol": "1월29", "chuseok": "10월6" },
                                { "year": "2026", "seol": "2월17", "chuseok": "9월25" },
                                { "year": "2027", "seol": "2월7", "chuseok": "9월15" },
                                { "year": "2028", "seol": "1월27", "chuseok": "10월3" },
                                { "year": "2029", "seol": "2월13", "chuseok": "9월22" },
                                { "year": "2030", "seol": "2월3", "chuseok": "9월12" },
                            ];
                            for (var off in _this.offdayyear) {
                                if (_this.offdayyear[off].year == _this.currentYear) {
                                    if (_this.offdayyear[off].seol == _this.currentMonth + "월" + _this.currentDate) {
                                        console.log(_this.currentMonth + "월" + _this.currentDate);
                                        _this.offdayname = "설날";
                                    }
                                    if (_this.offdayyear[off].chuseok == _this.currentMonth + "월" + _this.currentDate) {
                                        console.log(_this.currentMonth + "월" + _this.currentDate);
                                        _this.offdayname = "추석";
                                    }
                                    else if (_this.offdayyear[off].seol != _this.currentMonth + "월" + _this.currentDate && _this.offdayyear[off].chuseok != _this.currentMonth + "월" + _this.currentDate) {
                                        _this.offdayname = "";
                                    }
                                    console.log(_this.offdayname);
                                }
                            }
                            console.log(_this.week);
                            for (var off2 in _this.week) {
                                for (var off3 in _this.offdayyear) {
                                    if (_this.offdayyear[off3].year == _this.currentYear) {
                                        if (_this.week[off2].month + "월" + _this.week[off2].day == _this.offdayyear[off3].seol) {
                                            console.log("설날");
                                            _this.today[off2] = "설날";
                                            console.log(_this.today);
                                            _this.dayoffarray[off2] = "휴무";
                                            console.log(_this.dayoffarray);
                                            console.log(_this.cnt);
                                            for (var count = 0; count < _this.cnt; count++) {
                                                console.log(count);
                                                _this.favoriteList[count].dayoffarray = _this.dayoffarray;
                                            }
                                        }
                                        if (_this.week[off2].month + "월" + _this.week[off2].day == _this.offdayyear[off3].chuseok) {
                                            console.log("추석");
                                            _this.today[off2] = "추석";
                                            console.log(_this.today);
                                            _this.dayoffarray[off2] = "휴무";
                                            console.log(_this.dayoffarray);
                                            console.log(_this.cnt);
                                            for (var count = 0; count < _this.cnt; count++) {
                                                console.log(count);
                                                _this.favoriteList[count].dayoffarray = _this.dayoffarray;
                                            }
                                        }
                                    }
                                }
                            }
                            console.log(_this.offdayyear);
                            if (_this.currentMonth == bb[0]) {
                                if (_this.currentDate == bb[1]) {
                                    console.log("오늘");
                                    _this.newarraylist.push({ "totallist": listlength, "totalchecked": checked, "flag": a, "list": sn.val()[a][b][c].list, "title": b, "time": "오늘" + sn.val()[a][b][c].time, "key": sn.val()[a][b][c].key });
                                }
                                if (_this.currentDate - 1 == bb[1]) {
                                    console.log("어제");
                                    _this.newarraylist.push({ "totallist": listlength, "totalchecked": checked, "flag": a, "list": sn.val()[a][b][c].list, "title": b, "time": "어제" + sn.val()[a][b][c].time, "key": sn.val()[a][b][c].key });
                                }
                                else if (_this.currentDate != bb[1] && _this.currentDate - 1 != bb[1]) {
                                    console.log("다른 날");
                                    _this.newarraylist.push({ "totallist": listlength, "totalchecked": checked, "flag": a, "list": sn.val()[a][b][c].list, "title": b, "time": sn.val()[a][b][c].time, "key": sn.val()[a][b][c].key });
                                }
                            }
                            else if (_this.currentMonth != bb[0]) {
                                _this.newarraylist.push({ "totallist": listlength, "totalchecked": checked, "flag": a, "list": sn.val()[a][b][c].list, "title": b, "time": sn.val()[a][b][c].time, "key": sn.val()[a][b][c].key });
                            }
                        }
                    }
                    // console.log(this.listcount);
                }
            }
        });
        this.listcount = 0;
    };
    HomePage.prototype.segmentChanged = function (e) {
        console.log(e);
    };
    HomePage.prototype.callnumbering = function () {
        window.alert("call number start");
        this.callnumber.callNumber("0630000000", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    HomePage.prototype.regularShare = function () {
        var msg = "백화점 마트 헛걸음 방지 앱\n '백마헛방'\n 쇼핑가기전엔 언제나\n '백마헛방'";
        console.log(msg);
        this.socialSharing.share(msg, null, null, null);
    };
    HomePage.prototype.addlist = function (value) {
        var _this = this;
        this.selectedvalue = value;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '확인',
                    handler: function (data) {
                        var limitarray = [];
                        console.log(_this.listcount);
                        console.log(value);
                        if (_this.listcount >= 50) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__listlimitmodal_listlimitmodal__["a" /* ListlimitmodalPage */], { "flag": _this.selectedvalue, "obj": _this.newarraylist, "title": data.title, "id": _this.id, "key": value.key }).then(function () {
                                _this.navCtrl.getActive().onDidDismiss(function (data) {
                                    if (data.value) {
                                        console.log(data.value);
                                        for (var a = 0; a < _this.newarraylist.length; a++) {
                                            console.log(data.value.title);
                                            if (_this.newarraylist[a].title == data.value.title) {
                                                _this.nextdirectory.child(_this.newarraylist[a].flag).child(_this.newarraylist[a].title).remove().then(function () {
                                                    console.log("success");
                                                });
                                            }
                                        }
                                    }
                                    else {
                                        console.log("success");
                                    }
                                });
                            });
                        }
                        else {
                            var key = _this.nextdirectory.push().key;
                            _this.firemain.child("users").child(_this.id).child(value).child(data.title).child(key).update({ "flag": "notyet" });
                            console.log("selected value" + _this.selectedvalue);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__addshoping_addshoping__["a" /* AddshopingPage */], { "flag": _this.selectedvalue, "key": key, "id": _this.id, "title": data.title }).then(function () {
                                _this.navCtrl.getActive().onDidDismiss(function (data) {
                                    console.log("dismiss detect");
                                    _this.refreshname();
                                });
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.deleteDB = function (key) {
        var _this = this;
        console.log("delete come");
        console.log(key);
        console.log(this.nextdirectory);
        console.log(key.title);
        console.log(key.flag);
        var alert = this.alertCtrl.create({
            title: '선택된 품목(들)을 정말로 삭제하시겠습니까?',
            buttons: [
                {
                    text: '취소',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '확인',
                    handler: function (data) {
                        if (key.flag == "mart") {
                            _this.nextdirectory.child("mart").child(key.title).remove().then(function () {
                                window.alert("삭제되었습니다.");
                                console.log("success");
                                _this.refreshname();
                            }).catch(function (e) {
                                console.log("error" + e);
                            });
                        }
                        if (key.flag == "dep") {
                            _this.nextdirectory.child("dep").child(key.title).remove().then(function () {
                                window.alert("삭제되었습니다.");
                                console.log("success");
                                _this.refreshname();
                            }).catch(function (e) {
                                console.log("error" + e);
                            });
                        }
                        if (key.flag == "outlet") {
                            _this.nextdirectory.child("outlet").child(key.title).remove().then(function () {
                                window.alert("삭제되었습니다.");
                                console.log("success");
                                _this.refreshname();
                            }).catch(function (e) {
                                console.log("error" + e);
                            });
                        }
                        if (key.flag == "etc") {
                            _this.nextdirectory.child("etc").child(key.title).remove().then(function () {
                                window.alert("삭제되었습니다.");
                                console.log("success");
                                _this.refreshname();
                            }).catch(function (e) {
                                console.log("error" + e);
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.viewshoppinglist = function (a) {
        var _this = this;
        console.log(this.copyflag);
        console.log(a);
        console.log(a.key);
        console.log(a.flag);
        console.log(a.list);
        if (this.copyflag) {
            var alert_1 = this.alertCtrl.create({
                title: '해당 목록에 덧붙이시겠습니까?',
                buttons: [
                    {
                        text: '취소',
                        role: 'cancel',
                        handler: function (data) {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: '확인',
                        handler: function (data) {
                            /*전체항목 기존복사*/
                            if (_this.selectedflagtocpy == 3) {
                                console.log(newarray);
                                var newarray = [];
                                for (var b = 0; b < a.list.length; b++) {
                                    newarray.push(a.list[b]);
                                }
                                for (var b = 0; b < _this.tocopylist.length; b++) {
                                    newarray.push(_this.tocopylist[b]);
                                }
                                if (a.flag == "mart") {
                                    var name = a.title;
                                    _this.firemain.child("users").child(_this.id).child("mart").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a.key);
                                    });
                                    _this.refreshname();
                                }
                                if (a.flag == "dep") {
                                    var name = a.title;
                                    _this.firemain.child("users").child(_this.id).child("dep").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a.key);
                                    });
                                    _this.refreshname();
                                }
                                if (a.flag == "outlet") {
                                    var name = a.title;
                                    _this.firemain.child("users").child(_this.id).child("outlet").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a.key);
                                    });
                                    _this.refreshname();
                                }
                                if (a.flag == "etc") {
                                    var name = a.title;
                                    _this.firemain.child("users").child(_this.id).child("etc").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a.key);
                                    });
                                    _this.refreshname();
                                }
                                _this.copyflag = false;
                            }
                            /*구입한 항목 기존복사*/
                            else if (_this.selectedflagtocpy == 2) {
                                var newarray = [];
                                for (var b = 0; b < a.list.length; b++) {
                                    newarray.push(a.list[b]);
                                }
                                for (var i = 0; i < _this.tocopylist.length; i++) {
                                    if (_this.tocopylist[i].checked == true) {
                                        newarray.push(_this.tocopylist[i]);
                                        console.log(newarray);
                                    }
                                }
                                console.log(newarray);
                                a.list = [];
                                for (var i = 0; i < newarray.length; i++) {
                                    a.list.push(newarray[i]);
                                }
                                console.log(newarray);
                                if (a.flag == "mart") {
                                    var name = a.title;
                                    _this.firemain.child("users").child(_this.id).child("mart").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a);
                                    });
                                    _this.refreshname();
                                }
                                if (a.flag == "dep") {
                                    var name = a.title;
                                    _this.firemain.child("users").child(_this.id).child("dep").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a);
                                    });
                                    _this.refreshname();
                                }
                                if (a.flag == "outlet") {
                                    var name = a.title;
                                    _this.firemain.child("users").child(_this.id).child("outlet").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a);
                                    });
                                    _this.refreshname();
                                }
                                if (a.flag == "etc") {
                                    var name = a.title;
                                    _this.firemain.child("users").child(_this.id).child("etc").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a);
                                    });
                                    _this.refreshname();
                                }
                                _this.copyflag = false;
                            }
                            /*구입하지 않은 항목 기존복사 */
                            else if (_this.selectedflagtocpy == 1) {
                                var newarray = [];
                                for (var b = 0; b < a.list.length; b++) {
                                    newarray.push(a.list[b]);
                                }
                                for (var i = 0; i < _this.tocopylist.length; i++) {
                                    if (_this.tocopylist[i].checked == false) {
                                        newarray.push(_this.tocopylist[i]);
                                        console.log(newarray);
                                    }
                                }
                                console.log(newarray);
                                a.list = [];
                                for (var i = 0; i < newarray.length; i++) {
                                    a.list.push(newarray[i]);
                                }
                                console.log(newarray);
                                if (a.flag == "mart") {
                                    var name = a.title;
                                    _this.firemain.child("users").child(_this.id).child("mart").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a);
                                    });
                                    _this.refreshname();
                                }
                                if (a.flag == "dep") {
                                    var name = a.title;
                                    _this.firemain.child("users").child(_this.id).child("dep").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a);
                                    });
                                    _this.refreshname();
                                }
                                if (a.flag == "outlet") {
                                    var name = a.title;
                                    _this.firemain.child("users").child(_this.id).child("outlet").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a);
                                    });
                                    _this.refreshname();
                                }
                                if (a.flag == "etc") {
                                    var name = a.title;
                                    _this.firemain.child("users").child(_this.id).child("outlet").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a);
                                    });
                                    _this.refreshname();
                                }
                                _this.copyflag = false;
                            }
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            console.log(a);
            console.log(this.id);
            console.log(a.key);
            console.log(a.list);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__viewshoppinglist_viewshoppinglist__["a" /* ViewshoppinglistPage */], { "flag": a.flag, "obj": a, "id": this.id, "key": a.key }).then(function () {
                _this.navCtrl.getActive().onDidDismiss(function (data) {
                    _this.refreshname();
                });
            });
            console.log(a.flag);
        }
    };
    HomePage.prototype.select_sort = function () {
        this.srct.url = 'https://msearch.shopping.naver.com/search/all.nhn?origQuery=' + this.srct.text + '&pagingIndex=1&pagingSize=40&viewType=list&sort=' + __WEBPACK_IMPORTED_MODULE_8_jquery__("#slt").val() + '&frm=NVSHATC&query=' + this.srct.text;
        //            https://search.shopping.naver.com/search/all.nhn?origQuery=신라면&pagingIndex=1&pagingSize=40&viewType=list&sort=review&frm=NVSHATC&query=신라면
        console.log(__WEBPACK_IMPORTED_MODULE_8_jquery__('#slt').val());
        console.log(this.srct.text);
        console.log(this.srct.url);
        var browser = this.iab.create(this.srct.url, "_blank", "location=no,toolbar=no");
        //browser.executeScript({code:'document.cookie;'}).then((cookie)=>console.log(cookie))
        //browser.insertCSS(...);
        browser.on('loadstop').subscribe(function (event) {
            browser.insertCSS({ code: "body{color: red;" });
        });
        //browser.close();
    };
    HomePage.prototype.setting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__setting_setting__["a" /* SettingPage */]);
    };
    HomePage.prototype.NoneAd = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_12__ad_ad__["a" /* AdPage */]);
        modal.present();
    };
    HomePage.prototype.appstore = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_13__rate_rate__["a" /* RatePage */]);
        modal.present();
    };
    /*목록명 변경*/
    HomePage.prototype.changeName = function (key) {
        var _this = this;
        console.log(key);
        console.log(key.title);
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '확인',
                    handler: function (data) {
                        if (key.flag == "mart") {
                            console.log(key.title);
                            _this.nextdirectory.child("mart").child(key.title).remove().then(function () {
                                console.log("success");
                            });
                            _this.firemain.child("users").child(_this.id).child("mart").child(data.title).child(key.key).update(key).then(function () {
                                console.log(key);
                                console.log(key.key);
                                key.title = data.title;
                                window.alert("변경되었습니다.");
                            });
                        }
                        if (key.flag == "dep") {
                            console.log(key.title);
                            _this.nextdirectory.child("dep").child(key.title).remove().then(function () {
                                console.log("success");
                            });
                            _this.firemain.child("users").child(_this.id).child("dep").child(data.title).child(key.key).update(key).then(function () {
                                console.log(key);
                                console.log(key.key);
                                key.title = data.title;
                                window.alert("변경되었습니다.");
                            });
                        }
                        if (key.flag == "outlet") {
                            console.log(key.title);
                            _this.nextdirectory.child("outlet").child(key.title).remove().then(function () {
                                console.log("success");
                            });
                            _this.firemain.child("users").child(_this.id).child("outlet").child(data.title).child(key.key).update(key).then(function () {
                                console.log(key);
                                console.log(key.key);
                                key.title = data.title;
                                window.alert("성공");
                            });
                        }
                        if (key.flag == "etc") {
                            console.log(key.title);
                            _this.nextdirectory.child("etc").child(key.title).remove().then(function () {
                                console.log("success");
                            });
                            _this.firemain.child("users").child(_this.id).child("etc").child(data.title).child(key.key).update(key).then(function () {
                                console.log(key);
                                console.log(key.key);
                                key.title = data.title;
                                window.alert("성공");
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    /*공유*/
    HomePage.prototype.share = function (key) {
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
    };
    /*전체 항목 복사*/
    HomePage.prototype.newAllcopy = function (key) {
        var count = 1;
        if (key.flag == "mart") {
            var count = count;
            var a = key.title + "-복사본" + count;
            this.firemain.child("users").child(this.id).child("mart").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
            count++;
            console.log(count);
        }
        if (key.flag == "dep") {
            var a = key.title + "-복사본";
            this.firemain.child("users").child(this.id).child("dep").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "outlet") {
            var a = key.title + "-복사본";
            this.firemain.child("users").child(this.id).child("outlet").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "etc") {
            var a = key.title + "-복사본";
            this.firemain.child("users").child(this.id).child("etc").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
    };
    /*구입한 항목 복사 */
    HomePage.prototype.newHavecopy = function (key) {
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
            key.list.push(checked[i]);
        }
        if (key.flag == "mart") {
            var a = key.title + "-복사본";
            this.firemain.child("users").child(this.id).child("mart").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "dep") {
            var a = key.title + "-복사본";
            this.firemain.child("users").child(this.id).child("dep").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "outlet") {
            var a = key.title + "-복사본";
            this.firemain.child("users").child(this.id).child("outlet").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "etc") {
            var a = key.title + "-복사본";
            this.firemain.child("users").child(this.id).child("etc").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
    };
    /*구입하지 않은 항목 복사 */
    HomePage.prototype.newWillcopy = function (key) {
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
            key.list.push(unchecked[i]);
        }
        if (key.flag == "mart") {
            var a = key.title + "-복사본";
            this.firemain.child("users").child(this.id).child("mart").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "dep") {
            var a = key.title + "-복사본";
            this.firemain.child("users").child(this.id).child("dep").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "outlet") {
            var a = key.title + "-복사본";
            this.firemain.child("users").child(this.id).child("outlet").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "etc") {
            var a = key.title + "-복사본";
            this.firemain.child("users").child(this.id).child("etc").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
    };
    HomePage.prototype.oldAllcopy = function (key, flag) {
        this.selectedflagtocpy = flag;
        console.log("copy old all");
        this.copyflag = true;
    };
    HomePage.prototype.oldHavecopy = function (key, flag) {
        this.selectedflagtocpy = flag;
        console.log("copy old old");
        this.copyflag = true;
    };
    HomePage.prototype.oldWillcopy = function (key, flag) {
        this.selectedflagtocpy = flag;
        console.log("copy old will");
        this.copyflag = true;
    };
    HomePage.prototype.openModal = function (key) {
        var _this = this;
        console.log(key);
        this.tocopylist = key.list;
        this.tocopy = key;
        console.log(this.tocopylist);
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_14__copymodal_copymodal__["a" /* CopymodalPage */], null, {
            cssClass: "modalcopy"
        });
        modal.onDidDismiss(function (data) {
            console.log(key);
            console.log(key.list);
            if (data.flag == "cancel") {
                window.alert("취소되었습니다.");
            }
            if (data.flag == "new") {
                if (data.value == "1") {
                    console.log(data.value);
                    _this.newWillcopy(key);
                }
                else if (data.value == "2") {
                    console.log(data.value);
                    _this.newHavecopy(key);
                }
                else if (data.value == "3") {
                    console.log(data.value);
                    _this.newAllcopy(key);
                }
            }
            else if (data.flag == "old") {
                if (data.value == "1") {
                    console.log(data.value);
                    _this.oldWillcopy(key, data.value);
                }
                else if (data.value == "2") {
                    console.log(data.value);
                    _this.oldHavecopy(key, data.value);
                }
                else if (data.value == "3") {
                    console.log(data.value);
                    _this.oldAllcopy(key, data.value);
                }
            }
        });
        modal.present();
    };
    HomePage.prototype.OneSignalInstall = function () {
        var _this = this;
        console.log("start Signal");
        this.oneSignal.startInit('2a4ab592-b87f-474a-9b98-77a1983d4b38', '552511846926');
        // this.oneSignal.clearOneSignalNotifications();
        var iosSettings = {
            "kOSSettingsKeyAutoPrompt": true,
            "kOSSettingsKeyInAppLaunchURL": true
        };
        this.oneSignal.iOSSettings(iosSettings);
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        //알림을 받았을때에 아래 함수로
        this.oneSignal.handleNotificationReceived().subscribe(function (data) {
            // var hour=data.payload.additionalData.hour;
            // var min=data.payload.additionalData.minute;
        });
        this.oneSignal.handleNotificationOpened().subscribe(function (data) {
            console.log("data Confirm");
            console.log(data);
            console.log(data.notification.payload.additionalData.hour);
            console.log("opened");
        });
        this.oneSignal.getIds().then(function (data) {
            console.log("get id success" + data.userId);
            window.alert(data.userId);
            _this.firemain.child("users").child(_this.id).child("setting").update({ "user id": data.userId });
            var sendData = [];
            localStorage.setItem("tokenvalue", data.userId);
            //디비에 토큰값을 넣음
        }).catch(function (e) {
            window.alert("onesignal error" + e);
        });
        this.oneSignal.endInit();
    };
    var HomePage_1;
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/home/home.html"*/'<ion-content padding>\n    <div class="upper" style="background-color: #71E8E8; display:flex;">\n        <ion-searchbar style="float:left;width: 55%; padding:6px;" placeholder="검색,즐겨찾기추가" (click)="main();" [(ngModel)]="startPoint" clearInput></ion-searchbar>\n        <button style="background-color:#71E8E8;" (click)="NoneAd()"><img src="./assets/imgs/004-버튼-PPT 3페이지의 이미지의 상단 가운데-광고금지.png" style="width:25px;"></button>\n        <button style="background-color:#71E8E8;" (click)="appstore()"><img src="./assets/imgs/005-버튼-PPT 3페이지의 이미지의 상단 우측-평가하기 별점주기.png" style="width:25px;"></button>\n        <button style="background-color:#71E8E8;" (click)="regularShare()"><img src="./assets/imgs/006-버튼-PPT 3페이지의 이미지의 상단 우측-공유하기 점 세개.png" style="width:25px;"></button>\n        <button style="background-color:#71E8E8;" (click)="setting()"><img src="./assets/imgs/007-버튼-PPT 3페이지의 이미지의 상단 우측-설정하기 톱니바퀴.png" style="width:25px;"></button>\n\n    </div>\n\n    <ion-segment class="tabstyle" (ionChange)="segmentChanged($event)" [(ngModel)]="tab">\n        <ion-segment-button value="tab1" [ngClass]="tab==\'tab1\'?\'view\':\'notview\'">\n            <span class="tab-font">즐겨찾는곳</span>\n        </ion-segment-button>\n        <ion-segment-button value="tab2" [ngClass]="tab==\'tab2\'?\'view\':\'notview\'">\n            <span class="tab-font">쇼핑예정목록</span>\n        </ion-segment-button>\n        <ion-segment-button value="tab3" [ngClass]="tab==\'tab3\'?\'view\':\'notview\'">\n            <span class="tab-font">인터넷에선 얼마?</span>\n        </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]="tab">\n        <ion-list *ngSwitchCase="\'tab1\'">\n            <div *ngIf="favoriteList.length == 0" style="margin-top:10%"><button style="background:white" (click)="main();"><img src="./assets/imgs/003-버튼-PPT 3페이지의 이미지의 정가운데-\'랜딩화면\' 다음에 나오는 화면의 \'말+돋보기 버튼\'.png"></button></div>\n            <div *ngIf="favoriteList != 0">\n                <div style="padding-left:5px; padding-right:5px;">\n                    <div *ngFor="let i of favoriteList; let idx=index" class="border" style="margin-right:auto; margin-left:auto; text-align: center;">\n                        <table>\n                            <thead>\n                                <th style="text-align: left;" *ngIf="i.name.indexOf(\'롯데마트\')>-1" (click)="martview(i)">\n                                    <img src="./assets/imgs/009-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-롯데마트 CI-2.png" class="logoimage " style="height:10%; margin-right: 10px; " alt=" ">\n                                    <a style="margin:3px; font-size:17px; color: #808080; ">롯데마트</a>\n                                </th>\n                                <th style="text-align: left;" *ngIf="i.name.indexOf(\'이마트\')>-1&&i.name.indexOf(\'트레이더스\')==-1" (click)="martview(i)">\n                                    <img src="./assets/imgs/010-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-이마트 CI.png" class="logoimage " style="height:10%; margin-right: 10px; " alt=" ">\n                                    <a style="margin:3px; font-size:17px; color: #808080; ">이마트</a>\n                                </th>\n                                <th style="text-align: left;" *ngIf="i.name.indexOf(\'홈플러스\')>-1" (click)="martview(i)">\n                                    <img src="./assets/imgs/011-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-홈플러스 CI.png" class="logoimage " style="height:10%; margin-right: 10px; " alt=" ">\n                                    <a style="margin:3px; font-size:17px; color: #808080; ">홈플러스</a>\n                                </th>\n                                <th style="text-align: left;" *ngIf="i.name.indexOf(\'코스트코\')>-1" (click)="martview(i)">\n                                    <img src="./assets/imgs/012-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-코스트코 CI.png" class="logoimage " style="height:10%; margin-right: 10px; " alt=" ">\n                                    <a style="margin:3px; font-size:17px; color: #808080; ">코스트코</a>\n                                </th>\n                                <th style="text-align: left;" *ngIf="i.name.indexOf(\'이마트트레이더스\')>-1" (click)="martview(i)">\n                                    <img src="./assets/imgs/013-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-이마트 트레이더스 CI.png" class="logoimage " style="height:10%; margin-right: 10px; " alt=" ">\n                                    <a style="margin:3px; font-size:17px; color: #808080; ">이마트 트레이더스</a>\n                                </th>\n                                <th style="text-align: left;" *ngIf="i.name.indexOf(\'롯데백화점\')>-1" (click)="martview(i)">\n                                    <img src="./assets/imgs/020-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-롯데백화점 CI.png" class="logoimage " style="height:10%; margin-right: 10px; " alt=" ">\n                                    <a style="margin:3px; font-size:17px; color: #808080; ">롯데백화점</a>\n                                </th>\n                                <th style="text-align: left;" *ngIf="i.name.indexOf(\'신세계\')>-1" (click)="martview(i)">\n                                    <img src="./assets/imgs/021-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-신세백화점 CI.png" class="logoimage " style="height:10%; margin-right: 10px; " alt=" ">\n                                    <a style="margin:3px; font-size:17px; color: #808080; ">신세계백화점</a>\n                                </th>\n                                <th style="text-align: left;" *ngIf="i.name.indexOf(\'현대백화점\')>-1" (click)="martview(i)">\n                                    <img src="./assets/imgs/022-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-현대백화점 CI.png" class="logoimage " style="height:10%; margin-right: 10px; " alt=" ">\n                                    <a style="margin:3px; font-size:17px; color: #808080; ">현대백화점</a>\n                                </th>\n                                <th style="text-align: left;" *ngIf="i.name.indexOf(\'롯데아울렛\')>-1" (click)="martview(i)">\n                                    <img src="./assets/imgs/023-버튼-PPT 4페이지의 가운데 이미지의 아울렛별 로고-롯데아울렛 CI.png" class="logoimage " style="height:10%; margin-right: 10px; " alt=" ">\n                                    <a style="margin:3px; font-size:17px; color: #808080; ">롯데아울렛</a>\n                                </th>\n                                <th class="dayoffimg">\n                                    <img *ngIf="todayoff==\'영업\'" src="./assets/imgs/043-버튼-PPT 5페이지의 우측 이미지 영업 알림 버튼-오늘 영업.png " style="width:60%; ">\n                                    <img *ngIf="todayoff==\'휴무\'" src="./assets/imgs/044-버튼-PPT 5페이지의 우측 이미지 영업 알림 버튼-오늘 휴무.png " style="width:60%; ">\n\n                                    <button outline item-end (click)="bookmark(i, idx) " style="width:40px; height:40px; background-color: white;">\n                                <img class="heart" *ngIf="i.favorite==false" src="./assets/imgs/045-버튼-PPT 5페이지의 우측 이미지 즐겨찾기 하트 버튼-블랭크 하트(즐겨찾기전).png" style="width:100%; " alt=" ">\n                                <img class="heart" *ngIf="i.favorite==true" src="./assets/imgs/046-버튼-PPT 5페이지의 우측 이미지 즐겨찾기 하트 버튼-노란 하트(즐겨찾기후).png" style="width:100%; " alt=" ">\n                            </button>\n                                </th>\n                            </thead>\n                            <tbody style="width:100%;" (click)="martview(i)">\n                                <tr class="martname " style="font-weight: 900">\n                                    <span style="margin : 10px; margin-bottom:30px;">{{i.name}}</span>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <table style="margin-left:auto; margin-right:auto">\n                            <tbody>\n                                <tr class="datespan">\n                                    <td class="tabletd" *ngFor="let i of today" (click)="martview(i)" style="margin-top:10px;">\n                                        <span *ngIf="i!=\'오늘\'" style="color:red; font-weight: 500;">{{i}}</span>\n                                        <span *ngIf="i==\'오늘\'" style="color:rgb(0, 119, 255); font-weight: 500;">{{i}}</span>\n                                    </td>\n                                </tr>\n                                <tr class="datespan " (click)="martview(i) ">\n                                    <td *ngFor="let i of week " class="tabletd">\n                                        <span>{{i.dayofweek}}</span>\n                                    </td>\n                                </tr>\n                                <tr class="datespan " (click)="martview(i) ">\n                                    <td *ngFor="let i of week " class="tabletd">\n                                        <span>{{i.month}}/{{i.day}}</span>\n                                    </td>\n                                </tr>\n                                <tr class="datespan " (click)="martview(i) ">\n                                    <td *ngFor="let m of i.dayoffarray" class="tabletd ">\n                                        <span *ngIf="m==\'휴무\'" class="mSpan1">{{m}}</span>\n                                        <span *ngIf="m==\'영업\'" class="mSpan2">{{m}}</span>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <div class="borderr ">\n                    <button style="background-color:white; height:30%; margin-left:auto; margin-right:auto; " (click)="main(); "><img style="width:55% "src="./assets/imgs/047-버튼-PPT 7페이지의 우측 이미지-말얼굴+돋보기.png " alt=" "></button>\n                </div>\n            </div>\n        </ion-list>\n        <ion-list *ngSwitchCase=" \'tab2\' ">\n            <div class="topselector ">\n                <p>쇼핑 목록 만들기! 어디서 쇼핑하실 건가요?</p>\n                <table style="margin: auto; text-align: center; ">\n\n                    <tbody>\n                        <td>\n                            <button style="background-color:#fff; " (click)="addlist( \'mart\') "><img src="./assets/imgs/079-버튼-PPT 27페이지의 가운데 이미지-카트(마트).png " style="width:500px "></button>\n                            <button style="background-color:#fff; color:rgb(88, 189, 207); font-size: 16px; font-weight: bold; " (click)="addlist( \'mart\') ">마트</button>\n                        </td>\n                        <td>\n                            <button style="background-color:#fff; " (click)="addlist( \'dep\') "><img src="./assets/imgs/080-버튼-PPT 27페이지의 가운데 이미지-쇼핑백(백화점).png " style="width:500px "></button>\n                            <button style="background-color:#fff; color:rgb(88, 189, 207); font-size: 16px; font-weight: bold; " (click)="addlist( \'dep\') ">백화점</button>\n                        </td>\n                        <td>\n                            <button style="background-color:#fff; " (click)="addlist( \'outlet\') "><img src="./assets/imgs/081-버튼-PPT 27페이지의 가운데 이미지-보석+구두(아울렛).png " style="width:500px "></button>\n                            <button style="background-color:#fff; color:rgb(88, 189, 207); font-size: 16px; font-weight: bold; " (click)="addlist( \'outlet\') ">아울렛</button>\n                        </td>\n                        <td>\n                            <button style="background-color:#fff; " (click)="addlist( \'etc\') "><img src="./assets/imgs/081-버튼-PPT 27페이지의 가운데 이미지-etc(기타).png " style="width:500px "></button>\n                            <button style="background-color:#fff; color:rgb(88, 189, 207); font-size: 16px; font-weight: bold; " (click)="addlist( \'etc\') ">기타</button>\n                        </td>\n                    </tbody>\n                </table>\n            </div>\n            <div *ngIf="newarraylist.length==0 "><img src="./assets/imgs/078-버튼-PPT 27페이지의 가운데 이미지-쇼핑이라쓰고+말얼굴 (1).png " alt=" "></div>\n            <div *ngIf="newarraylist!=0 ">\n\n                <div *ngFor="let a of newarraylist " class="border ">\n                    <button (click)="viewshoppinglist(a) " style="background-color: #fff; width:80% ">\n                        <table>\n                            <tr style="text-align: left; ">\n                                <td>\n                                        <button *ngIf="a.flag==\'mart\' " style="background-color:#fff; width:80px "><img src="./assets/imgs/079-버튼-PPT 27페이지의 가운데 이미지-카트(마트).png " style="width:100% " alt=" "></button>\n                    <button *ngIf="a.flag==\'dep\' " style="background-color:#fff; width:80px "><img src="./assets/imgs/080-버튼-PPT 27페이지의 가운데 이미지-쇼핑백(백화점).png " style="width:100% "alt=" "></button>\n                    <button *ngIf="a.flag==\'outlet\' " style="background-color:#fff; width:80px "><img src="./assets/imgs/081-버튼-PPT 27페이지의 가운데 이미지-보석+구두(아울렛).png " style="width:100% " alt=" "></button>\n                    <button *ngIf="a.flag==\'etc\' " style="background-color:#fff; width:80px "><img src="./assets/imgs/081-버튼-PPT 27페이지의 가운데 이미지-etc(기타).png " style="width:100% " alt=" "></button>\n\n                    </td>\n                    <td>\n                        <div>\n                            <span *ngIf="a.flag==\'mart\' " style="margin-right:10px; font-size:16px; font-weight:bold; color:rgb(74, 190, 190) ">마트 </span>\n                            <span *ngIf="a.flag==\'dep\' " style="margin-right:10px; font-size:16px; font-weight:bold; color:rgb(74, 190, 190) ">백화점 </span>\n                            <span *ngIf="a.flag==\'outlet\' " style="margin-right:10px; font-size:16px; font-weight:bold; color:rgb(74, 190, 190) ">아울렛 </span>\n                            <span *ngIf="a.flag==\'etc\' " style="margin-right:10px; font-size:16px; font-weight:bold; color:rgb(74, 190, 190) ">기타 </span>\n                            <span style="font-size:16px; font-weight:bold; color:rgb(74, 190, 190) ">"{{a.title}} "</span>\n                            <br><br><span style="font-size:15px; font-weight:bold; color:rgb(74,190,190); margin-top:3px; ">{{a.time}} 작성</span><br><br>\n                            <span style="font-size:16px; font-weight: bold; color:rgb(74,190,190); margin-top:30px; " *ngIf="a.totallist!=a.totalchecked ">{{a.totallist+"개 항목 중 "+a.totalchecked+"개 구입 "}}</span>\n                            <span style="font-size:16px; font-weight: bold; color:rgb(74,190,190); margin-top:30px; " *ngIf="a.totallist==a.totalchecked ">구입 완료 "{{a.totallist}}품목 "</span>\n\n                        </div>\n                    </td>\n                    </table>\n\n                    </button>\n                    <div>\n                        <ion-fab style="margin-top:-50px; ">\n                            <img class="rotate " src="./assets/imgs/084-버튼-PPT 31페이지의 가운데 이미지-점3개-회전1단계(시작).png " style="width:30%;height: 30%;float:right; margin-right:30px; margin-top:20px; position:relative; z-index :9998 " alt=" " ion-fab>\n                            <ion-fab-list side="bottom " style="margin-left:-90%; margin-top:20px;text-align: left; background-color:#E9E9E9; position: absolute; z-index: 9999; ">\n                                <button style="background-color: #E9E9E9; margin-top:5px; font-size:15px; " (click)="changeName(a) ">목록명 변경</button>\n                                <button style="background-color: #E9E9E9; margin-top:5px; font-size:15px; " (click)="share(a) ">공유</button>\n                                <button style="background-color: #E9E9E9; margin-top:5px; font-size:15px; " (click)="deleteDB(a) ">삭제</button>\n                                <button style="background-color: #E9E9E9; margin-top:5px; font-size:15px; " (click)="openModal(a) ">복사</button>\n                            </ion-fab-list>\n                        </ion-fab>\n                    </div>\n                </div>\n\n            </div>\n\n        </ion-list>\n        <ion-list *ngSwitchCase=" \'tab3\' ">\n\n            <div style="padding:20px; ">\n                <select id="slt " name="sor ">\n                    <option value="rel " selected="selected ">랭킹순</option>\n                    <option value="price_asc ">낮은 가격순</option>\n                    <option value="price_dsc ">높은 가격순</option>\n                    <option value="date ">등록순</option>\n                    <option value="review ">리뷰 많은순</option>\n                </select>\n\n                <ion-input style="margin-right: 0px; margin-top: 2px; width: 55%; height:48px; display: inline-block; border: 2px solid rgb(0, 167, 179); border-radius: 5px; " name=\'text\' type="text " [(ngModel)]=\'srct.text\' placeholder="검색어를 입력해 주세요. ">\n\n                </ion-input>\n                <button style="padding-left:-15%; margin-left: -15%;margin-top: 1%; float: right; width:60px; height: 50px; background-color: #fff;z-index: 9999; " outline icon-only (click)=\'select_sort()\'>\n\n                    <ion-icon name=\'search\' style="color:rgb(0, 167, 179); font-size:30px " is-active="false "></ion-icon>\n                </button>\n\n            </div>\n            <div>\n                <img src="./assets/imgs/077-배경 이미지-PPT 23페이지의 가운데 이미지-인터넷은얼마+말얼굴.png " class="cropping " alt=" ">\n            </div>\n        </ion-list>\n\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number___["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[383]);
//# sourceMappingURL=main.js.map