webpackJsonp([0],{

/***/ 174:
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
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 219:
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
webpackEmptyAsyncContext.id = 219;

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number___ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_unique_device_id__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addshoping_addshoping__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__viewshoppinglist_viewshoppinglist__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__setting_setting__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ad_ad__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rate_rate__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__copymodal_copymodal__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__listlimitmodal_listlimitmodal__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_onesignal__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__martlist_martlist__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__martinfoview_martinfoview__ = __webpack_require__(282);
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
    function HomePage(modal, socialSharing, iab, uniqueDeviceID, alertCtrl, callnumber, admobFree, navCtrl, platform, navParams, oneSignal, toastCtrl) {
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
        this.srct = {
            text: '',
            url: '',
        };
        this.fabButtonOpened = false;
        this.refreshname();
        __WEBPACK_IMPORTED_MODULE_8_jquery__(document).ready(function () {
            console.log("ready!");
        });
        this.favorite();
        this.weekAndDay();
        this.today = ['오늘'];
        // setTimeout(()=>{
        //   if(this.platform.is("android")||this.platform.is("ios")){
        //     this.OneSignalInstall();
        //   }
        // },5000)
        setTimeout(function () {
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
    HomePage.prototype.martview = function (martinfo) {
        console.log(martinfo);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__martinfoview_martinfoview__["a" /* MartinfoviewPage */], { "martinfo": martinfo });
    };
    HomePage.prototype.weekAndDay = function () {
        var datearr = new Date, days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'], prefixes = ['첫째주', '둘째주', '셋째주', '넷째주', '다섯째주'];
        this.week = prefixes[0 | datearr.getDate() / 7];
        this.day = days[datearr.getDay()];
        this.month = datearr.getMonth() + 1;
        this.dayOfweek = datearr.getDay();
        console.log(this.month);
        // this.date = this.day.getDate;
        for (var i = 0; i < 7; i++) {
            this.date = datearr.getDate() + i;
            this.dayofweek = datearr.getDate();
            var dow = this.dayOfweek++;
            if (this.dayOfweek >= 7) {
                this.dayOfweek = 0;
            }
            console.log(dow);
            this.weekarr.push({ "week": prefixes[0 | (this.date - 1) / 7], "day": this.date, "dayofweek": days[dow] });
            console.log(this.weekarr);
        }
    };
    HomePage.prototype.favorite = function () {
        var _this = this;
        this.firemain.child("users").child(this.id).once("value", function (sn) {
            console.log(sn.val());
            for (var a in sn.val()) {
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
                        _this.martkind.push(b);
                        console.log(sn.val()[a][b]);
                        for (var c in sn.val()[a][b]) {
                            console.log(sn.val()[a][b][c]);
                            _this.todayoff = sn.val()[a][b][c].dayoffarray[0];
                            _this.favoriteList.push(sn.val()[a][b][c]);
                        }
                        console.log(_this.favoriteList);
                        console.log(_this.favoriteList.length);
                    }
                }
            }
        });
    };
    HomePage.prototype.bookmark = function (a, idx) {
        this.martinfo = a;
        console.log(this.martinfo);
        console.log(this.martkind);
        console.log(a);
        console.log(a.key);
        console.log(idx);
        for (var i in this.martkind) {
            console.log(this.martkind[i]);
            this.firemain.child("users").child(this.id).child("favorite").child(this.martkind[i]).child(a.key).remove();
            var toast = this.toastCtrl.create({
                message: '삭제되었습니다.',
                duration: 2000,
            });
            toast.present();
        }
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
                if (a != "setting" && a != "favorite") {
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
                            _this.newarraylist.push({ "totallist": listlength, "totalchecked": checked, "flag": a, "list": sn.val()[a][b][c].list, "title": b, "time": sn.val()[a][b][c].time, "key": sn.val()[a][b][c].key });
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
            var a = key.title + "복사본";
            this.firemain.child("users").child(this.id).child("mart").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "dep") {
            var a = key.title + "복사본";
            this.firemain.child("users").child(this.id).child("dep").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "outlet") {
            var a = key.title + "복사본";
            this.firemain.child("users").child(this.id).child("outlet").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "etc") {
            var a = key.title + "복사본";
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
            var a = key.title + "복사본";
            this.firemain.child("users").child(this.id).child("mart").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "dep") {
            var a = key.title + "복사본";
            this.firemain.child("users").child(this.id).child("dep").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "outlet") {
            var a = key.title + "복사본";
            this.firemain.child("users").child(this.id).child("outlet").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "etc") {
            var a = key.title + "복사본";
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
            var a = key.title + "복사본";
            this.firemain.child("users").child(this.id).child("mart").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "dep") {
            var a = key.title + "복사본";
            this.firemain.child("users").child(this.id).child("dep").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "outlet") {
            var a = key.title + "복사본";
            this.firemain.child("users").child(this.id).child("outlet").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "etc") {
            var a = key.title + "복사본";
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/home/home.html"*/'<ion-content padding>\n    <div class="upper" style="background-color: #71E8E8; display:flex;">\n        <ion-searchbar style="float:left;width: 55%; padding:6px;" placeholder="검색,즐겨찾기추가" (click)="main();" [(ngModel)]="startPoint" clearInput></ion-searchbar>\n        <button style="background-color:#71E8E8;" (click)="NoneAd()"><img src="./assets/imgs/004-버튼-PPT 3페이지의 이미지의 상단 가운데-광고금지.png" style="width:25px;"></button>\n        <button style="background-color:#71E8E8;" (click)="appstore()"><img src="./assets/imgs/005-버튼-PPT 3페이지의 이미지의 상단 우측-평가하기 별점주기.png" style="width:25px;"></button>\n        <button style="background-color:#71E8E8;" (click)="regularShare()"><img src="./assets/imgs/006-버튼-PPT 3페이지의 이미지의 상단 우측-공유하기 점 세개.png" style="width:25px;"></button>\n        <button style="background-color:#71E8E8;" (click)="setting()"><img src="./assets/imgs/007-버튼-PPT 3페이지의 이미지의 상단 우측-설정하기 톱니바퀴.png" style="width:25px;"></button>\n\n    </div>\n\n    <ion-segment class="tabstyle" (ionChange)="segmentChanged($event)" [(ngModel)]="tab">\n        <ion-segment-button value="tab1" [ngClass]="tab==\'tab1\'?\'view\':\'notview\'">\n            <span class="tab-font">즐겨찾는곳</span>\n        </ion-segment-button>\n        <ion-segment-button value="tab2" [ngClass]="tab==\'tab2\'?\'view\':\'notview\'">\n            <span class="tab-font">쇼핑예정목록</span>\n        </ion-segment-button>\n        <ion-segment-button value="tab3" [ngClass]="tab==\'tab3\'?\'view\':\'notview\'">\n            <span class="tab-font">인터넷에선 얼마?</span>\n        </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]="tab">\n        <ion-list *ngSwitchCase="\'tab1\'">\n            <div *ngIf="favoriteList.length == 0" style="margin-top:10%"><button style="background:white" (click)="main();"><img src="./assets/imgs/003-버튼-PPT 3페이지의 이미지의 정가운데-\'랜딩화면\' 다음에 나오는 화면의 \'말+돋보기 버튼\'.png"></button></div>\n            <div *ngIf="favoriteList != 0">\n                <div *ngFor="let i of favoriteList; let idx=index" class="border">\n                    <button style="background-color:white" (click)="martview(i)">\n                <table>\n                    <thead>\n                        <th style="text-align: left;" *ngFor="let a of logo;">\n                            <img src="{{a.image}}" class="logoimage" style="height:10%; margin-right: 10px;" alt="">\n                            <a style="margin:3px; font-size:17px; color: #808080;">{{a.name}}</a>\n                        </th>\n                        <th class="dayoffimg">\n                            <img *ngIf="todayoff==\'영업\'" src="./assets/imgs/043-버튼-PPT 5페이지의 우측 이미지 영업 알림 버튼-오늘 영업.png" style="width:60%;">\n                            <img *ngIf="todayoff==\'휴무\'" src="./assets/imgs/044-버튼-PPT 5페이지의 우측 이미지 영업 알림 버튼-오늘 휴무.png" style="width:60%;">\n\n                            <button (click)="bookmark(i, idx)" style="width:40px; height:40px; background-color: white;">\n                                <img *ngIf="i.favorite==false" src="./assets/imgs/045-버튼-PPT 5페이지의 우측 이미지 즐겨찾기 하트 버튼-블랭크 하트(즐겨찾기전).png" style="width:100%;" alt="">\n                                <img *ngIf="i.favorite==true" src="./assets/imgs/046-버튼-PPT 5페이지의 우측 이미지 즐겨찾기 하트 버튼-노란 하트(즐겨찾기후).png" style="width:100%;" alt="">\n                            </button>\n                    </th>\n                    </thead>\n                    <tbody style="width:100%;">\n                        <tr class="martname" style="font-weight: 900">\n                            <span style="margin-bottom:10px">{{i.name}}</span>\n                        </tr>\n                    </tbody>\n                    </table>\n                    <table>\n                        <tbody>\n                            <tr class="datespan">\n                                <td class="tabletd" style="margin-top:10px">{{today}}</td>\n                                <!-- <span style="margin-top:10px;"></span> -->\n                            </tr>\n                            <tr class="datespan">\n                                <td *ngFor="let i of weekarr" class="tabletd">\n                                    <span>{{i.dayofweek}}</span>\n                                </td>\n                            </tr>\n                            <tr class="datespan">\n                                <td *ngFor="let i of weekarr" class="tabletd">\n                                    <span>{{month}}/{{i.day}}</span>\n                                </td>\n                            </tr>\n                            <tr class="datespan">\n                                <td *ngFor="let m of i.dayoffarray" class="tabletd">\n                                    <span *ngIf="m==\'휴무\'" class="mSpan1">{{m}}</span>\n                                    <span *ngIf="m==\'영업\'" class="mSpan2">{{m}}</span>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    </button>\n                </div>\n                <div class="borderr">\n                    <button style="background-color:white; height:30%; margin-left:auto; margin-right:auto;" (click)="main();"><img style="width:55%"src="./assets/imgs/047-버튼-PPT 7페이지의 우측 이미지-말얼굴+돋보기.png" alt=""></button>\n                </div>\n            </div>\n        </ion-list>\n        <ion-list *ngSwitchCase=" \'tab2\' ">\n            <div class="topselector">\n                <p>쇼핑 목록 만들기! 어디서 쇼핑하실 건가요?</p>\n                <table style="margin: auto; text-align: center;">\n\n                    <tbody>\n                        <td>\n                            <button style="background-color:#fff; " (click)="addlist(\'mart\') "><img src="./assets/imgs/079-버튼-PPT 27페이지의 가운데 이미지-카트(마트).png " style="width:500px"></button>\n                            <button style="background-color:#fff; color:rgb(88, 189, 207); font-size: 16px; font-weight: bold;" (click)="addlist(\'mart\') ">마트</button>\n                        </td>\n                        <td>\n                            <button style="background-color:#fff; " (click)="addlist(\'dep\') "><img src="./assets/imgs/080-버튼-PPT 27페이지의 가운데 이미지-쇼핑백(백화점).png " style="width:500px"></button>\n                            <button style="background-color:#fff; color:rgb(88, 189, 207); font-size: 16px; font-weight: bold;" (click)="addlist(\'dep\') ">백화점</button>\n                        </td>\n                        <td>\n                            <button style="background-color:#fff; " (click)="addlist(\'outlet\') "><img src="./assets/imgs/081-버튼-PPT 27페이지의 가운데 이미지-보석+구두(아울렛).png " style="width:500px"></button>\n                            <button style="background-color:#fff; color:rgb(88, 189, 207); font-size: 16px; font-weight: bold;" (click)="addlist( \'outlet\') ">아울렛</button>\n                        </td>\n                        <td>\n                            <button style="background-color:#fff; " (click)="addlist(\'etc\') "><img src="./assets/imgs/081-버튼-PPT 27페이지의 가운데 이미지-etc(기타).png " style="width:500px"></button>\n                            <button style="background-color:#fff; color:rgb(88, 189, 207); font-size: 16px; font-weight: bold;" (click)="addlist( \'etc\') ">기타</button>\n                        </td>\n                    </tbody>\n                </table>\n            </div>\n            <div *ngFor="let a of newarraylist " class="eachshopping ">\n                <div class="listDB ">\n                    <div class="segmentImg ">\n                        <button style="background-color:#fff; " (click)="deleteDB(a) ">\n                            <img src="assets/imgs/delete (1).png ">\n                        </button>\n                    </div>\n                    <div class="segmentText ">\n                        {{a.flag}}\n                        <button style="background-color:#fff; " (click)="viewshoppinglist(a) ">\n                            {{a.title}}\n                        </button>\n                    </div>\n                    <div>\n                        <button style="background-color:#fff; " (click)="viewshoppinglist(a) ">\n                            {{a.time}}\n                        </button>\n                    </div>\n                    <div>\n                        {{a.totallist+"개 항목 중 "+a.totalchecked+"개 구입 "}}\n                    </div>\n                    <div>\n                        <ion-fab>\n                            <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n                            <ion-fab-list side="bottom">\n                                <button (click)="changeName(a)" ion-fab>\n                                    <ion-icon name="list"></ion-icon>\n                                    <ion-label>목록명 변경</ion-label>\n                                </button>\n                                <button (click)="share(a)" ion-fab>\n                                    <ion-icon name="share"></ion-icon>\n                                    <ion-label>공유</ion-label>\n                                </button>\n                                <button (click)="deleteDB(a)" ion-fab>\n                                    <ion-icon name="trash"></ion-icon>\n                                    <ion-label>삭제</ion-label>\n                                </button>\n                                <button (click)="openModal(a)" ion-fab>\n                                    <ion-icon name="copy"></ion-icon>\n                                    <ion-label>복사</ion-label>\n                                </button>\n                            </ion-fab-list>\n                        </ion-fab>\n                    </div>\n                </div>\n            </div>\n\n            <!-- <div><button style="background-color:#fff; " (click)="addlist() ">(image)쇼핑 리스트를 추가해보자라는 말</button></div> -->\n\n        </ion-list>\n        <ion-list *ngSwitchCase=" \'tab3\' ">\n\n            <div>\n                <select style="display: inline-block; width:25%; " id=\'slt\' name="sort ">\n                    <option value="rel " selected="selected ">랭킹순</option>\n                    <option value="price_asc ">낮은 가격순</option>\n                    <option value="price_dsc ">높은 가격순</option>\n                    <option value="date ">등록순</option>\n                    <option value="review ">리뷰 많은순</option>\n                </select>\n\n                <ion-input style="margin-right: 0px; width: 60%; display: inline-block; border: 1px solid black; " name=\'text\' type="text " [(ngModel)]=\'srct.text\' placeholder="검색어를 입력해 주세요. ">\n                </ion-input>\n\n                <button ion-button style="float: right; width:30px; height: 30px; " color="black " outline icon-only (click)=\'select_sort()\'>\n\n                    <ion-icon name=\'search\' is-active="false "></ion-icon>\n                </button>\n            </div>\n        </ion-list>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number___["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddshopingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_speech_recognition__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
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
    function AddshopingPage(speechRecognition, navCtrl, navParams, alertCtrl) {
        this.speechRecognition = speechRecognition;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
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
        var month = thisday.getMonth();
        var date = thisday.getDate();
        var hour = thisday.getHours();
        var minute = thisday.getMinutes();
        var fullyear = thisday.getFullYear();
        var second = thisday.getSeconds();
        console.log("this is the day");
        // new Date().toString("hh:mm tt")
        console.log(thisday);
        console.log(month + 1);
        console.log(date);
        console.log((hour) + "시");
        console.log(minute);
        console.log(fullyear);
        this.nowtime = "" + (month + 1) + "월" + date + "일" + (hour) + "시" + minute + "분";
        //
    }
    AddshopingPage.prototype.add = function () {
        console.log(this.adding);
        this.addinglist.push({ "name": this.adding, "checked": false });
        this.totalnumber = this.addinglist.length;
        this.adding = "";
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
        this.flag = false;
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
                        if (_this.title == "") {
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
            selector: 'page-addshoping',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/addshoping/addshoping.html"*/'<!--\n  Generated template for the AddshopingPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    {{nowtime}} <button class="saveButton" (click)="save()">저장</button>\n    <div class="totaldetail">\n        <p *ngIf="flag==true">{{totalnumber}} 중 {{selected}} </p>\n        <p *ngIf="flag==false">{{totalnumber}}</p>\n    </div>\n    <div class="main">\n        <ion-item *ngFor="let att of addinglist; let idx = index">\n            <ion-icon *ngIf="flag==false" name="close"></ion-icon>\n            <ion-checkbox [(ngModel)]="att.checked" style="z-index: 999999;" (ionChange)="addValue($event)" *ngIf="flag==true" color="dark" slot="start"></ion-checkbox>\n            <ion-input style="width: 20%;float: left;" placeholder="상품명" [(ngModel)]="addinglist[idx].name"></ion-input>\n            <ion-input style="width: 20%;float: right;" placeholder="수량" [(ngModel)]="addinglist[idx].quantity"></ion-input>\n            <ion-input style="width: 20%;float: right;" placeholder="가격" [(ngModel)]="addinglist[idx].price"></ion-input>\n        </ion-item>\n    </div>\n    <div style="position: absolute;bottom: 50px;width: 100%;" class="bottom">\n        <ion-input *ngIf="flag!=true" style="width: 63%;border-bottom: solid 1px;float: left;" [(ngModel)]="adding" placeholder="품목을 입력하세요."></ion-input>\n        <button *ngIf="flag!=true" style="height: 3.5rem;background: transparent;border: solid 1px;border-radius: 7px;margin-top: 5px;margin-left: 10px;" (click)="speeching()">음성</button>\n        <button *ngIf="flag!=true" style="height: 3.5rem;background: transparent;border: solid 1px;border-radius: 7px;margin-top: 5px;margin-left: 3px;" (click)="add()">추가하기</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/addshoping/addshoping.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_speech_recognition__["a" /* SpeechRecognition */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddshopingPage);
    return AddshopingPage;
}());

//# sourceMappingURL=addshoping.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewshoppinglistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__ = __webpack_require__(148);
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
        this.totalnumber = 0;
        this.flag = false;
        this.firemain = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref();
        this.addinglist = [];
        this.sum = 0;
        this.printsum = 0;
        this.flagInput = false; //가격 및 수량도 입력하기 버튼을 위한 boolean형 변수
        this.count = 0;
        this.srct = {
            text: '',
            url: ''
        };
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
    }
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
        console.log(this.count);
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
        fab.close();
    };
    /*삭제*/
    ViewshoppinglistPage.prototype.delete = function (fab) {
        var _this = this;
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
                        var newlist = []; //선택된 것을 넣을 수 있는 새로운 배열
                        console.log(_this.a.list); //this.a.list는 입력을 받은 배열
                        for (var i = 0; i < _this.a.list.length; i++) {
                            /*a.list에 있는 항목이 체크가 되어있으면 newlist에 push*/
                            if (_this.a.list[i].checked == true) {
                                console.log(_this.a.list[i].checked);
                                newlist.push(i);
                            }
                        }
                        for (var i = 0; i < newlist.length; i++) {
                            _this.a.list[newlist[i]] = "NC";
                        }
                        console.log(_this.a.list);
                        var filtered = _this.a.list.filter(function (value) {
                            console.log(value);
                            return value != "NC";
                        });
                        console.log(filtered);
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
                            window.alert("삭제되었습니다.");
                            /*totalNumber와 Select값 가져오기*/
                            _this.totalnumber = _this.a.list.length;
                            var count = 0;
                            for (var i = 0; i < _this.a.list.length; i++) {
                                if (_this.a.list[i].checked == true) {
                                    count++;
                                }
                            }
                            _this.selected = count;
                            _this.refreshname(); //새로고침
                        });
                    }
                }
            ]
        });
        fab.close();
        alert.present();
    };
    /*sort구현*/
    ViewshoppinglistPage.prototype.sortlist = function (fab) {
        var _this = this;
        this.a.list.sort(function (name1, name2) {
            return name1.name.toLowerCase() < name2.name.toLowerCase() ? -1 : name1.name.toLowerCase() > name2.name.toLowerCase() ? 1 : 0;
        });
        console.log(this.a.list);
        window.alert("정렬되었습니다.");
        this.firemain.child("users").child(this.id).child(this.shop).child(this.title).child(this.key).child("list").update(this.a.list).then(function () {
            console.log(_this.a.list);
        });
        fab.close();
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */])
    ], ViewshoppinglistPage.prototype, "navBar", void 0);
    ViewshoppinglistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewshoppinglist',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/viewshoppinglist/viewshoppinglist.html"*/'<ion-header>\n    <ion-navbar color="navbar">\n        <span style="color:white; font-size:23px; font-weight: 900">{{a.title}}</span>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-row>\n        <ion-col col-10>\n            <span style="font-size:18px; color:#42B8B8; font-weight: 900;">{{a.time}}</span>\n        </ion-col>\n        <ion-col col-2>\n            <button class="saveButton" (click)="save()">저장</button>\n        </ion-col>\n    </ion-row>\n    <ion-row style="background-color: #9FFAFA; border-radius: 6px;">\n        <ion-col col-8>\n            <span *ngIf="flag==false" style="color: #42B8B8; font-size:15px; font-weight: 900;">{{totalnumber}}개 중 {{selected}}개 구입</span>\n            <span *ngIf="flag==true" style="color: #42B8B8; font-size:15px; font-weight: 900;">{{totalnumber}}</span>\n        </ion-col>\n        <ion-col col-4>\n            <span style="color: #42B8B8; font-size:15px; font-weight: 900;">₩{{printsum}}</span>\n        </ion-col>\n    </ion-row>\n    <div class>\n        <ion-item *ngFor="let att of a.list; let idx = index" class="main">\n            <ion-icon *ngIf="flag==true" name="close"></ion-icon>\n            <ion-checkbox [(ngModel)]="att.checked" style="z-index: 999999;" (ionChange)="addValue($event)" *ngIf="flag==false" color="dark" slot="start"></ion-checkbox>\n            <ion-input text-center style="width: 20%;float: left;" placeholder="상품명" [(ngModel)]="a.list[idx].name"></ion-input>\n            <ion-input text-center style="width: 10%;float: left;" placeholder="수량" [(ngModel)]="a.list[idx].quantity"></ion-input>\n            <ion-input text-center style="width: 15%;float: left;" placeholder="가격" [(ngModel)]="a.list[idx].price"></ion-input>\n            <button ion-button outline item-end style="width:10%;" (click)="select_sort(idx)"><ion-icon name=\'search\' is-active="false"></ion-icon></button>\n        </ion-item>\n    </div>\n\n    <div style="bottom: 50px;width: 100%; margin-left:0px; margin-right:0px;" class="bottom">\n        <ion-row>\n            <ion-col col-12>\n                <ion-input *ngIf="flag!=false" style="width: 65%;border-bottom: solid 1px;float: left;" [(ngModel)]="adding" placeholder="품목을 입력하세요."></ion-input>\n                <button *ngIf="flag!=false" style="height: 3.5rem;background: transparent;border: solid 1px ;border-radius: 7px;margin-left: 4px;" (click)="speeching()">음성</button>\n                <button *ngIf="flag!=false" style="height: 3.5rem;background: #9FFAFA;border: solid 1px #9FFAFA;border-radius: 7px;margin-top: 5px;margin-left: 4px;" (click)="add()">추가하기</button>\n            </ion-col>\n            <ion-col col-12>\n                <button *ngIf="flag!=false&&flagInput==false" style="height: 3.5rem;background: transparent;border: solid 1px;border-radius: 7px;" (click)="priceandquantity()">가격 및 수량도 입력하기</button>\n                <ion-input *ngIf="flagInput!=false" style="width: 34%; height: 3.5rem; border-bottom: solid 1px; float: left; margin-right: 2px; margin-left:2px;" [(ngModel)]="quantity" placeholder="수량"></ion-input>\n                <ion-input *ngIf="flagInput!=false" style="width: 34%; height: 3.5rem; border-bottom: solid 1px; float: left; margin-left: 2px; margin-right:5px;" [(ngModel)]="price" placeholder="가격"></ion-input>\n                <button *ngIf="flagInput!=false" style="height: 3.5rem;background: transparent;border: solid 1px;border-radius: 7px;margin-top: 3px;margin-left: 10px;" (click)="cancel()">취소</button>\n            </ion-col>\n        </ion-row>\n\n    </div>\n</ion-content>\n\n<ion-footer>\n    <div>\n        <ion-fab bottom right #fab>\n            <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n            <ion-fab-list side="top">\n                <button (click)="sortlist(fab)" ion-fab>\n                    <ion-icon name="list"></ion-icon>\n                    <ion-label>이름순으로 정렬</ion-label>\n                </button>\n                <button (click)="insertData(fab)" ion-fab>\n                    <ion-icon name="build"></ion-icon>\n                    <ion-label>수정하기</ion-label>\n                </button>\n                <button (click)="delete(fab)" ion-fab>\n                    <ion-icon name="trash"></ion-icon>\n                    <ion-label>삭제하기</ion-label>\n                </button>\n\n            </ion-fab-list>\n        </ion-fab>\n    </div>\n</ion-footer>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/viewshoppinglist/viewshoppinglist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ViewshoppinglistPage);
    return ViewshoppinglistPage;
}());

