import { Component } from "@angular/core";

@Component({
    selector: "app-project-manager-bar",
    templateUrl: "./project-manager-bar.component.html",
    styleUrls: ["./project-manager-bar.component.scss"],
})
export class ProjectManagerBarComponent {
    orderType = "ASC";
}
