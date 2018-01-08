import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage'

@Injectable()
export class AuthProvider {

  constructor(
      public http: HttpClient,
      public storage: Storage
  ) {
    console.log('Hello AuthProvider Provider');
  }

  login() {

  }

  userIsLogged() {
    this.storage.get('token').then(
        val => {
          if(val !== undefined) {
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
