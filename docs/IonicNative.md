# Ionic Native
  
In ionic 3 the cordova is who is responsible for communicating with the native of the cell phone
  

## Camera
* Install the Cordova and Ionic Native plugins:
* Enter inside MyApp Folder and:
* ```$ ionic cordova plugin add cordova-plugin-camera```
* ```$ npm install --save @ionic-native/camera```
* Add ```import { Camera, CameraOptions } from '@ionic-native/camera';``` in your Controller
* Add ```import { Camera } from "@ionic-native/camera";``` and "Camera" to your provider list in app.module.ts


#### References
- https://ionicframework.com/docs/native/camera/