//# sourceMappingURL=viewshoppinglist.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return licenseModalPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return privacyModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
        this.test = false;
        this.buttontoggle = [
            { name: '7일 전', check: false },
            { name: '3일 전', check: false },
            { name: '1일 전', check: false },
            { name: '받지 않기', check: true },
        ];
    }
    SettingPage.prototype.toggleGroup = function () {
        this.shownGroup = !this.shownGroup;
    };
    ;
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
            selector: 'page-setting',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/setting/setting.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>설정</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n      <ion-item>\n        <ion-icon name="information-circle"></ion-icon>\n        버전정보 Ver : {{version}}\n      </ion-item>\n      \n      <ion-item>\n        <ion-icon name="star" (click)="evaluation()"> 앱 평가하기</ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="book" (click)="license()"> 오픈소스 라이센스</ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="mail" (click)="email()"> 개발자 문의하기</ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <button (click)="toggleGroup()" >\n          <h3>\n            <ion-icon name="alarm"> 푸시 알람 설정</ion-icon>\n            <ion-icon color="success" item-right [name]="shownGroup===true ? \'arrow-dropup\' : \'arrow-dropdown\'"></ion-icon>\n          </h3>\n        </button>\n\n        <div *ngIf="shownGroup">\n          즐겨 찾기 한 매장의 휴무일 푸쉬 알림 받기\n          <div></div>\n          <a class="test" *ngFor="let button of buttontoggle; let i = index">\n\n            <button ion-button (click)="clickButton(i)" [ngClass]="button.check===true?\'B_on\':\'B_off\'">\n              {{button.name}}\n            </button>\n            \n          </a>\n          <div></div>\n          <!-- <div>\n            <a *ngFor="let button of buttontoggle; let i = index">\n\n              <a [ngSwitch]="button.check">\n                <a *ngSwitchCase="true">\n                  <button ion-button (click)="clickButton(i)"\n                      style="background-color: mediumaquamarine;">{{button.name}}</button>\n                </a>\n\n                <a *ngSwitchCase="false">\n                  <button ion-button (click)="clickButton(i)"\n                      style="background-color: lightgray;">{{button.name}}</button>\n                </a>\n              </a>\n            </a>\n          </div> -->\n          \n          <button ion-button (click)="alarmcheck()">완료</button>\n        </div>\n      </ion-item>\n      \n      <ion-item>\n        <ion-icon name="finger-print" (click)="privacy()"> 개인정보 취급방침</ion-icon>\n      </ion-item>\n\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], privacyModalPage);
    return privacyModalPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_purchase__ = __webpack_require__(274);
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
            selector: 'page-ad',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/ad/ad.html"*/'<ion-content class="main-view" style="background: transparent;\n  background-color: white;\n  outline-color:black;\n  border: solid 1px;\n  border-radius: 10px;\n  height: 80%;\n  width:80%;\n  top: 10%;\n  left:10%;\n  " padding>\n\n  <div>\n    <!-- <button ion-button (click)=purchase_onemonth()>\n      {{price[0]}}원\n      <br>\n      월 정기 구독\n    </button>\n     -->\n    <a class="test" *ngFor="let opt of option; let i = index">\n\n      <button ion-button (click)="clickbutton(i)" \n        [ngClass]="select_option===i?\'B_on\':\'B_off\'"\n        *ngIf="more_info||(i==0||i==3)"\n        style="width: 40%; height: 100px;">\n        {{opt.price}}원\n        <br>\n        {{opt.text}}\n      </button>\n      \n    </a>\n\n\n    <button ion-button *ngIf="more_info===false" (click)="add_menu()">\n      더 많은 정보 보기\n    </button>\n    <button ion-button *ngIf="more_info===true" (click)="dismiss()">\n      닫기\n    </button>\n\n    <button ion-button (click)="purchase()">\n      OK계속하기\n    </button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/ad/ad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_purchase__["a" /* InAppPurchase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], AdPage);
    return AdPage;
}());

