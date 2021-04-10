# Test Cordova App to reproduce issue with CleverTap

Plugins installed-

```
cr plugin add cordova-plugin-firebase-analytics
cr plugin add cordova-plugin-firebase-crash
cr plugin add cordova-plugin-firebase-messaging
cr platform add android
cordova plugin add cordova-plugin-firebase-dynamiclinks --variable APP_DOMAIN_NAME="kidsgenericstaging.page.link"
cordova plugins add clevertap-cordova --variable CLEVERTAP_ACCOUNT_ID="8KK-R49-685Z" --variable CLEVERTAP_TOKEN="c42-33b" --variable FIREBASE_MESSAGING_VERSION=20.1.+
```