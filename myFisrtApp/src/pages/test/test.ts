import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  public beer: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // public alertCtrl: AlertController,
    public http: Http
  ) {
    let url = this.navParams.get('api_url');
    let beer_id = this.navParams.get('beer_id');

    this.http.get(url + '/beers/' + beer_id)
      .map(res => res.json())
      .subscribe(data => {
        this.beer = data;

        console.log(data)
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  // showAlert() {
  //   let alert = this.alertCtrl.create({
  //     title: 'Mensagem',
  //     subTitle: 'Você logou!',
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }
}
