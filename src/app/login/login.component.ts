import { Component, OnInit, inject } from "@angular/core";
import { AuthServe } from "../server/AuthServe";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    router = inject(Router);
    model = {
        name: "admin",
        password: "admin",
    };

    saving = false;

    constructor(private authServe: AuthServe) {}

    ngOnInit(): void {}

    login() {
        if (this.saving) {
            return;
        }
        console.log(this.model);
        this.saving = true;
        this.authServe
            .login(this.model)
            .then((res) => {
                console.log(res);
                this.saving = false;
                if (history.state.from && history.state.from !== "/login") {
                    this.router.navigate([history.state.from]);
                } else {
                    this.router.navigate(["/admin"]);
                }
            })
            .catch((err) => {
                console.log("err", err);
                this.saving = false;
            });
    }

    Reset() {
        this.model = {
            name: "",
            password: "",
        };
    }
}