//# sourceMappingURL=ad.js.map

/***/ }),

/***/ 275:
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
            selector: 'page-rate',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/rate/rate.html"*/'<ion-content class="main-view" style="background: transparent;\n  background-color: white;\n  outline-color:black;\n  border: solid 1px;\n  border-radius: 10px;\n  height: 80%;\n  width:80%;\n  top: 10%;\n  left:10%;\n  " padding>\n\n  <div>\n    <button ion-button (click)="dismiss()" ng-show="more_info">\n      닫기\n    </button>\n\n    <button ion-button (click)="appstore()">\n      앱 평가하기\n    </button>\n  </div>\n      \n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/rate/rate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], RatePage);
    return RatePage;
}());

//# sourceMappingURL=rate.js.map

/***/ }),

/***/ 276:
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
        this.viewCtrl.dismiss();
    };
    CopymodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-copymodal',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/copymodal/copymodal.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>복사하기</ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss() ">취소</button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n        <ion-checkbox name="check1" [(ngModel)]="data1" (click)="allValue1()"></ion-checkbox>\n        <ion-label>구입하지 않은 목록</ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-checkbox name="check2" [(ngModel)]="data2" (click)="allValue2()"></ion-checkbox>\n        <ion-label>구입한 목록</ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-checkbox name="check3" [(ngModel)]="data3" (click)="allValue3()"></ion-checkbox>\n        <ion-label>전체 목록</ion-label>\n    </ion-item>\n\n    <button (click)="newCopy()">신규로 복사하기</button>\n    <button (click)="btn()">기존 목록에 덧붙이기</button>\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/copymodal/copymodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], CopymodalPage);
    return CopymodalPage;
}());

