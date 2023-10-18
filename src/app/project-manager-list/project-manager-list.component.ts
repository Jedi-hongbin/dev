import { Component } from "@angular/core";
import { ProjectServe } from "../server/ProjectServe";

@Component({
    selector: "app-project-manager-list",
    templateUrl: "./project-manager-list.component.html",
    styleUrls: ["./project-manager-list.component.scss"],
})
export class ProjectManagerListComponent {
    constructor(public projectServe: ProjectServe) {}
}
