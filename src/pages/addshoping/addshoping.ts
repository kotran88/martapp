import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import firebase from 'firebase';
import { HomePage } from '../home/home';
import * as $ from 'jquery'

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
  firstflag:any=false;
  flagInput: boolean = false;
  nextdirectory = this.firemain.child("id");
  fullyear: any;
  month: any;
  date: any;

  constructor(public speechRecognition: SpeechRecognition, public navCtrl: NavController,
    public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.a = this.navParams.get("obj");
    this.id = this.navParams.get("id");
    this.title = this.navParams.get("title");
    this.value = this.navParams.get("flag");
    console.log("this.flag:" + this.value)
    this.key = this.navParams.get("key");
    var thisday = new Date();
    thisday.toLocaleString('ko-KR', { hour: 'numeric', minute: 'numeric', hour12: true })
    this.month = thisday.getMonth() + 1;
    this.date = thisday.getDate();
    var hour = thisday.getHours();
    var minute = thisday.getMinutes();
    this.fullyear = thisday.getFullYear();
    var second = thisday.getSeconds();
    console.log(this.id)
    console.log(this.title);
    console.log(this.value);
    console.log(this.key);

    
    this.nowtime = "" + (this.month) + "월" + this.date + "일" + (hour) + "시" + minute + "분";
  }
  refreshname() {
    this.addinglist = [];
    var sum = 0;
    this.firemain.child("users").child(this.id).child(this.value).child(this.title).child(this.key).child("list").once("value", (snap) => {
      for (var a = 0; a < snap.val().length; a++) {
        if (snap.val()[a].name = "") {
          snap.val()[a].name = "-"
        }
        console.log(snap.val()[a].name, snap.val()[a].checked, snap.val()[a].price, snap.val()[a].quantity)
        sum += Number(snap.val()[a].quantity) * Number(snap.val()[a].price);//가격 다시 받기
        this.printsum = this.formatNumber(sum);
        this.addinglist.push({ "name": snap.val()[a].name, "checked2": false, "checked": snap.val()[a].checked, "price": snap.val()[a].price, "quantity": snap.val()[a].quantity, "del": this.checkflag });
      }
      console.log(sum);
    })
  }
  delflag:boolean = false
  delNameArray = [];
  del(name) {
    this.delflag = true;
    // this.delflag1 = true;
    console.log(name);
    if (this.delNameArray.indexOf(name.name) == -1) {
      name.checked2 = true;
      this.delNameArray.push(name.name);
    }
    else if (this.delNameArray.indexOf(name.name) > -1) {
      this.delflag = false;
      name.checked2 = false;
      console.log("aready!");
      console.log(this.delNameArray);
      for (var a in this.delNameArray) {
        if (this.delNameArray[a] == name.name) {
          console.log(this.delNameArray[a]);
          this.delNameArray[a] = "NC";
        }
      }
      var filtered = this.delNameArray.filter(function (value) {
        return value != "NC";
      })
      this.delNameArray = filtered;
      console.log(this.delNameArray);
    }
    console.log(this.delNameArray);
  }
  del2() {
    let alert = this.alertCtrl.create({
      title: '정말로 삭제하시겠습니까?',
      buttons: [
        {
          text: '취소',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '확인',
          handler: data => {
            console.log(this.addinglist);
            window.alert("삭제되었습니다.");
            for (var i = 0; i < this.addinglist.length; i++) {
              for (var j in this.delNameArray) {

                if (this.addinglist[i].name == this.delNameArray[j]) {
                  this.addinglist[i] = "NC"
                }
              }
            }

            var filtered = this.addinglist.filter(function (value) {
              return value != "NC";
            })

            this.addinglist = filtered;
            /*입력 리스트에서 삭제된 항목을 firebase에서 삭제하기위해 list 삭제*/
            this.firemain.child("users").child(this.id).child(this.value).child(this.title).child(this.key).child("list").once("value", (snap) => {
              for (var a in snap.val()) {
                this.firemain.child("users").child(this.id).child(this.value).child(this.title).child(this.key).child("list").remove().then(() => {
                  console.log("success")
                }).catch((e) => {
                  console.log("error" + e);
                })
              }
              /*삭제한 list를 update를 통해 수정된 데이터로 다시 넣어줌 */
              this.firemain.child("users").child(this.id).child(this.value).child(this.title).child(this.key).child("list").update(this.addinglist).then(() => {
              });

              /*totalNumber와 Select값 가져오기*/
              this.totalnumber = this.addinglist.length;
              var count = 0;
              for (var i = 0; i < this.addinglist.length; i++) {
                if (this.addinglist[i].checked == true) {
                  count++;
                }
              }
              this.refreshname(); //새로고침
            })
          }
        }
      ]
    });
    alert.present();
  }
  select_sort(c) {
    console.log(c);
    this.srct.url = 'https://msearch.shopping.naver.com/search/all.nhn?origQuery=' + this.addinglist[c].name + '&pagingIndex=1&pagingSize=40&viewType=list&sort=' + $("#slt").val() + '&frm=NVSHATC&query=' + this.addinglist[c].name;

    console.log(this.srct.url);
    const browser = this.iab.create(this.srct.url, "_blank", "location=no,toolbar=no");

    browser.on('loadstop').subscribe(event => {
      browser.insertCSS({ code: "body{color: red;}" });
    });
  }

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  add() {
    console.log(this.adding);
    if(this.price<1||this.price>99999999){
      this.price = 1000;
      const toast = this.toastCtrl.create({
        message: '단가는 99,999,999원까지 입력 가능합니다.',
        duration: 2000,
      });
      toast.present();
    }
    if(this.price == ""||this.price==undefined){ this.price = 1000; }
    if(this.quantity == ""||this.quantity==undefined) { this.quantity = 1; }
    this.addinglist.push({ "name": this.adding, "checked2":false,"checked": false, "price": this.price, "quantity": this.quantity });
    this.totalnumber = this.addinglist.length;
    this.addprice();

    this.adding = "";
    this.price = "";
    this.quantity = "";
  }
  addprice() {
    /*가격받아오기*/
    console.log(this.price);
    console.log(this.addinglist);

    this.sum += Number(this.price) * Number(this.quantity);
    this.printsum = this.formatNumber(this.sum);
    console.log(this.sum);
    console.log(this.printsum);

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
    this.flag = true;
    this.flagInput = false;
    let alert = this.alertCtrl.create({
      title: '작성 중이던 목록을 저장할까요?',
      buttons: [
        {
          text: '아니요',
          role: 'cancel',
          handler: data => {
            this.firemain.child("users").child(this.id).child(this.value).child(this.title).remove().then(() => {
              console.log("Cancel");
            })

          }
        },
        {
          text: '예',
          handler: data => {
            console.log(this.addinglist);
            console.log(this.adding);
            console.log(this.id);
            console.log(this.key);
            console.log(this.value);
            console.log(this.title);

            if (this.addinglist.length == 0) {
              window.alert("목록을 입력해주세요.");
              this.add();
            }
            else {
              this.firemain.child("users").child(this.id).child(this.value).child(this.title).child(this.key).update({ "time": this.nowtime, "flag": "entered", "key": this.key })
              this.firemain.child("users").child(this.id).child(this.value).child(this.title).child(this.key).child("list").update(this.addinglist);
              window.alert("저장되었습니다.");
            }
          }
        }
      ]
    });
    alert.present();

  }


  backbutton() {
    let alert = this.alertCtrl.create({

      title: '작성 중이던 목록을 저장할까요?',
      buttons: [
        {
          text: '아니요',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
            this.goback();
          }
        },
        {
          text: '예',
          handler: data => {
            for (var v = 0; v < this.addinglist.length; v++) {
              
              if (this.addinglist[v].name == "") {
                window.alert("목록을 입력해주세요");
              }
              else {
                window.alert("저장되었습니다.");
                this.firemain.child("users").child(this.id).child(this.value).child(this.title).child(this.key).update({ "time": this.nowtime, "flag": "entered", "key": this.key })
                this.firemain.child("users").child(this.id).child(this.value).child(this.title).child(this.key).child("list").update(this.addinglist);
                this.refreshname();
              }
            }
            
            this.goback();
          }
        }
      ]
    });
    alert.present();
  }

  goback() {
    this.navCtrl.pop();
  }

  speeching() {
   
     let options = {
      "language": "ko-KR",
      "matches": 3,
      "prompt": "평소 말하는 것처럼 말해주세요",      // Android only
      "showPopup": true,  // Android only
      "showPartial": true
    }
     // Check permission
     this.speechRecognition.hasPermission()
     .then((hasPermission: boolean) => {console.log(hasPermission)
    }).catch((e)=>{
      window.alert(e)
    })
   this.speechRecognition.requestPermission()
     .then(
       () => {console.log('ㅎㅎㅎㅎㅎGranteddd')
       console.log("listened")
       console.log(options);
     // Start the recognition process
      
        // Check feature available
        this.speechRecognition.isRecognitionAvailable()
          .then((available: boolean) =>{console.log(available)
          console.log("available")
          }).catch((e) => {
            console.log("failed")
            console.log(e);
          })
        // Start the recognition process
        console.log(this.speechRecognition)
        if(this.firstflag){
 this.speechRecognition.startListening(options)
          .subscribe(
            (matches: string[]) =>{

              console.log("matched!")
              console.log(matches)
            } ,
            (onerror) => console.log('error:', onerror)
          )
        }
       
        // Stop the recognition process (iOS only)
        this.speechRecognition.stopListening()
        // Get the list of supported languages
        console.log("goto getsupported language")
        this.speechRecognition.getSupportedLanguages()
          .then(
            (languages: string[]) => {
              console.log("listened")
              console.log(languages)
            
            
            this.adding=languages[0]
            },
            (error) => {
              console.log("errorrrorr")
              console.log(error)
              this.firstflag=true;


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
                (languages: string[]) => {
                  console.log("listened")
                  console.log(languages)
                
                
                this.adding=languages[0]
                },
                (error) => {
                  console.log("errorrrorr")
                  console.log(error)
                
                }
              )
         



            
            }
          )
     
     
     },
       () => console.log('Denied')
     )
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddshopingPage');
  }
}