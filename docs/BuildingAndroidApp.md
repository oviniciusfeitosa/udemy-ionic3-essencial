# Building Android App

* ```sudo ionic cordova platform add android```
* ```ls platforms```
	( You should see an "android" folder where the content is copied into the folder )
* ```ionic cordova build android``` 
	Grab the html, css and javascript and turns into an apk to play to the mobile
* The file is generated within ```.../platforms/android/build/outputs/apk/android-debug.apk```
* To test the app, just grab the apk and send it to the mobile phone manually or by executing the command below

* ```ionic cordova run android```
	(Generate Build and run on device or emulator)