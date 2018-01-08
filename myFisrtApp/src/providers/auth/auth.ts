import {Http, RequestOptions, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage'

@Injectable()
export class AuthProvider {

    constructor(public http: Http,
                public storage: Storage) {
        console.log('Hello AuthProvider Provider');
    }

    login(credentials) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({headers: headers});

        this.http.post('http://localhost:8080/v1/auth/login', credentials, options)
            .map(res => res.json())
            .subscribe(
                //data = JWT
                data => {
                    console.log(data);
                });
    }

    userIsLogged() {
        this.storage.get('token').then(
            val => {
                if (val !== undefined) {
                    return val;
                } else {
                    return false;
                }
            }
        );
    }

    logout() {
        this.storage.remove('token');
    }

}
