import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private url:string = 'http://localhost:8080/v1';
  public beers:Array<{}>;

  constructor(
    public navCtrl: NavController,
    public http: Http
  ) {
      this.http.get(this.url + '/beers')
      .map( res => res.json())
      .subscribe(data => {
        this.beers = data;
      })

  }

  goToTestPage() {
    this.navCtrl.push(TestPage);
  }

  getBeerInfo(id) {
    this.navCtrl.push(TestPage, {
      'beer_id' : id,
      'api_url' : this.url
    });
  }
}