import { Component } from "@angular/core";
import { routes } from "../app-routing.module";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent {
  list = routes.find(r => r.path === "admin")?.children ?? [];
  constructor() {
    console.log(this.list);
  }
}
