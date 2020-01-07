cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.IonicWebView",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "Ionic.WebView"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-promise-polyfill.Promise",
    "file": "plugins/cordova-promise-polyfill/www/Promise.js",
    "pluginId": "cordova-promise-polyfill",
    "runs": true
  },
  {
    "id": "cordova-promise-polyfill.promise.min",
    "file": "plugins/cordova-promise-polyfill/www/promise.min.js",
    "pluginId": "cordova-promise-polyfill"
  },
  {
    "id": "cordova-plugin-admob-free.AdMob",
    "file": "plugins/cordova-plugin-admob-free/www/admob.js",
    "pluginId": "cordova-plugin-admob-free",
    "clobbers": [
      "admob",
      "AdMob",
      "plugins.AdMob"
    ]
  },
  {
    "id": "mx.ferreyra.callnumber.CallNumber",
    "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
    "pluginId": "mx.ferreyra.callnumber",
    "clobbers": [
      "call"
    ]
  },
  {
    "id": "cordova-plugin-uniquedeviceid.UniqueDeviceID",
    "file": "plugins/cordova-plugin-uniquedeviceid/www/uniqueid.js",
    "pluginId": "cordova-plugin-uniquedeviceid",
    "merges": [
      "window.plugins.uniqueDeviceID"
    ]
  },
  {
    "id": "cordova-plugin-speechrecognition.SpeechRecognition",
    "file": "plugins/cordova-plugin-speechrecognition/www/speechRecognition.js",
    "pluginId": "cordova-plugin-speechrecognition",
    "merges": [
      "window.plugins.speechRecognition"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-ionic-webview": "4.1.3",
  "cordova-plugin-ionic-keyboard": "2.2.0",
  "cordova-promise-polyfill": "0.0.2",
  "cordova-admob-sdk": "0.24.1",
  "cordova-plugin-admob-free": "0.27.0",
  "mx.ferreyra.callnumber": "0.0.2",
  "cordova-plugin-uniquedeviceid": "1.3.2",
  "cordova-plugin-speechrecognition": "1.1.2",
  "cordova-plugin-inappbrowser": "3.1.0"
};
// BOTTOM OF METADATA
});