webpackJsonp([0],{

/***/ 212:
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
webpackEmptyAsyncContext.id = 212;

/***/ }),

/***/ 257:
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
webpackEmptyAsyncContext.id = 257;

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number___ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_unique_device_id__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addshoping_addshoping__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__viewshoppinglist_viewshoppinglist__ = __webpack_require__(323);
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
    function HomePage(iab, uniqueDeviceID, alertCtrl, callnumber, admobFree, navCtrl) {
        var _this = this;
        this.iab = iab;
        this.uniqueDeviceID = uniqueDeviceID;
        this.alertCtrl = alertCtrl;
        this.callnumber = callnumber;
        this.admobFree = admobFree;
        this.navCtrl = navCtrl;
        this.firemain = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref();
        this.newarraylist = [];
        this.id = "a2f05b91-956a-b480-3525-991002905558";
        this.tab = "tab2";
        this.nextdirectory = this.firemain.child(this.id);
        this.srct = {
            text: '',
            url: ''
        };
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
    HomePage.prototype.refreshname = function () {
        var _this = this;
        this.newarraylist = [];
        this.firemain.child(this.id).once("value", function (snap) {
            for (var a in snap.val()) {
                for (var b in snap.val()[a]) {
                    console.log(snap.val()[a][b]);
                    _this.newarraylist.push({ "list": snap.val()[a][b].list, "title": a, "time": snap.val()[a][b].time, "key": snap.val()[a][b].key });
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
    HomePage.prototype.addlist = function () {
        var _this = this;
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
                        _this.firemain.child(_this.id).child(data.title).child(key).update({ "flag": "notyet" });
                        console.log(data.title);
                        console.log(key);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__addshoping_addshoping__["a" /* AddshopingPage */], { "key": key, "id": _this.id, "title": data.title }).then(function () {
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
                        _this.nextdirectory.child(key.title).remove().then(function () {
                            window.alert("삭제되었습니다.");
                            console.log("success");
                            _this.refreshname();
                        }).catch(function (e) {
                            console.log("error" + e);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.viewshoppinglist = function (a) {
        console.log(a);
        console.log(this.id);
        console.log(a.key);
        console.log(a.list);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__viewshoppinglist_viewshoppinglist__["a" /* ViewshoppinglistPage */], { "obj": a, "id": this.id, "key": a.key });
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/limchae/Documents/01ionic/01_02mart/src/pages/home/home.html"*/'<ion-content padding>\n    <div class="upper">\n        <ion-row style="margin-bottom:0" class="search" (tap)="entered()">\n            <ion-col width-100>\n                <ion-searchbar style="float:left;width: 50%; padding:6px;" placeholder="입력하세요" [(ngModel)]="startPoint" clearInput></ion-searchbar>\n                <button class="btnup" style="height:30px;width:30px;" (click)="closePast(\'start\')"><ion-icon name="close"></ion-icon></button>\n                <button class="btnup" style="height: 30px;width: 30px;margin-left:30px;" (click)="closePast(\'start\')"><ion-icon name="close"></ion-icon></button>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <ion-segment style="background:#353c5e;font-size: 16px;letter-spacing: -0.35px" (ionChange)="segmentChanged($event)" [(ngModel)]="tab">\n        <ion-segment-button value="tab1" [ngClass]="tab==\'tab1\'?\'view\':\'notview\'">\n            <span style="font-family: \'notomedium\';">즐겨찾는곳</span>\n        </ion-segment-button>\n        <ion-segment-button value="tab2" [ngClass]="tab==\'tab2\'?\'view\':\'notview\'">\n            <span style="font-family: \'notomedium\';" class="">쇼핑예정목록</span>\n        </ion-segment-button>\n        <ion-segment-button value="tab3" [ngClass]="tab==\'tab3\'?\'view\':\'notview\'">\n            <span style="font-family: \'notomedium\';" class="">인터넷에선얼마?</span>\n        </ion-segment-button>\n\n    </ion-segment>\n    <div [ngSwitch]="tab" style="height:100%;">\n        <ion-list *ngSwitchCase="\'tab1\'">\n            first tab\n\n        </ion-list>\n        <ion-list *ngSwitchCase="\'tab2\'">\n            <div class="topselector">\n                <p>쇼핑 목록 만들기! 어디서 쇼핑하실 건가요?</p>\n                <div class="button">\n                    <button (click)="addlist()"><img src="assets/imgs/mes.png" alt=""></button><br>\n                    <button (click)="addlist()">마트</button>\n                </div>\n                <div class="button">\n                    <button (click)="addlist()"><img src="assets/imgs/mes.png" alt=""></button><br>\n                    <div></div><button (click)="addlist()">백화점</button>\n                </div>\n                <div class="button">\n                    <button (click)="addlist()"><img src="assets/imgs/mes.png" alt=""></button><br>\n                    <div></div><button (click)="addlist()">아울렛</button>\n                </div>\n                <div class="button">\n                    <button (click)="addlist()"><img src="assets/imgs/mes.png" alt=""></button><br>\n                    <div></div><button (click)="addlist()">기타</button>\n                </div>\n            </div>\n            <div *ngFor="let a of newarraylist" class="eachshopping">\n                <div class="listDB">\n                    <div><button (click)="deleteDB(a)"><img class="imginlist" src="assets/imgs/delete (1).png"></button></div>\n                    <div><button (click)="viewshoppinglist(a)">{{a.title}} </button></div>\n                    <div><button (click)="viewshoppinglist(a)">{{a.time}}</button></div>\n                </div>\n            </div>\n\n            <div><button (click)="addlist()">(image)쇼핑 리스트를 추가해보자라는 말</button></div>\n\n        </ion-list>\n        <ion-list *ngSwitchCase="\'tab3\'">\n\n            <select style="float: left; width:25%;" id=\'slt\' name="sort">\n            <option value="rel" selected="selected">랭킹순</option>\n            <option value="price_asc">낮은 가격순</option>\n            <option value="price_dsc">높은 가격순</option>\n            <option value="date">등록순</option>\n            <option value="review">리뷰 많은순</option>\n          </select>\n\n            <ion-input style="margin-right: 0px; width: auto; float: left;" name=\'text\' type="text" [(ngModel)]=\'srct.text\' placeholder="검색어를 입력해 주세요.">\n\n            </ion-input>\n\n            <button ion-button style="float:right;" color="black" outline icon-only (click)=\'select_sort()\'>\n            <ion-icon name=\'search\' is-active="false"></ion-icon>\n          </button>\n        </ion-list>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/limchae/Documents/01ionic/01_02mart/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number___["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddshopingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_speech_recognition__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(99);
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
    function AddshopingPage(speechRecognition, navCtrl, navParams) {
        this.speechRecognition = speechRecognition;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
        console.log("addshoping saving....");
        this.flag = false;
        this.flagInput = false;
        console.log(this.addinglist);
        console.log(this.id);
        console.log(this.key);
        this.firemain.child(this.id).child(this.title).child(this.key).update({ "time": this.nowtime, "flag": "entered", "key": this.key });
        this.firemain.child(this.id).child(this.title).child(this.key).child("list").update(this.addinglist);
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
            selector: 'page-addshoping',template:/*ion-inline-start:"/Users/limchae/Documents/01ionic/01_02mart/src/pages/addshoping/addshoping.html"*/'<!--\n  Generated template for the AddshopingPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    {{nowtime}} <button (click)="save()">저장</button>\n    <div class="totaldetail">\n        <p *ngIf="flag==true">{{totalnumber}} 중 {{selected}} </p>\n        <p *ngIf="flag==false">{{totalnumber}}</p>\n    </div>\n    <div class="main">\n        <ion-item *ngFor="let att of addinglist; let idx = index">\n            <ion-icon *ngIf="flag==false" name="close"></ion-icon>\n            <ion-checkbox [(ngModel)]="att.checked" style="z-index: 999999;" (ionChange)="addValue($event)" *ngIf="flag==true" color="dark" slot="start"></ion-checkbox>\n            <ion-input style="width: 20%;float: left;" placeholder="상품명" [(ngModel)]="addinglist[idx].name"></ion-input>\n            <ion-input style="width: 20%;float: right;" placeholder="수량" [(ngModel)]="addinglist[idx].quantity"></ion-input>\n            <ion-input style="width: 20%;float: right;" placeholder="가격" [(ngModel)]="addinglist[idx].price"></ion-input>\n        </ion-item>\n    </div>\n    <div style="position: absolute;bottom: 50px;width: 100%;" class="bottom">\n        <ion-input *ngIf="flag!=true" style="width: 63%;border-bottom: solid 1px;float: left;" [(ngModel)]="adding" placeholder="품목을 입력하세요."></ion-input>\n        <button *ngIf="flag!=true" style="height: 3.5rem;background: transparent;border: solid 1px;border-radius: 7px;margin-top: 5px;margin-left: 10px;" (click)="speeching()">음성</button>\n        <button *ngIf="flag!=true" style="height: 3.5rem;background: transparent;border: solid 1px;border-radius: 7px;margin-top: 5px;margin-left: 3px;" (click)="add()">추가하기</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/limchae/Documents/01ionic/01_02mart/src/pages/addshoping/addshoping.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_speech_recognition__["a" /* SpeechRecognition */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AddshopingPage);
    return AddshopingPage;
}());

//# sourceMappingURL=addshoping.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewshoppinglistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(99);
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
 * Generated class for the ViewshoppinglistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewshoppinglistPage = /** @class */ (function () {
    function ViewshoppinglistPage(navParam, navCtrl, navParams) {
        this.navParam = navParam;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.totalnumber = 0;
        this.flag = false;
        this.firemain = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref();
        this.addinglist = [];
        this.sum = 0;
        this.printsum = 0;
        this.flagInput = false; //가격 및 수량도 입력하기 버튼을 위한 boolean형 변수
        this.a = this.navParams.get("obj");
        this.id = this.navParams.get("id");
        this.nextdirectory = this.firemain.child(this.id);
        this.key = this.navParams.get("key");
        this.title = this.a.title;
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
        this.addprice();
    }
    ViewshoppinglistPage.prototype.formatNumber = function (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };
    ViewshoppinglistPage.prototype.addprice = function () {
        /*숫자에 콤마 찍기*/
        var _this = this;
        /*가격받아오기*/
        this.firemain.child(this.id).child(this.title).child(this.key).child("list").once("value", function (snap) {
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
    /*새로고침*/
    ViewshoppinglistPage.prototype.refreshname = function () {
        var _this = this;
        this.a.list = [];
        var sum = 0;
        this.firemain.child(this.id).child(this.title).child(this.key).child("list").once("value", function (snap) {
            for (var a = 0; a < snap.val().length; a++) {
                console.log(snap.val()[a]);
                console.log(snap.val()[a].name, snap.val()[a].checked, snap.val()[a].price, snap.val()[a].quantity);
                sum += Number(snap.val()[a].quantity) * Number(snap.val()[a].price); //가격 다시 받기
                _this.printsum = _this.formatNumber(sum);
                console.log(_this.printsum);
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
        var count = 0;
        console.log(v.checked);
        console.log(this.a.list);
        for (var i = 0; i < this.a.list.length; i++) {
            if (this.a.list[i].checked == true) {
                count++;
            }
        }
        this.selected = count;
    };
    ViewshoppinglistPage.prototype.save = function () {
        console.log(this.a.list);
        console.log("addshoping saving....");
        this.flag = false;
        this.flagInput = false;
        this.firemain.child(this.id).child(this.title).child(this.key).update({ "time": this.nowtime, "flag": "entered", "key": this.key });
        this.firemain.child(this.id).child(this.title).child(this.key).child("list").update(this.a.list);
        window.alert("저장되었습니다.");
        this.refreshname();
    };
    /*수정*/
    ViewshoppinglistPage.prototype.insertData = function () {
        this.flag = true;
    };
    /*삭제*/
    ViewshoppinglistPage.prototype.delete = function () {
        var _this = this;
        var newlist = []; //선택된 것을 넣을 수 있는 새로운 배열
        console.log(this.a.list); //this.a.list는 입력을 받은 배열
        for (var i = 0; i < this.a.list.length; i++) {
            /*a.list에 있는 항목이 체크가 되어있으면 newlist에 push*/
            if (this.a.list[i].checked == true) {
                newlist.push(i);
            }
            console.log(newlist);
        }
        console.log(newlist);
        console.log(this.a.list.splice(newlist, 1)); //선택해서 삭제한 것을 console에 출력해봄
        for (var i = 0; i < this.a.length; i++) {
            this.a.list.splice(newlist[i], 1); //a.list에서 선택된 항목을 삭제. splice를 이용해서 범위에 있는 것을 삭제함.
            console.log(this.a.list.splice(newlist[i], 1));
        }
        console.log(this.a.list);
        /*입력 리스트에서 삭제된 항목을 firebase에서 삭제하기위해 list 삭제*/
        this.nextdirectory.child(this.title).child(this.key).child("list").once("value", function (snap) {
            // for (var a in snap.val()) {
            _this.nextdirectory.child(_this.title).child(_this.key).child("list").remove().then(function () {
                console.log("success");
            }).catch(function (e) {
                console.log("error" + e);
            });
            // }
            /*삭제한 list를 update를 통해 수정된 데이터로 다시 넣어줌 */
            _this.nextdirectory.child(_this.title).child(_this.key).child("list").update(_this.a.list).then(function () {
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
    ViewshoppinglistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewshoppinglist',template:/*ion-inline-start:"/Users/limchae/Documents/01ionic/01_02mart/src/pages/viewshoppinglist/viewshoppinglist.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{a.title}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-row>\n        <ion-col col-7>\n            {{a.time}}\n        </ion-col>\n        <ion-col col-5>\n            <button (click)="insertData()">수정</button><button (click)="save()">저장</button><button (click)="delete($event)">삭제</button>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-8>\n            <span *ngIf="flag==false">{{totalnumber}}개 중 {{selected}}개 선택</span>\n            <span *ngIf="flag==true">{{totalnumber}}개</span>\n        </ion-col>\n        <ion-col col-4>\n            ₩{{printsum}}\n        </ion-col>\n    </ion-row>\n    <div class="main">\n        <ion-item *ngFor="let att of a.list; let idx = index">\n            <ion-icon *ngIf="flag==true" name="close"></ion-icon>\n            <ion-checkbox [(ngModel)]="att.checked" style="z-index: 999999;" (ionChange)="addValue($event)" *ngIf="flag==false" color="dark" slot="start"></ion-checkbox>\n            <ion-input text-center style="width: 20%;float: left;" placeholder="상품명" [(ngModel)]="a.list[idx].name"></ion-input>\n            <ion-input text-center style="width: 20%;float: right;" placeholder="수량" [(ngModel)]="a.list[idx].quantity"></ion-input>\n            <ion-input text-center style="width: 20%;float: right;" placeholder="가격" [(ngModel)]="a.list[idx].price"></ion-input>\n        </ion-item>\n    </div>\n    <div style="bottom: 50px;width: 100%;" class="bottom">\n        <ion-input *ngIf="flag!=false" style="width: 65%;border-bottom: solid 1px;float: left;" [(ngModel)]="adding" placeholder="품목을 입력하세요."></ion-input>\n        <button *ngIf="flag!=false" style="height: 3.5rem;background: transparent;border: solid 1px;border-radius: 7px;margin-left: 4px;" (click)="speeching()">음성</button>\n        <button *ngIf="flag!=false" style="height: 3.5rem;background: transparent;border: solid 1px;border-radius: 7px;margin-top: 5px;margin-left: 3px;" (click)="add()">추가하기</button>\n        <button *ngIf="flag!=false&&flagInput==false" style="height: 3.5rem;background: transparent;border: solid 1px;border-radius: 7px;" (click)="priceandquantity()">가격 및 수량도 입력하기</button>\n        <ion-input *ngIf="flagInput!=false" style="width: 34%; height: 3.5rem; border-bottom: solid 1px; float: left; margin-right: 2px; margin-left:2px;" [(ngModel)]="quantity" placeholder="수량"></ion-input>\n        <ion-input *ngIf="flagInput!=false" style="width: 34%; height: 3.5rem; border-bottom: solid 1px; float: left; margin-left: 2px; margin-right:5px;" [(ngModel)]="price" placeholder="가격"></ion-input>\n        <button *ngIf="flagInput!=false" style="height: 3.5rem;background: transparent;border: solid 1px;border-radius: 7px;margin-top: 3px;margin-left: 10px;" (click)="cancel()">취소</button>\n\n\n        <!-- <button *ngIf="flagInput!=false" style="height: 3.5rem;background: transparent;border: solid 1px;border-radius: 7px;margin-top: 5px;margin-left: 4px;" (click)="cancel()">취소</button> -->\n        <!-- <button *ngIf="flagInput!=false" style="width:15%; height: 4rem;background: transparent;border:soild 1px;border-radius:7px;margin-left:10px;margin-top:5px;" (click)="cancel()">취소</button> -->\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/limchae/Documents/01ionic/01_02mart/src/pages/viewshoppinglist/viewshoppinglist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ViewshoppinglistPage);
    return ViewshoppinglistPage;
}());

//# sourceMappingURL=viewshoppinglist.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(426);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number___ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_unique_device_id__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_speech_recognition__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_admob_free__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_addshoping_addshoping__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_viewshoppinglist_viewshoppinglist__ = __webpack_require__(323);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_addshoping_addshoping__["a" /* AddshopingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_viewshoppinglist_viewshoppinglist__["a" /* ViewshoppinglistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_addshoping_addshoping__["a" /* AddshopingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_viewshoppinglist_viewshoppinglist__["a" /* ViewshoppinglistPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number___["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(317);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/limchae/Documents/01ionic/01_02mart/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/limchae/Documents/01ionic/01_02mart/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[421]);
//# sourceMappingURL=main.js.map