//# sourceMappingURL=copymodal.js.map

/***/ }),

/***/ 277:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListlimitmodalPage);
    return ListlimitmodalPage;
}());

//# sourceMappingURL=listlimitmodal.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MartlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__martmap_martmap__ = __webpack_require__(280);
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
    function MartlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MartlistPage.prototype.martmap = function (id) {
        console.log("hi");
        console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__martmap_martmap__["a" /* MartmapPage */], { "id": id });
    };
    MartlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-martlist',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/martlist/martlist.html"*/'<ion-content>\n    <div style="background-color: #71E8E8; margin-bottom:5px; display:flex;">\n        <img src="./assets/imgs/008-버튼-PPT 4페이지의 가운데 이미지의 상단 좌측-말 얼굴.png" style="width:50px; margin:5px;" alt="">\n        <span style="color:white; font-size:18px; font-weight: 900; margin:auto;">매장 유형을 선택해주세요</span>\n        <button style="background-color:#71E8E8;"><img src="./assets/imgs/004-버튼-PPT 3페이지의 이미지의 상단 가운데-광고금지.png" style="width:25px;"></button>\n        <button style="background-color:#71E8E8;"><img src="./assets/imgs/005-버튼-PPT 3페이지의 이미지의 상단 우측-평가하기 별점주기.png" style="width:25px;"></button>\n        <button style="background-color:#71E8E8;"><img src="./assets/imgs/006-버튼-PPT 3페이지의 이미지의 상단 우측-공유하기 점 세개.png" style="width:25px;"></button>\n    </div>\n    <div>\n        <ion-item-group>\n            <ion-item-divider color="light">마트</ion-item-divider>\n            <button ion-item (click)="martmap(\'lottemart\')"><img src="./assets/imgs/009-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-롯데마트 CI.png" style="width:15%; height:10%; margin-right:20px;">롯데마트</button>\n            <button ion-item (click)="martmap(\'emart\')"><img src="./assets/imgs/010-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-이마트 CI.png" style="width:15%; margin-right:20px;">이마트</button>\n            <button ion-item (click)="martmap(\'homeplus\')"><img src="./assets/imgs/011-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-홈플러스 CI.png" style="width:15%; margin-right:20px;">홈플러스</button>\n            <button ion-item (click)="martmap(\'costco\')"><img src="./assets/imgs/012-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-코스트코 CI.png" style="width:15%; margin-right:20px;">코스트코</button>\n            <button ion-item (click)="martmap(\'traders\')"><img src="./assets/imgs/013-버튼-PPT 4페이지의 가운데 이미지의 마트별 로고-이마트 트레이더스 CI.png" style="width:15%; margin-right:20px;">이마트 트레이더스</button>\n        </ion-item-group>\n        <ion-item-group>\n            <ion-item-divider color="light">백화점</ion-item-divider>\n            <button ion-item (click)="martmap(\'lottedep\')"><img src="./assets/imgs/020-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-롯데백화점 CI.png" style="width:15%; height:10%; margin-right:20px;">롯데 백화점</button>\n            <button ion-item (click)="martmap(\'ssgdep\')"><img src="./assets/imgs/021-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-신세백화점 CI.png" style="width:15%; margin-right:20px;">신세계 백화점</button>\n            <button ion-item (click)="martmap(\'hyundep\')"><img src="./assets/imgs/022-버튼-PPT 4페이지의 가운데 이미지의 백화점별 로고-현대백화점 CI.png" style="width:15%; margin-right:20px;">현대 백화점</button>\n        </ion-item-group>\n        <ion-item-group>\n            <ion-item-divider color="light">아울렛</ion-item-divider>\n            <button ion-item (click)="martmap(\'lotteout\')"><img src="./assets/imgs/023-버튼-PPT 4페이지의 가운데 이미지의 아울렛별 로고-롯데아울렛 CI.png" style="width:15%; height:10%; margin-right:20px;">롯데 아울렛</button>\n            <button ion-item (click)="martmap(\'ssgout\')"><img src="./assets/imgs/025-버튼-PPT 4페이지의 가운데 이미지의 아울렛별 로고-신세계아울렛 CI.png" style="width:15%; margin-right:20px;">신세계 아울렛</button>\n            <button ion-item (click)="martmap(\'hyunout\')"><img src="./assets/imgs/024-버튼-PPT 4페이지의 가운데 이미지의 아울렛별 로고-현대아울렛 CI.png" style="width:15%; margin-right:20px;">현대 아울렛</button>\n        </ion-item-group>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/martlist/martlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MartlistPage);
    return MartlistPage;
}());

