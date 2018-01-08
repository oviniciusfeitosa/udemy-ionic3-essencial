import {Http, RequestOptions, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage'
import {ToastController} from "ionic-angular";

@Injectable()
export class AuthProvider {

    private messageNotLogged: string = 'Você precisa logar para acessar.';
    private messageUserLogout: string = 'Você foi deslogado.';

    constructor(
        public http: Http,
        public storage: Storage,
        public toastCtrl: ToastController
    ) {
        console.log('Hello AuthProvider Provider');
    }

    login(credentials) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({headers: headers});

        this.http.post('http://localhost:8080/v1/auth/login', credentials, options)
            .map(res => res.json())
            .subscribe(
                //data = { token : 'JWT' }
                data => {
                    this.storage.set('token', data.token);
                    // console.log(this.storage.get('token'));
                });
    }

    userIsLogged() {
        return this.storage.get('token').then(
            val => {
                console.log(val);


                if (val) {
                    return val;
                } else {
                    let toast = this.toastCtrl.create({
                        message: this.messageNotLogged,
                        duration: 3000
                    });

                    toast.present();

                    return false;
                }
            }
        );
    }

    logout() {
        this.storage.remove('token');

        let toast = this.toastCtrl.create({
            message: this.messageNotLogged,
            duration: 3000
        });

        toast.present();
    }

}
