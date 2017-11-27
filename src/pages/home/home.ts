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

  private url:string = 'http://159.203.168.240:8080/district?city_id=1';
  public beers:Array<{}>;

  constructor(
    public navCtrl: NavController,
    public http: Http
  ) {
      this.http.get(this.url)
      .map( res => res.json())
      .subscribe(data => {
        console.log(data);
      })

  }

  goToTestPage() {
    this.navCtrl.push(TestPage);
  }
}
