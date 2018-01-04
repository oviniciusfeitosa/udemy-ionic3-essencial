import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';

import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {
    selectedItem: any;
    icons: string[];
    private url: string = 'http://localhost:8080/v1';
    beer = {
        name: "",
        price: "",
        type: "",
        mark: ""
    };

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http: Http,
                public toastCtrl: ToastController) {

    }

    saveBeer(beer) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });

        this.http.post(this.url + '/beers', beer, options)
            .map(res => res.json())
            .subscribe(
                data => {
                    console.log(data);
                    let toast = this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000
                    });
                    toast.present();
                });
    }
}