//# sourceMappingURL=martlist.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MartmapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__martinfo_martinfo__ = __webpack_require__(281);
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
    function MartmapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.martflag = 0;
        this.id = this.navParams.get("id");
        this.listPrint();
    }
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
            selector: 'page-martmap',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/martmap/martmap.html"*/'<ion-content>\n    <div style="background-color: #71E8E8; margin-bottom:5px; display:flex;">\n        <img src="./assets/imgs/008-버튼-PPT 4페이지의 가운데 이미지의 상단 좌측-말 얼굴.png" style="width:50px; margin:5px;" alt="">\n        <span style="color:white; font-size:18px; font-weight: 900; margin:auto;">지역을 선택해주세요</span>\n        <button style="background-color:#71E8E8;"><img src="./assets/imgs/004-버튼-PPT 3페이지의 이미지의 상단 가운데-광고금지.png" style="width:25px;"></button>\n        <button style="background-color:#71E8E8;"><img src="./assets/imgs/005-버튼-PPT 3페이지의 이미지의 상단 우측-평가하기 별점주기.png" style="width:25px;"></button>\n        <button style="background-color:#71E8E8;"><img src="./assets/imgs/006-버튼-PPT 3페이지의 이미지의 상단 우측-공유하기 점 세개.png" style="width:25px;"></button>\n    </div>\n    <ion-item-divider color="light"><img src="{{img}}" style="width:50px;margin-right:10px;">{{name}}</ion-item-divider>\n    <div *ngIf="martflag==1">\n        <button (click)="lottemartlist(\'gangwon\')" style="position:absolute; left:47%; top:27%; width:60px; height: 60px; opacity: 0;">강원</button>\n        <button (click)="lottemartlist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="lottemartlist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="lottemartlist(\'incheon\')" style="position:absolute; left:9%; top:34%; width:40px; height: 30px; opacity: 0;">인천</button>\n        <button (click)="lottemartlist(\'chungnam\')" style="position:absolute; left:16%; top:48%; width:40px; height: 30px; opacity: 0;">충남</button>\n        <button (click)="lottemartlist(\'chungbuk\')" style="position:absolute; left:40%; top:42%; width:40px; height: 30px; opacity: 0;">충북</button>\n        <!-- <button (click)="lottemartlist(\'sejong\')" style="position:absolute; left:30%; top:47%; width:40px; height: 30px; opacity: 0;">세종</button> -->\n        <button (click)="lottemartlist(\'daejeon\')" style="position:absolute; left:30%; top:53%; width:40px; height: 30px; opacity: 0;">대전</button>\n        <button (click)="lottemartlist(\'gyeongbuk\')" style="position:absolute; left:61%; top:50%; width:40px; height: 30px; opacity: 0;">경북</button>\n        <button (click)="lottemartlist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <button (click)="lottemartlist(\'ulsan\')" style="position:absolute; left:71%; top:62%; width:40px; height: 30px; opacity: 0;">울산</button>\n        <button (click)="lottemartlist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <button (click)="lottemartlist(\'gyeongnam\')" style="position:absolute; left:48%; top:65%; width:40px; height: 30px; opacity: 0;">경남</button>\n        <button (click)="lottemartlist(\'jeonbuk\')" style="position:absolute; left:26%; top:60%; width:40px; height: 30px; opacity: 0;">전북</button>\n        <button (click)="lottemartlist(\'gwangju\')" style="position:absolute; left:19%; top:69%; width:40px; height: 30px; opacity: 0;">광주</button>\n        <button (click)="lottemartlist(\'jeonnam\')" style="position:absolute; left:20%; top:75%; width:40px; height: 30px; opacity: 0;">전남</button>\n        <button (click)="lottemartlist(\'jeju\')" style="position:absolute; left:5%; top:88%; width:40px; height: 30px; opacity: 0;">제주</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n    <div *ngIf="martflag==2">\n        <button (click)="emartlist(\'gangwon\')" style="position:absolute; left:47%; top:27%; width:60px; height: 60px; opacity: 0;">강원</button>\n        <button (click)="emartlist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="emartlist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="emartlist(\'incheon\')" style="position:absolute; left:9%; top:34%; width:40px; height: 30px; opacity: 0;">인천</button>\n        <button (click)="emartlist(\'chungnam\')" style="position:absolute; left:16%; top:48%; width:40px; height: 30px; opacity: 0;">충남</button>\n        <button (click)="emartlist(\'chungbuk\')" style="position:absolute; left:40%; top:42%; width:40px; height: 30px; opacity: 0;">충북</button>\n        <button (click)="emartlist(\'daejeon\')" style="position:absolute; left:30%; top:53%; width:40px; height: 30px; opacity: 0;">대전</button>\n        <button (click)="emartlist(\'gyeongbuk\')" style="position:absolute; left:61%; top:50%; width:40px; height: 30px; opacity: 0;">경북</button>\n        <button (click)="emartlist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <button (click)="emartlist(\'ulsan\')" style="position:absolute; left:71%; top:62%; width:40px; height: 30px; opacity: 0;">울산</button>\n        <button (click)="emartlist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <button (click)="emartlist(\'gyeongnam\')" style="position:absolute; left:48%; top:65%; width:40px; height: 30px; opacity: 0;">경남</button>\n        <button (click)="emartlist(\'jeonbuk\')" style="position:absolute; left:26%; top:60%; width:40px; height: 30px; opacity: 0;">전북</button>\n        <button (click)="emartlist(\'gwangju\')" style="position:absolute; left:19%; top:69%; width:40px; height: 30px; opacity: 0;">광주</button>\n        <button (click)="emartlist(\'jeonnam\')" style="position:absolute; left:20%; top:75%; width:40px; height: 30px; opacity: 0;">전남</button>\n        <button (click)="emartlist(\'jeju\')" style="position:absolute; left:5%; top:88%; width:40px; height: 30px; opacity: 0;">제주</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n    <div *ngIf="martflag==3">\n        <button (click)="homepluslist(\'gangwon\')" style="position:absolute; left:47%; top:27%; width:60px; height: 60px; opacity: 0;">강원</button>\n        <button (click)="homepluslist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="homepluslist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="homepluslist(\'incheon\')" style="position:absolute; left:9%; top:34%; width:40px; height: 30px; opacity: 0;">인천</button>\n        <button (click)="homepluslist(\'chungnam\')" style="position:absolute; left:16%; top:48%; width:40px; height: 30px; opacity: 0;">충남</button>\n        <button (click)="homepluslist(\'chungbuk\')" style="position:absolute; left:40%; top:42%; width:40px; height: 30px; opacity: 0;">충북</button>\n        <button (click)="homepluslist(\'sejong\')" style="position:absolute; left:30%; top:47%; width:40px; height: 30px; opacity: 0;">세종</button>\n        <button (click)="homepluslist(\'daejeon\')" style="position:absolute; left:30%; top:53%; width:40px; height: 30px; opacity: 0;">대전</button>\n        <button (click)="homepluslist(\'gyeongbuk\')" style="position:absolute; left:61%; top:50%; width:40px; height: 30px; opacity: 0;">경북</button>\n        <button (click)="homepluslist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <button (click)="homepluslist(\'ulsan\')" style="position:absolute; left:71%; top:62%; width:40px; height: 30px; opacity: 0;">울산</button>\n        <button (click)="homepluslist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <button (click)="homepluslist(\'gyeongnam\')" style="position:absolute; left:48%; top:65%; width:40px; height: 30px; opacity: 0;">경남</button>\n        <button (click)="homepluslist(\'jeonbuk\')" style="position:absolute; left:26%; top:60%; width:40px; height: 30px; opacity: 0;">전북</button>\n        <button (click)="homepluslist(\'gwangju\')" style="position:absolute; left:19%; top:69%; width:40px; height: 30px; opacity: 0;">광주</button>\n        <button (click)="homepluslist(\'jeonnam\')" style="position:absolute; left:20%; top:75%; width:40px; height: 30px; opacity: 0;">전남</button>\n        <button (click)="homepluslist(\'jeju\')" style="position:absolute; left:5%; top:88%; width:40px; height: 30px; opacity: 0;">제주</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n    <div *ngIf="martflag==4">\n        <button (click)="costcolist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="costcolist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="costcolist(\'incheon\')" style="position:absolute; left:9%; top:34%; width:40px; height: 30px; opacity: 0;">인천</button>\n        <button (click)="costcolist(\'chungnam\')" style="position:absolute; left:16%; top:48%; width:40px; height: 30px; opacity: 0;">충남</button>\n        <button (click)="costcolist(\'sejong\')" style="position:absolute; left:30%; top:47%; width:40px; height: 30px; opacity: 0;">세종</button>\n        <button (click)="costcolist(\'daejeon\')" style="position:absolute; left:30%; top:53%; width:40px; height: 30px; opacity: 0;">대전</button>\n        <button (click)="costcolist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <button (click)="costcolist(\'ulsan\')" style="position:absolute; left:71%; top:62%; width:40px; height: 30px; opacity: 0;">울산</button>\n        <button (click)="costcolist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n    <div *ngIf="martflag==5">\n        <button (click)="traderslist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="traderslist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="traderslist(\'incheon\')" style="position:absolute; left:9%; top:34%; width:40px; height: 30px; opacity: 0;">인천</button>\n        <button (click)="traderslist(\'chungnam\')" style="position:absolute; left:16%; top:48%; width:40px; height: 30px; opacity: 0;">충남</button>\n        <button (click)="traderslist(\'daejeon\')" style="position:absolute; left:30%; top:53%; width:40px; height: 30px; opacity: 0;">대전</button>\n        <button (click)="traderslist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <button (click)="traderslist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <button (click)="traderslist(\'gyeongnam\')" style="position:absolute; left:48%; top:65%; width:40px; height: 30px; opacity: 0;">경남</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n\n    </div>\n    <div *ngIf="martflag==6">\n        <button (click)="lottedeplist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="lottedeplist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="lottedeplist(\'incheon\')" style="position:absolute; left:9%; top:34%; width:40px; height: 30px; opacity: 0;">인천</button>\n        <button (click)="lottedeplist(\'daejeon\')" style="position:absolute; left:30%; top:53%; width:40px; height: 30px; opacity: 0;">대전</button>\n        <button (click)="lottedeplist(\'gyeongbuk\')" style="position:absolute; left:61%; top:50%; width:40px; height: 30px; opacity: 0;">경북</button>\n        <button (click)="lottedeplist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <button (click)="lottedeplist(\'ulsan\')" style="position:absolute; left:71%; top:62%; width:40px; height: 30px; opacity: 0;">울산</button>\n        <button (click)="lottedeplist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <button (click)="lottedeplist(\'gyeongnam\')" style="position:absolute; left:48%; top:65%; width:40px; height: 30px; opacity: 0;">경남</button>\n        <button (click)="lottedeplist(\'jeonbuk\')" style="position:absolute; left:26%; top:60%; width:40px; height: 30px; opacity: 0;">전북</button>\n        <button (click)="lottedeplist(\'gwangju\')" style="position:absolute; left:19%; top:69%; width:40px; height: 30px; opacity: 0;">광주</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n    <div *ngIf="martflag==7">\n        <button (click)="ssgdeplist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="ssgdeplist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="ssgdeplist(\'chungnam\')" style="position:absolute; left:16%; top:48%; width:40px; height: 30px; opacity: 0;">충남</button>\n        <button (click)="ssgdeplist(\'daejeon\')" style="position:absolute; left:30%; top:53%; width:40px; height: 30px; opacity: 0;">대전</button>\n        <button (click)="ssgdeplist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <button (click)="ssgdeplist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <button (click)="ssgdeplist(\'gyeongnam\')" style="position:absolute; left:48%; top:65%; width:40px; height: 30px; opacity: 0;">경남</button>\n        <button (click)="ssgdeplist(\'gwangju\')" style="position:absolute; left:19%; top:69%; width:40px; height: 30px; opacity: 0;">광주</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n    <div *ngIf="martflag==8">\n        <button (click)="hyundeplist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="hyundeplist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="hyundeplist(\'chungbuk\')" style="position:absolute; left:40%; top:42%; width:40px; height: 30px; opacity: 0;">충북</button>\n        <button (click)="hyundeplist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <button (click)="hyundeplist(\'ulsan\')" style="position:absolute; left:71%; top:62%; width:40px; height: 30px; opacity: 0;">울산</button>\n        <button (click)="hyundeplist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n    <div *ngIf="martflag==9">\n        <button (click)="lotteoutlist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="lotteoutlist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="lotteoutlist(\'chungnam\')" style="position:absolute; left:16%; top:48%; width:40px; height: 30px; opacity: 0;">충남</button>\n        <button (click)="lotteoutlist(\'chungbuk\')" style="position:absolute; left:40%; top:42%; width:40px; height: 30px; opacity: 0;">충북</button>\n        <button (click)="lotteoutlist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <button (click)="lotteoutlist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <button (click)="lotteoutlist(\'gyeongnam\')" style="position:absolute; left:48%; top:65%; width:40px; height: 30px; opacity: 0;">경남</button>\n        <button (click)="lotteoutlist(\'jeonbuk\')" style="position:absolute; left:26%; top:60%; width:40px; height: 30px; opacity: 0;">전북</button>\n        <button (click)="lotteoutlist(\'gwangju\')" style="position:absolute; left:19%; top:69%; width:40px; height: 30px; opacity: 0;">광주</button>\n        <button (click)="lotteoutlist(\'jeonnam\')" style="position:absolute; left:20%; top:75%; width:40px; height: 30px; opacity: 0;">전남</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n    <div *ngIf="martflag==10">\n        <button (click)="ssgoutlist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="ssgoutlist(\'busan\')" style="position:absolute; left:66%; top:70%; width:40px; height: 30px; opacity: 0;">부산</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n    <div *ngIf="martflag==11">\n        <button (click)="hyunoutlist(\'seoul\')" style="position:absolute; left:22%; top:32%; width:40px; height: 30px; opacity: 0;">서울</button>\n        <button (click)="hyunoutlist(\'gyeonggi\')" style="position:absolute; left:26%; top:38%; width:43px; height: 30px; opacity: 0;">경기</button>\n        <button (click)="hyunoutlist(\'incheon\')" style="position:absolute; left:9%; top:34%; width:40px; height: 30px; opacity: 0;">인천</button>\n        <button (click)="hyunoutlist(\'daegu\')" style="position:absolute; left:58%; top:58%; width:40px; height: 30px; opacity: 0;">대구</button>\n        <img src=" {{map}} " style="margin-top:-120px; ">\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/martmap/martmap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MartmapPage);
    return MartmapPage;
}());

