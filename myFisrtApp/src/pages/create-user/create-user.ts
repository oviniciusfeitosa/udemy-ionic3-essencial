import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Http, Headers, RequestOptions} from "@angular/http";
import {LoginPage} from "../login/login";


@IonicPage()
@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.html',
})
export class CreateUserPage {

    private url: string = 'http://localhost:8080/v1';

    user = {
        name : "",
        email : "",
        password : "",
        img : "",
        created_at : "",
        updated_at : "",
    };

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public http: Http,
      public toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateUserPage');
  }

  createUser() {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers});


      this.http.post(this.url + '/users', this.user, options)
          .map(res => res.json())
          .subscribe(data => {
              let toast = this.toastCtrl.create({
                 message: data.msg,
                 duration: 3000
              });
              toast.onDidDismiss(() => {
                this.navCtrl.push(LoginPage)
              });
              toast.present();
          })
  }

}
