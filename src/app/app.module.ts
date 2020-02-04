import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CallNumber } from '@ionic-native/call-number';
import  firebase from 'firebase';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OneSignal } from '@ionic-native/onesignal'

import {AdPage} from '../pages/ad/ad';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

import {AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free'
import { AddshopingPage } from '../pages/addshoping/addshoping';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ViewshoppinglistPage } from '../pages/viewshoppinglist/viewshoppinglist';


import{SocialSharing}from'@ionic-native/social-sharing';
import { SettingPage, licenseModalPage, privacyModalPage } from '../pages/setting/setting';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
import { RatePage } from '../pages/rate/rate';
import { CopymodalPage } from '../pages/copymodal/copymodal';
import { ListlimitmodalPage } from '../pages/listlimitmodal/listlimitmodal';


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
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RatePage,
    SettingPage,
    AddshopingPage,
    ViewshoppinglistPage,
    licenseModalPage,
    privacyModalPage,
    AdPage,
    CopymodalPage,
    ListlimitmodalPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddshopingPage,
    RatePage,
    ViewshoppinglistPage,
    SettingPage,
    licenseModalPage,
    privacyModalPage,
    AdPage,
    CopymodalPage,
    ListlimitmodalPage,
  ],
  providers: [
    StatusBar,
    SpeechRecognition,
    InAppPurchase,
    SocialSharing,
    AdMobFree,
    UniqueDeviceID,
    CallNumber,
    SplashScreen,
    InAppBrowser,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
