import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  public neighborhood: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public http: Http
  ) {
    let url = this.navParams.get('api_url');
    let neighborhood_id = this.navParams.get('neighborhood_id');

    this.http.get(url + '&id=' + neighborhood_id)
      .map(res => res.json())
      .subscribe(data => {
        this.neighborhood = data[0];

        console.log(this.neighborhood)
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
