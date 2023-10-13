/*
 * @Author: hongbin
 * @Date: 2023-10-13 09:33:32
 * @LastEditors: hongbin
 * @LastEditTime: 2023-10-13 15:33:09
 * @Description:
 */

import { Injectable } from "@angular/core";
import { ApiService } from "./ApiServe";

export interface Auth {
  name: string;
  password: string;
}
@Injectable()
export class AuthServe {
  name = "";
  password = "";
  isLogIn = false;

  constructor(private apiService: ApiService) {}

  login(auth: Auth) {
    return new Promise((resolve, reject) => {
      this.apiService.Personnel.login(auth)
        .pipe()
        .subscribe(r => {
          console.log("rxjs:", r);
          this.isLogIn = true;
          this.name = auth.name;
          this.password = auth.password;
          resolve(auth);
        });
    });
  }

  logOut() {
    this.isLogIn = false;
    this.name = "";
    this.password = "";
  }
}