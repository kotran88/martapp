import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import firebase from 'firebase';
/**
 * Generated class for the ViewshoppinglistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-viewshoppinglist',
  templateUrl: 'viewshoppinglist.html',
})
export class ViewshoppinglistPage {
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
  nextdirectory: any;
  a: any;
  name: any;
  price: any;
  sum: any = 0;
  printsum: any = 0;
  flagInput: boolean = false; //가격 및 수량도 입력하기 버튼을 위한 boolean형 변수
  
  /*숫자에 콤마 찍기*/
  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  addprice() {
    /*가격받아오기*/
    this.firemain.child(this.id).child(this.title).child(this.key).child("list").once("value", (snap) => {
      for (var a = 0; a < snap.val().length; a++) {
        console.log(snap.val()[a])
        console.log(Number(snap.val()[a].quantity) * Number(snap.val()[a].price));
        console.log(this.sum);
        this.sum += Number(snap.val()[a].quantity) * Number(snap.val()[a].price);
        this.printsum = this.formatNumber(this.sum);
      }
      console.log(this.sum);
      console.log(this.printsum);
    })
  }

  /*새로고침*/
  refreshname() {
    this.a.list = [];
    var sum = 0;
    this.firemain.child(this.id).child(this.title).child(this.key).child("list").once("value", (snap) => {
      for (var a = 0; a < snap.val().length; a++) {
        console.log(snap.val()[a])
        console.log(snap.val()[a].name, snap.val()[a].checked, snap.val()[a].price, snap.val()[a].quantity)
        sum += Number(snap.val()[a].quantity) * Number(snap.val()[a].price);//가격 다시 받기
        this.printsum = this.formatNumber(sum);
        console.log(this.printsum);
        this.a.list.push({ "name": snap.val()[a].name, "checked": snap.val()[a].checked, "price": snap.val()[a].price, "quantity": snap.val()[a].quantity });
      }
      console.log(sum);
    })
  }

  constructor(public navParam: NavParams, public navCtrl: NavController, public navParams: NavParams) {
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
    thisday.toLocaleString('ko-KR', { hour: 'numeric', minute: 'numeric', hour12: true })
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

  add() {
    console.log(this.a.list);
    this.a.list.push({ "name": this.adding, "checked": false, "price": this.price, "quantity": this.quantity });
    this.totalnumber = this.a.list.length;
    this.adding = "";
    this.price = "";
    this.quantity = "";
  }

  /*가격 및 수량도 입력하기*/
  priceandquantity() {
    this.flagInput = true;
  }

  /*취소버튼*/
  cancel() {
    this.flagInput = false;
  }

  addValue(v) {
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
  }

  save() {
    console.log(this.a.list);
    console.log("addshoping saving....")
    this.flag = false;
    this.flagInput = false;
    this.firemain.child(this.id).child(this.title).child(this.key).update({ "time": this.nowtime, "flag": "entered", "key": this.key })
    this.firemain.child(this.id).child(this.title).child(this.key).child("list").update(this.a.list);
    window.alert("저장되었습니다.");
    this.refreshname();
  }

  /*수정*/
  insertData() {
    this.flag = true;
  }

  /*삭제*/
  delete() {
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
    console.log(this.a.list.splice(newlist, 1));//선택해서 삭제한 것을 console에 출력해봄
    for (var i = 0; i < this.a.length; i++) {
      this.a.list.splice(newlist[i], 1); //a.list에서 선택된 항목을 삭제. splice를 이용해서 범위에 있는 것을 삭제함.
      console.log(this.a.list.splice(newlist[i],1))
    }
    console.log(this.a.list);
    /*입력 리스트에서 삭제된 항목을 firebase에서 삭제하기위해 list 삭제*/
    this.nextdirectory.child(this.title).child(this.key).child("list").once("value", (snap) => {
      // for (var a in snap.val()) {
      this.nextdirectory.child(this.title).child(this.key).child("list").remove().then(() => {
        console.log("success")
      }).catch((e) => {
        console.log("error" + e);
      })
      // }
      /*삭제한 list를 update를 통해 수정된 데이터로 다시 넣어줌 */
      this.nextdirectory.child(this.title).child(this.key).child("list").update(this.a.list).then(() => {
        console.log(this.a.list);
      });

      window.alert("삭제되었습니다.")
      /*totalNumber와 Select값 가져오기*/
      this.totalnumber = this.a.list.length;
      var count = 0;
      for (var i = 0; i < this.a.list.length; i++) {
        if (this.a.list[i].checked == true) {
          count++;
        }
      }
      this.selected = count;
      this.refreshname(); //새로고침
    })
  }

    /*sort구현*/
    sortlist(){
      this.a.list.sort(function (name1, name2) { 
        return name1.name < name2.name ? -1 : name1.name > name2.name ? 1 : 0;  
      });
      console.log(this.a.list);
      window.alert("정렬되었습니다.");
      this.nextdirectory.child(this.title).child(this.key).child("list").update(this.a.list).then(() => {
        console.log(this.a.list);
      });
    }
    
  speeching() {
    let options = {
      "language": "ko-KR",
      "matches": 1,
      "prompt": "평소 말하는 것처럼 말해주세요",      // Android only
      "showPopup": true,  // Android only
      "showPartial": true
    }
    // Check feature available
    this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => console.log(available)).catch((e) => {
        console.log(e);
      })
    // Start the recognition process
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
        (languages: string[]) => console.log(languages),
        (error) => console.log(error)
      )
    // Check permission
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => console.log(hasPermission))
    // Request permissions
    this.speechRecognition.requestPermission()
      .then(
        () => console.log('Granted'),
        () => console.log('Denied')
      )
  }
}