//# sourceMappingURL=martmap.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MartinfoPage; });
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
 * Generated class for the MartinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MartinfoPage = /** @class */ (function () {
    function MartinfoPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.day = new Date();
        this.martArray = [];
        this.firemain = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref();
        this.week = [];
        this.dayweek = [];
        this.dayoff = [];
        this.todayy = [];
        this.vacationArr = [];
        this.userarr = [];
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
    MartinfoPage.prototype.weekAndDay = function () {
        var date = new Date, days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'], prefixes = ['첫째주', '둘째주', '셋째주', '넷째주', '다섯째주'];
        this.whatWeek = prefixes[0 | date.getDate() / 7];
        this.dayy = days[date.getDay()];
        console.log("this.dayy is " + this.dayy);
        // this.whatWeek = '둘째주';
        console.log("this.whatWeek is " + this.whatWeek);
        var w = prefixes[0 | date.getDate() / 7] + ' ' + days[date.getDay()];
        console.log(w);
    };
    MartinfoPage.prototype.theDate = function () {
        var datee = new Date, days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'], prefixes = ['첫째주', '둘째주', '셋째주', '넷째주', '다섯째주'];
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
            if (this.dayOfweek >= 7) {
                this.dayOfweek = 0;
            }
            this.week.push({ "week": prefixes[0 | (date - 1) / 7], "day": date, "dayofweek": days[dow] });
        }
        console.log(this.week);
    };
    MartinfoPage.prototype.newfunction = function (name) {
        var _this = this;
        console.log(name);
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
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                        console.log(_this.martArray);
                        console.log(_this.week);
                    }
                    if (_this.area == "gyeonggi") {
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            var counting = 0;
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
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("강원") != -1) {
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacation = sn.val()[a][b].vacation;
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "chungbuk") {
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("충북") != -1) {
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacation = sn.val()[a][b].vacation;
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "chungnam") {
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("충남") != -1) {
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacation = sn.val()[a][b].vacation;
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "jeonbuk") {
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("전북") != -1) {
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacation = sn.val()[a][b].vacation;
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "jeonnam") {
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("전남") != -1) {
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacation = sn.val()[a][b].vacation;
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "gwangju") {
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("광주") != -1) {
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacation = sn.val()[a][b].vacation;
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "daejeon") {
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("대전") != -1) {
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacation = sn.val()[a][b].vacation;
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "gyeongbuk") {
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("경북") != -1) {
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacation = sn.val()[a][b].vacation;
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "gyeongnam") {
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("경남") != -1) {
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacation = sn.val()[a][b].vacation;
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "busan") {
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("부산") != -1) {
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacation = sn.val()[a][b].vacation;
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "ulsan") {
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("울산") != -1) {
                                _this.martArray.push(sn.val()[a][b]);
                                counting++;
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacationArr.push(sn.val()[a][b].vacation);
                                _this.vacation = sn.val()[a][b].vacation;
                                _this.vacationFunc(_this.week, sn.val()[a][b], counting);
                            }
                        }
                    }
                    if (_this.area == "jeju") {
                        for (var b in sn.val()[a]) {
                            _this.vacation = sn.val()[a][b].vacation;
                            if (sn.val()[a][b].addr.indexOf("제주") != -1) {
                                _this.martArray.push(sn.val()[a][b]);
                                _this.vacation = sn.val()[a][b].vacation;
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
    MartinfoPage.prototype.weekcheck = function (mart) {
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
        return returnvalue;
    };
    MartinfoPage.prototype.vacationFunc = function (v, mart, count) {
        console.log(v); //this.week
        console.log(mart); //db
        console.log(count); //count
        console.log("mart to change json");
        console.log(this.martArray);
        var counting = 0;
        var dayoffarray = [];
        for (var a in v) {
            counting++;
            if (counting == 1) {
                console.log("first is");
                console.log(v[a].week, v[a].day + "," + v[a].dayofweek); //오늘 날짜
            }
            console.log(v[a].week); //몇주?
            console.log(v[a].dayofweek); //요일?
            if (mart.vacation.indexOf("첫째") > -1) { //db.vacation에 '첫째'라는 글자가 있을 경우
                if (v[a].week.indexOf("첫째") > -1 && v[a].week.indexOf("둘째") > -1) { //this.week에 '첫째','둘째'라는 글자가 있을 경우
                    var weekoff = this.weekcheck(this.martArray[count - 1]);
                    console.log("off is : " + weekoff);
                    console.log(weekoff + "1111,,," + v[a].dayofweek);
                    if (weekoff == v[a].dayofweek) {
                        dayoffarray.push("휴무");
                    }
                    else {
                        dayoffarray.push("영업");
                    }
                }
            }
            if (mart.vacation.indexOf("둘째") > -1) {
                if (v[a].week.indexOf("둘째") > -1 && v[a].week.indexOf("셋째") > -1) {
                    var weekoff = this.weekcheck(this.martArray[count - 1]);
                    console.log("off is : " + weekoff);
                    console.log(weekoff + "2222,,," + v[a].dayofweek);
                    ;
                    if (weekoff == v[a].dayofweek) {
                        dayoffarray.push("휴무");
                    }
                    else {
                        dayoffarray.push("영업");
                    }
                }
            }
            if (mart.vacation.indexOf("셋째") > -1) {
                if (v[a].week.indexOf("셋째") > -1 && v[a].week.indexOf("넷째") > -1) {
                    var weekoff = this.weekcheck(this.martArray[count - 1]);
                    console.log("off is : " + weekoff);
                    console.log(weekoff + "333,,," + v[a].dayofweek);
                    if (weekoff == v[a].dayofweek) {
                        dayoffarray.push("휴무");
                    }
                    else {
                        dayoffarray.push("영업");
                    }
                }
            }
            if (mart.vacation.indexOf("넷째") > -1) {
                // if(v[a].week.indexOf("넷째")>-1&&v[a].week.indexOf("다섯째")>-1){
                var weekoff = this.weekcheck(this.martArray[count - 1]);
                console.log("off is : " + weekoff);
                console.log(weekoff + "444,,," + v[a].dayofweek);
                if (weekoff == v[a].dayofweek) {
                    dayoffarray.push("휴무");
                }
                else {
                    dayoffarray.push("영업");
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
            console.log("done");
            console.log(dayoffarray);
            this.today = dayoffarray[0];
        }
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
        var flag = this.martArray[idx].favorite;
        if (flag != true) {
            console.log(flag);
            this.martArray[idx].favorite = true;
            this.firemain.child("users").child(this.userId).child("favorite").child(newnametoinput).child(a.key).update(this.martArray[idx]);
            console.log(this.martArray[idx]);
            var toast = this.toastCtrl.create({
                message: '첫 화면 "즐겨찾기"에 추가되었습니다.',
                duration: 2000,
            });
            toast.present();
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
    MartinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-martinfo',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/martinfo/martinfo.html"*/'<ion-content>\n    <div style="background-color: #71E8E8; margin-bottom:5px; display:flex;">\n        <img src="./assets/imgs/008-버튼-PPT 4페이지의 가운데 이미지의 상단 좌측-말 얼굴.png" style="width:50px; margin:5px;" alt="">\n        <span style="color:white; font-size:18px; font-weight: 900; margin:auto;">즐겨찾기 추가는 "♡"터치</span>\n        <button style="background-color:#71E8E8;"><img src="./assets/imgs/004-버튼-PPT 3페이지의 이미지의 상단 가운데-광고금지.png" style="width:25px;"></button>\n        <button style="background-color:#71E8E8;"><img src="./assets/imgs/005-버튼-PPT 3페이지의 이미지의 상단 우측-평가하기 별점주기.png" style="width:25px;"></button>\n        <button style="background-color:#71E8E8;"><img src="./assets/imgs/006-버튼-PPT 3페이지의 이미지의 상단 우측-공유하기 점 세개.png" style="width:25px;"></button>\n    </div>\n    <div style="background-color: #fafafa;">\n        <ion-item-divider color="light"><img src="{{img}}" style="width:50px;margin-right:10px;">{{name}}</ion-item-divider>\n        <ion-item-group style="background-color: #fafafa;">\n            <div *ngFor="let i of martArray; let idx = index " class="border">\n                <button style="background-color: white;" class="btn1">\n                  <table>\n                    <thead>\n                      <th class="martname" style="margin-top: 10px;">\n                        {{i.name}}\n                      </th>\n                      <th class="dayoffimg">\n                        <img *ngIf="today==\'영업\'" src="./assets/imgs/043-버튼-PPT 5페이지의 우측 이미지 영업 알림 버튼-오늘 영업.png" style="width:60%;">\n                        <img *ngIf="today==\'휴무\'" src="./assets/imgs/044-버튼-PPT 5페이지의 우측 이미지 영업 알림 버튼-오늘 휴무.png" style="width:60%;">\n                        <button (click)="favorite(i, idx);" style="width:40px; height:40px; background-color: white;">\n                          <img *ngIf="i.favorite==\'false\'" src="./assets/imgs/045-버튼-PPT 5페이지의 우측 이미지 즐겨찾기 하트 버튼-블랭크 하트(즐겨찾기전).png" style="width:100%;" alt="">\n                          <img *ngIf="i.favorite==true" src="./assets/imgs/046-버튼-PPT 5페이지의 우측 이미지 즐겨찾기 하트 버튼-노란 하트(즐겨찾기후).png" style="width:100%;" alt="">\n                          <img *ngIf="i.favorite==false" src="./assets/imgs/045-버튼-PPT 5페이지의 우측 이미지 즐겨찾기 하트 버튼-블랭크 하트(즐겨찾기전).png" style="width:100%;" alt="">\n                        </button>\n                </th>\n                </thead>\n                </table>\n                <table>\n                    <tbody>\n                        <tr class="datespan">\n                            {{todayy}}\n                        </tr>\n                        <tr class="datespan">\n                            <td *ngFor="let j of week" class="tabletd">\n                                <span>{{j.dayofweek}}</span>\n                            </td>\n                        </tr>\n                        <tr class="datespan">\n                            <td *ngFor="let j of week" class="tabletd">\n                                <span>{{month}}/{{j.day}}</span>\n                            </td>\n                        </tr>\n                        <tr class="datespan">\n                            <td *ngFor="let m of i.dayoffarray" class="tabletd">\n                                <span *ngIf="m==\'휴무\'" class="mSpan1">{{m}}</span>\n                                <span *ngIf="m==\'영업\'" class="mSpan2">{{m}}</span>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                </button>\n            </div>\n        </ion-item-group>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/martinfo/martinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], MartinfoPage);
    return MartinfoPage;
}());

//# sourceMappingURL=martinfo.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MartinfoviewPage; });
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
 * Generated class for the MartinfoviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MartinfoviewPage = /** @class */ (function () {
    function MartinfoviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.id = "a2f05b91-956a-b480-3525-991002905558";
        this.firemain = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref();
        this.martinfo = [];
        this.martinfo = this.navParams.get("martinfo");
        console.log(this.martinfo);
        this.firemain.child("users").child(this.id).once("value", function (sn) {
            for (var a in sn.val()) {
                console.log(sn.val()[a]);
            }
        });
    }
    MartinfoviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-martinfoview',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/martinfoview/martinfoview.html"*/'<!--\n  Generated template for the MartinfoviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>martinfoview</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div>\n        {{martinfo.storename}}\n    </div>\n    <div>\n        <span>1.정기휴무일 : {{martinfo.vacation}}</span><br>\n        <span>2.대표번호 : {{martinfo.tel}}</span><br>\n        <span>3.위치 : {{martinfo.addr}}</span><br>\n        <span>4.영업시간 : {{martinfo.optime}}</span>\n    </div>\n    <div>\n        <button>전화걸기</button>\n        <button>지도확인</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/martinfoview/martinfoview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MartinfoviewPage);
    return MartinfoviewPage;
}());

//# sourceMappingURL=martinfoview.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(386);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ad_ad__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_unique_device_id__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_speech_recognition__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_admob_free__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_addshoping_addshoping__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_viewshoppinglist_viewshoppinglist__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_social_sharing__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_setting_setting__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_purchase__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_rate_rate__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_copymodal_copymodal__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_listlimitmodal_listlimitmodal__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_martlist_martlist__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_martmap_martmap__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_martinfo_martinfo__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_martinfoview_martinfoview__ = __webpack_require__(282);
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
                __WEBPACK_IMPORTED_MODULE_28__pages_martinfoview_martinfoview__["a" /* MartinfoviewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["AngularFireDatabaseModule"],
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
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(265);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[381]);
//# sourceMappingURL=main.js.map