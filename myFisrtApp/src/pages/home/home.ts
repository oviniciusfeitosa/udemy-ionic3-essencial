import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BeerDetailsPage} from '../beer-details/beer-details';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    private url: string = 'http://localhost:8080/v1';
    public beers: Array<{}>;

    constructor(public navCtrl: NavController,
                public http: Http) {
        this.http.get(this.url + '/beers')
            .map(res => res.json())
            .subscribe(data => {
                this.beers = data;
            })

    }

    getBeerInfo(id) {
        this.navCtrl.push(BeerDetailsPage, {
            'beer_id': id,
            'api_url': this.url
        });
    }
}
