import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
// import {ListPage} from '../pages/list/list';
import {CreateBeerPage} from '../pages/create-beer/create-beer';
import {BeerDetailsPage} from '../pages/beer-details/beer-details';
import {LoginPage} from '../pages/login/login';
import {CreateUserPage} from "../pages/create-user/create-user";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Camera} from "@ionic-native/camera";
import {AuthProvider} from '../providers/auth/auth';
import {IonicStorageModule} from "@ionic/storage";


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        CreateBeerPage,
        CreateUserPage,
        BeerDetailsPage,
        LoginPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot({name: '__mydb'}),
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        CreateBeerPage,
        CreateUserPage,
        BeerDetailsPage,
        LoginPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Camera,
        AuthProvider
    ]
})
export class AppModule {
}
