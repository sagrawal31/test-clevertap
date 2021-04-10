/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
	
	CleverTap.setDebugLevel(1)
	CleverTap.createNotificationChannel('GENERAL_CHANNEL', 'General', 'A General channel', 5, true);
	CleverTap.profileGetCleverTapID(function(val) {console.log("CleverTapID is "+val);});
	CleverTap.enableDeviceNetworkInfoReporting(true);
	
	cordova.plugins.firebase.messaging.getToken().then(function(token) {
	    console.log("Got device token: ", token);});
	});
	
	document.addEventListener('onPushNotification', function(data) {
		console.log('CT onPushNotification data', data)
	}, false);
	
	document.addEventListener('onCleverTapPushNotificationTappedWithCustomExtras', function(data) {
		console.log('CT onCleverTapPushNotificationTappedWithCustomExtras data', data)
	}, false);
	
	cordova.plugins.firebase.messaging.onBackgroundMessage(function(payload) {
	    console.log("New background FCM message: ", payload);
	});
	
	cordova.plugins.firebase.messaging.onMessage(function(payload) {
	    console.log("New foreground FCM message: ", payload);
	});
}
