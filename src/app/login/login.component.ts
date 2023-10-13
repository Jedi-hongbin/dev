import { Component, OnInit } from "@angular/core";
import { AuthServe } from "../server/AuthServe";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  model = {
    name: "admin",
    password: "136136",
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
      .then(res => {
        console.log(res);
        this.saving = false;
      })
      .catch(err => {
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
