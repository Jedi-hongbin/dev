/*
 * @Author: hongbin
 * @Date: 2023-10-13 09:33:32
 * @LastEditors: hongbin
 * @LastEditTime: 2023-10-18 11:09:48
 * @Description:
 */
import { Injectable } from "@angular/core";
import { ApiService } from "./ApiServe";
import store from "store2";

export interface Auth {
    name: string;
    password: string;
}
@Injectable()
export class AuthServe {
    _id = "";
    name = "";
    password = "";
    private _isLogIn = false;

    get isLogIn() {
        return this._isLogIn;
    }
    set isLogIn(state) {
        this._isLogIn = state;
    }

    constructor(private apiService: ApiService) {
        const userInfo = JSON.parse(store.get("USER_INFO"));
        if (userInfo) {
            this.isLogIn = true;
            this.name = userInfo.name;
            this._id = userInfo._id;
            this.password = userInfo.password;
        }
    }

    login(auth: Auth) {
        return new Promise((resolve, reject) => {
            this.apiService.Personnel.login(auth)
                .pipe()
                .subscribe({
                    next: (r) => {
                        console.log("rxjs:", r);
                        this.isLogIn = true;
                        store.set("USER_INFO", JSON.stringify(r));
                        this.name = auth.name;
                        this._id = r._id;
                        this.password = auth.password;
                        resolve(auth);
                    },
                    error: (err) => {
                        reject(err);
                    },
                });
        });
    }

    logOut() {
        this.isLogIn = false;
        this.name = "";
        this.password = "";
    }
}
