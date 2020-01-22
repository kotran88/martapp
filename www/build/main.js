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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number___ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(85);
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
    function HomePage(modal, socialSharing, iab, uniqueDeviceID, alertCtrl, callnumber, admobFree, navCtrl, navParams) {
        var _this = this;
        this.modal = modal;
        this.socialSharing = socialSharing;
        this.iab = iab;
        this.uniqueDeviceID = uniqueDeviceID;
        this.alertCtrl = alertCtrl;
        this.callnumber = callnumber;
        this.admobFree = admobFree;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firemain = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref();
        this.newarraylist = [];
        this.id = "a2f05b91-956a-b480-3525-991002905558";
        this.tab = "tab2";
        this.nextdirectory = this.firemain.child(this.id);
        this.count = 0;
        this.copyflag = false;
        this.checkedlistlength = 0;
        this.srct = {
            text: '',
            url: '',
        };
        this.fabButtonOpened = false;
        this.refreshname();
        __WEBPACK_IMPORTED_MODULE_8_jquery__(document).ready(function () {
            console.log("ready!");
            console.log(__WEBPACK_IMPORTED_MODULE_8_jquery__("#slt").val());
        });
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
        console.log(this.newarraylist);
        this.newarraylist = [];
        this.firemain.child(this.id).once("value", function (sn) {
            for (var a in sn.val()) {
                if (a != "setting") {
                    console.log(sn.val()[a]);
                    for (var b in sn.val()[a]) {
                        console.log("b" + b);
                        console.log(sn.val()[a][b]);
                        for (var c in sn.val()[a][b]) {
                            console.log("c" + c);
                            console.log(sn.val()[a][b][c]);
                            var checked = 0;
                            var listlength = 0;
                            for (var d in sn.val()[a][b][c].list) {
                                console.log(sn.val()[a][b][c].list.length);
                                listlength = sn.val()[a][b][c].list.length;
                                console.log(sn.val()[a][b][c].list[d]);
                                if (sn.val()[a][b][c].list[d].checked == true) {
                                    checked++;
                                }
                            }
                            _this.newarraylist.push({ "totallist": listlength, "totalchecked": checked, "flag": a, "list": sn.val()[a][b][c].list, "title": b, "time": sn.val()[a][b][c].time, "key": sn.val()[a][b][c].key });
                            console.log(_this.newarraylist);
                        }
                    }
                }
            }
        });
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
                        var key = _this.nextdirectory.push().key;
                        _this.firemain.child(_this.id).child(value).child(data.title).child(key).update({ "flag": "notyet" });
                        console.log(data.title); //이름
                        console.log(key);
                        console.log("selected value" + _this.selectedvalue);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__addshoping_addshoping__["a" /* AddshopingPage */], { "flag": _this.selectedvalue, "key": key, "id": _this.id, "title": data.title }).then(function () {
                            _this.navCtrl.getActive().onDidDismiss(function (data) {
                                console.log("dismiss detect");
                                _this.refreshname();
                            });
                        });
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
                                    _this.firemain.child(_this.id).child("mart").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a.key);
                                    });
                                    _this.refreshname();
                                }
                                if (a.flag == "dep") {
                                    var name = a.title;
                                    _this.firemain.child(_this.id).child("dep").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a.key);
                                    });
                                    _this.refreshname();
                                }
                                if (a.flag == "outlet") {
                                    var name = a.title;
                                    _this.firemain.child(_this.id).child("outlet").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a.key);
                                    });
                                    _this.refreshname();
                                }
                                if (a.flag == "etc") {
                                    var name = a.title;
                                    _this.firemain.child(_this.id).child("etc").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
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
                                    _this.firemain.child(_this.id).child("mart").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a);
                                    });
                                    _this.refreshname();
                                }
                                if (a.flag == "dep") {
                                    var name = a.title;
                                    _this.firemain.child(_this.id).child("dep").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a);
                                    });
                                    _this.refreshname();
                                }
                                if (a.flag == "outlet") {
                                    var name = a.title;
                                    _this.firemain.child(_this.id).child("outlet").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a);
                                    });
                                    _this.refreshname();
                                }
                                if (a.flag == "etc") {
                                    var name = a.title;
                                    _this.firemain.child(_this.id).child("etc").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
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
                                    _this.firemain.child(_this.id).child("mart").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a);
                                    });
                                    _this.refreshname();
                                }
                                if (a.flag == "dep") {
                                    var name = a.title;
                                    _this.firemain.child(_this.id).child("dep").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a);
                                    });
                                    _this.refreshname();
                                }
                                if (a.flag == "outlet") {
                                    var name = a.title;
                                    _this.firemain.child(_this.id).child("outlet").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
                                        console.log(a);
                                    });
                                    _this.refreshname();
                                }
                                if (a.flag == "etc") {
                                    var name = a.title;
                                    _this.firemain.child(_this.id).child("outlet").child(name).child(a.key).update({ flag: a.flag, key: a.key, list: newarray, time: a.time }).then(function () {
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__viewshoppinglist_viewshoppinglist__["a" /* ViewshoppinglistPage */], { "flag": a.flag, "obj": a, "id": this.id, "key": a.key });
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
                            _this.firemain.child(_this.id).child("mart").child(data.title).child(key.key).update(key).then(function () {
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
                            _this.firemain.child(_this.id).child("dep").child(data.title).child(key.key).update(key).then(function () {
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
                            _this.firemain.child(_this.id).child("outlet").child(data.title).child(key.key).update(key).then(function () {
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
                            _this.firemain.child(_this.id).child("etc").child(data.title).child(key.key).update(key).then(function () {
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
        if (key.flag == "mart") {
            var a = key.title + "복사본";
            this.firemain.child(this.id).child("mart").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "dep") {
            var a = key.title + "복사본";
            this.firemain.child(this.id).child("dep").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "outlet") {
            var a = key.title + "복사본";
            this.firemain.child(this.id).child("outlet").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "etc") {
            var a = key.title + "복사본";
            this.firemain.child(this.id).child("etc").child(a).child(key.key).update(key).then(function () {
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
            this.firemain.child(this.id).child("mart").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "dep") {
            var a = key.title + "복사본";
            this.firemain.child(this.id).child("dep").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "outlet") {
            var a = key.title + "복사본";
            this.firemain.child(this.id).child("outlet").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "etc") {
            var a = key.title + "복사본";
            this.firemain.child(this.id).child("etc").child(a).child(key.key).update(key).then(function () {
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
            this.firemain.child(this.id).child("mart").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "dep") {
            var a = key.title + "복사본";
            this.firemain.child(this.id).child("dep").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "outlet") {
            var a = key.title + "복사본";
            this.firemain.child(this.id).child("outlet").child(a).child(key.key).update(key).then(function () {
                console.log(key);
            });
            this.refreshname();
        }
        if (key.flag == "etc") {
            var a = key.title + "복사본";
            this.firemain.child(this.id).child("etc").child(a).child(key.key).update(key).then(function () {
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/home/home.html"*/'<ion-content padding>\n    <div class="upper">\n        <ion-row style="margin-bottom:0" class="search">\n            <ion-col width-100>\n                <ion-searchbar style="float:left;width: 50%; padding:6px;" placeholder="입력하세요" [(ngModel)]="startPoint" clearInput></ion-searchbar>\n\n                <button ion-button icon-only style="margin-right: -10px;" (click)="NoneAd()" color="primary" clear>\n                    <ion-icon class="ad-icon" name="eye-off"></ion-icon>\n                  </button>\n\n                <button ion-button icon-only style="margin-right: -10px;" (click)="appstore()" color="primary" clear>\n                    <ion-icon class="appstore-icon" name="star"></ion-icon>\n                  </button>\n\n                <button ion-button icon-only style="margin-right: -10px;" (click)="regularShare()" color="primary" clear>\n                    <ion-icon class="share-icon" name="share"></ion-icon>\n                  </button>\n\n                <button ion-button icon-only (click)="setting()" color=\'primary\' clear>\n                  <ion-icon class="setting-icon" name="settings"></ion-icon>\n                </button>\n\n\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <ion-segment style="background:#353c5e;font-size: 16px;letter-spacing: -0.35px" (ionChange)="segmentChanged($event)" [(ngModel)]="tab">\n        <ion-segment-button value="tab1" [ngClass]="tab==\'tab1\'?\'view\':\'notview\'">\n            <span style="font-family: \'notomedium\';">즐겨찾는곳</span>\n        </ion-segment-button>\n        <ion-segment-button value="tab2" [ngClass]="tab==\'tab2\'?\'view\':\'notview\'">\n            <span style="font-family: \'notomedium\';" class="">쇼핑예정목록</span>\n        </ion-segment-button>\n        <ion-segment-button value="tab3" [ngClass]="tab==\'tab3\'?\'view\':\'notview\'">\n            <span style="font-family: \'notomedium\';" class="">인터넷에선얼마?</span>\n        </ion-segment-button>\n\n    </ion-segment>\n    <div [ngSwitch]="tab" style="height:100%;">\n        <ion-list *ngSwitchCase="\'tab1\'">\n            first tab\n\n        </ion-list>\n        <ion-list *ngSwitchCase="\'tab2\'">\n            <div class="topselector">\n                <p>쇼핑 목록 만들기! 어디서 쇼핑하실 건가요?</p>\n                <div class="button">\n                    <button style="background-color:#fff;" (click)="addlist(\'mart\')"><img src="assets/imgs/mes.png" alt=""></button><br>\n                    <div><button style="background-color:#fff;" (click)="addlist(\'mart\')">마트</button></div>\n                </div>\n                <div class="button">\n                    <button style="background-color:#fff;" (click)="addlist(\'dep\')"><img src="assets/imgs/mes.png" alt=""></button><br>\n                    <div><button style="background-color:#fff;" (click)="addlist(\'dep\')">백화점</button></div>\n                </div>\n                <div class="button">\n                    <button style="background-color:#fff;" (click)="addlist(\'outlet\')"><img src="assets/imgs/mes.png" alt=""></button><br>\n                    <div><button style="background-color:#fff;" (click)="addlist(\'outlet\')">아울렛</button></div>\n                </div>\n                <div class="button">\n                    <button style="background-color:#fff;" (click)="addlist(\'etc\')"><img src="assets/imgs/mes.png" alt=""></button><br>\n                    <div><button style="background-color:#fff;" (click)="addlist(\'etc\')">기타</button></div>\n                </div>\n            </div>\n            <div *ngFor="let a of newarraylist" class="eachshopping">\n                <div class="listDB">\n                    <div class="segmentImg">\n                        <button style="background-color:#fff;" (click)="deleteDB(a)">\n                            <img src="assets/imgs/delete (1).png">\n                        </button>\n                    </div>\n                    <div class="segmentText">\n                        {{a.flag}}\n                        <button style="background-color:#fff;" (click)="viewshoppinglist(a)">\n                            {{a.title}}\n                        </button>\n                    </div>\n                    <div>\n                        <button style="background-color:#fff;" (click)="viewshoppinglist(a)">\n                            {{a.time}}\n                        </button>\n                    </div>\n                    <div>\n                        {{a.totallist+"개 항목 중 "+a.totalchecked+"개 구입"}}\n                    </div>\n                    <div>\n                        <ion-fab right>\n                            <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n                            <ion-fab-list side="bottom">\n                                <button (click)="changeName(a)" ion-fab>\n                                    <ion-icon name="list"></ion-icon>\n                                    <ion-label>목록명 변경</ion-label>\n                                </button>\n                                <button (click)="share(a)" ion-fab>\n                                    <ion-icon name="share"></ion-icon>\n                                    <ion-label>공유</ion-label>\n                                </button>\n                                <button (click)="deleteDB(a)" ion-fab>\n                                    <ion-icon name="trash"></ion-icon>\n                                    <ion-label>삭제</ion-label>\n                                </button>\n                                <button (click)="openModal(a)" ion-fab>\n                                    <ion-icon name="copy"></ion-icon>\n                                    <ion-label>복사</ion-label>\n                                </button>\n                            </ion-fab-list>\n                        </ion-fab>\n                    </div>\n                </div>\n            </div>\n\n            <!-- <div><button style="background-color:#fff;" (click)="addlist()">(image)쇼핑 리스트를 추가해보자라는 말</button></div> -->\n\n        </ion-list>\n        <ion-list *ngSwitchCase="\'tab3\'">\n\n            <div>\n                <select style="display: inline-block; width:25%;" id=\'slt\' name="sort">\n                    <option value="rel" selected="selected">랭킹순</option>\n                    <option value="price_asc">낮은 가격순</option>\n                    <option value="price_dsc">높은 가격순</option>\n                    <option value="date">등록순</option>\n                    <option value="review">리뷰 많은순</option>\n                </select>\n\n                <ion-input style="margin-right: 0px; width: 60%; display: inline-block; border: 1px solid black;" name=\'text\' type="text" [(ngModel)]=\'srct.text\' placeholder="검색어를 입력해 주세요.">\n                </ion-input>\n\n                <button ion-button style="float: right; width:30px; height: 30px;" color="black" outline icon-only (click)=\'select_sort()\'>\n\n                    <ion-icon name=\'search\' is-active="false"></ion-icon>\n                </button>\n            </div>\n        </ion-list>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number___["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_speech_recognition__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(85);
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
                        _this.firemain.child(_this.id).child(_this.value).child(_this.title).remove().then(function () {
                            console.log("success");
                        });
                    }
                },
                {
                    text: '예',
                    handler: function (data) {
                        console.log(_this.addinglist);
                        console.log(_this.id);
                        console.log(_this.key);
                        console.log(_this.value);
                        _this.firemain.child(_this.id).child(_this.value).child(_this.title).child(_this.key).update({ "time": _this.nowtime, "flag": "entered", "key": _this.key });
                        _this.firemain.child(_this.id).child(_this.value).child(_this.title).child(_this.key).child("list").update(_this.addinglist);
                        window.alert("저장되었습니다.");
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
            selector: 'page-addshoping',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/addshoping/addshoping.html"*/'<!--\n  Generated template for the AddshopingPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    {{nowtime}} <button (click)="save()">저장</button>\n    <div class="totaldetail">\n        <p *ngIf="flag==true">{{totalnumber}} 중 {{selected}} </p>\n        <p *ngIf="flag==false">{{totalnumber}}</p>\n    </div>\n    <div class="main">\n        <ion-item *ngFor="let att of addinglist; let idx = index">\n            <ion-icon *ngIf="flag==false" name="close"></ion-icon>\n            <ion-checkbox [(ngModel)]="att.checked" style="z-index: 999999;" (ionChange)="addValue($event)" *ngIf="flag==true" color="dark" slot="start"></ion-checkbox>\n            <ion-input style="width: 20%;float: left;" placeholder="상품명" [(ngModel)]="addinglist[idx].name"></ion-input>\n            <ion-input style="width: 20%;float: right;" placeholder="수량" [(ngModel)]="addinglist[idx].quantity"></ion-input>\n            <ion-input style="width: 20%;float: right;" placeholder="가격" [(ngModel)]="addinglist[idx].price"></ion-input>\n        </ion-item>\n    </div>\n    <div style="position: absolute;bottom: 50px;width: 100%;" class="bottom">\n        <ion-input *ngIf="flag!=true" style="width: 63%;border-bottom: solid 1px;float: left;" [(ngModel)]="adding" placeholder="품목을 입력하세요."></ion-input>\n        <button *ngIf="flag!=true" style="height: 3.5rem;background: transparent;border: solid 1px;border-radius: 7px;margin-top: 5px;margin-left: 10px;" (click)="speeching()">음성</button>\n        <button *ngIf="flag!=true" style="height: 3.5rem;background: transparent;border: solid 1px;border-radius: 7px;margin-top: 5px;margin-left: 3px;" (click)="add()">추가하기</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/addshoping/addshoping.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(85);
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
        this.firemain.child(this.id).child(this.shop).child(this.title).child(this.key).child("list").once("value", function (snap) {
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
        this.firemain.child(this.id).child(this.shop).child(this.title).child(this.key).child("list").once("value", function (snap) {
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
        this.firemain.child(this.id).child(this.shop).child(this.title).child(this.key).child("list").once("value", function (snap) {
            for (var a = 0; a < snap.val().length; a++) {
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
                        console.log(_this.shop);
                        _this.firemain.child(_this.id).child(_this.shop).child(_this.title).child(_this.key).update({ "time": _this.nowtime, "flag": "entered", "key": _this.key });
                        _this.firemain.child(_this.id).child(_this.shop).child(_this.title).child(_this.key).child("list").update(_this.a.list);
                        _this.refreshname();
                        _this.showToastWithCloseButton();
                        _this.checkedbuy();
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
                        _this.firemain.child(_this.id).child(_this.shop).child(_this.title).child(_this.key).child("list").once("value", function (snap) {
                            for (var a in snap.val()) {
                                _this.firemain.child(_this.id).child(_this.shop).child(_this.title).child(_this.key).child("list").remove().then(function () {
                                    console.log("success");
                                }).catch(function (e) {
                                    console.log("error" + e);
                                });
                            }
                            /*삭제한 list를 update를 통해 수정된 데이터로 다시 넣어줌 */
                            _this.firemain.child(_this.id).child(_this.shop).child(_this.title).child(_this.key).child("list").update(_this.a.list).then(function () {
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
        this.firemain.child(this.id).child(this.shop).child(this.title).child(this.key).child("list").update(this.a.list).then(function () {
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */]) === "function" ? _a : Object)
    ], ViewshoppinglistPage.prototype, "navBar", void 0);
    ViewshoppinglistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewshoppinglist',template:/*ion-inline-start:"/Users/limchae/martapp/src/pages/viewshoppinglist/viewshoppinglist.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{a.title}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-row>\n        <ion-col col-9>\n            {{a.time}}\n        </ion-col>\n        <ion-col col-3>\n            <button (click)="save()">저장</button>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-8>\n            <span *ngIf="flag==false">{{totalnumber}}개 중 {{selected}}개 구입</span>\n            <span *ngIf="flag==true">{{totalnumber}}개</span>\n        </ion-col>\n        <ion-col col-4>\n            ₩{{printsum}}\n        </ion-col>\n    </ion-row>\n    <div class="main">\n        <ion-item *ngFor="let att of a.list; let idx = index">\n            <ion-icon *ngIf="flag==true" name="close"></ion-icon>\n            <ion-checkbox [(ngModel)]="att.checked" style="z-index: 999999;" (ionChange)="addValue($event)" *ngIf="flag==false" color="dark" slot="start"></ion-checkbox>\n            <ion-input text-center style="width: 20%;float: left;" placeholder="상품명" [(ngModel)]="a.list[idx].name"></ion-input>\n            <ion-input text-center style="width: 10%;float: left;" placeholder="수량" [(ngModel)]="a.list[idx].quantity"></ion-input>\n            <ion-input text-center style="width: 15%;float: left;" placeholder="가격" [(ngModel)]="a.list[idx].price"></ion-input>\n            <button ion-button outline item-end style="width:10%;" (click)="select_sort(idx)"><ion-icon name=\'search\' is-active="false"></ion-icon></button>\n        </ion-item>\n    </div>\n\n    <div style="bottom: 50px;width: 100%;" class="bottom">\n        <ion-input *ngIf="flag!=false" style="width: 65%;border-bottom: solid 1px;float: left;" [(ngModel)]="adding" placeholder="품목을 입력하세요."></ion-input>\n        <button *ngIf="flag!=false" style="height: 3.5rem;background: transparent;border: solid 1px;border-radius: 7px;margin-left: 4px;" (click)="speeching()">음성</button>\n        <button *ngIf="flag!=false" style="height: 3.5rem;background: transparent;border: solid 1px;border-radius: 7px;margin-top: 5px;margin-left: 3px;" (click)="add()">추가하기</button>\n        <button *ngIf="flag!=false&&flagInput==false" style="height: 3.5rem;background: transparent;border: solid 1px;border-radius: 7px;" (click)="priceandquantity()">가격 및 수량도 입력하기</button>\n        <ion-input *ngIf="flagInput!=false" style="width: 34%; height: 3.5rem; border-bottom: solid 1px; float: left; margin-right: 2px; margin-left:2px;" [(ngModel)]="quantity" placeholder="수량"></ion-input>\n        <ion-input *ngIf="flagInput!=false" style="width: 34%; height: 3.5rem; border-bottom: solid 1px; float: left; margin-left: 2px; margin-right:5px;" [(ngModel)]="price" placeholder="가격"></ion-input>\n        <button *ngIf="flagInput!=false" style="height: 3.5rem;background: transparent;border: solid 1px;border-radius: 7px;margin-top: 3px;margin-left: 10px;" (click)="cancel()">취소</button>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <div>\n        <ion-fab bottom right #fab>\n            <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n            <ion-fab-list side="top">\n                <button (click)="sortlist(fab)" ion-fab>\n                    <ion-icon name="list"></ion-icon>\n                    <ion-label>이름순으로 정렬</ion-label>\n                </button>\n                <button (click)="insertData(fab)" ion-fab>\n                    <ion-icon name="build"></ion-icon>\n                    <ion-label>수정하기</ion-label>\n                </button>\n                <button (click)="delete(fab)" ion-fab>\n                    <ion-icon name="trash"></ion-icon>\n                    <ion-label>삭제하기</ion-label>\n                </button>\n\n            </ion-fab-list>\n        </ion-fab>\n    </div>\n</ion-footer>'/*ion-inline-end:"/Users/limchae/martapp/src/pages/viewshoppinglist/viewshoppinglist.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__["a" /* AdMobFree */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__["a" /* AdMobFree */]) === "function" ? _g : Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" ? _h : Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" ? _j : Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" ? _k : Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
        this.viewCtrl.dismiss({ "data": "value" });
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

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(380);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ad_ad__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_unique_device_id__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_speech_recognition__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_admob_free__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_addshoping_addshoping__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_viewshoppinglist_viewshoppinglist__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_setting_setting__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_purchase__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_rate_rate__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_copymodal_copymodal__ = __webpack_require__(276);
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
                __WEBPACK_IMPORTED_MODULE_21__pages_rate_rate__["a" /* RatePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_addshoping_addshoping__["a" /* AddshopingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_viewshoppinglist_viewshoppinglist__["a" /* ViewshoppinglistPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_setting_setting__["b" /* licenseModalPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_setting_setting__["c" /* privacyModalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_ad_ad__["a" /* AdPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_copymodal_copymodal__["a" /* CopymodalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_addshoping_addshoping__["a" /* AddshopingPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_rate_rate__["a" /* RatePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_viewshoppinglist_viewshoppinglist__["a" /* ViewshoppinglistPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_setting_setting__["b" /* licenseModalPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_setting_setting__["c" /* privacyModalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_ad_ad__["a" /* AdPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_copymodal_copymodal__["a" /* CopymodalPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_purchase__["a" /* InAppPurchase */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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

},[375]);
//# sourceMappingURL=main.js.map