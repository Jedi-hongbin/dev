import { Component } from "@angular/core";
import { routes } from "../app-routing.module";
import { Route } from "@angular/router";

@Component({
    selector: "app-admin",
    templateUrl: "./admin.component.html",
    styleUrls: ["./admin.component.scss"],
})
export class AdminComponent {
    list: Array<Route & { data: { icon: string } }> = [];
    constructor() {
        this.list = (routes.find((r) => r.path === "admin")?.children ??
            []) as typeof this.list;
        this.list = this.list.filter((r) => !r.redirectTo);
    }
}
