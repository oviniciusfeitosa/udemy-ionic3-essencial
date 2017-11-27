import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private url:string = 'http://localhost:3030/v1';

  constructor(
    public navCtrl: NavController,
    public http: Http
  ) {
      

  }

  goToTestPage() {
    this.navCtrl.push(TestPage);
  }
}
