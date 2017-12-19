import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http, RequestOptions} from '@angular/http';

@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {
    selectedItem: any;
    icons: string[];
    private url:string = 'http://localhost:8080/v1';
    beer = {
        name: "",
        price: "",
        type: "",
        mark: ""
    };

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public http: Http
    ) {

    }

    saveBeer(beer) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers : headers });
        this.http.post(this.url + '/beers', beer, options)
            .map(res => { res.json() })
            .subscribe(
                data => console.log(data)
            )
        ;
    }
}
