import { Component } from "@angular/core";
import { ProjectServe } from "../server/ProjectServe";

@Component({
    selector: "app-project-manager",
    templateUrl: "./project-manager.component.html",
    styleUrls: ["./project-manager.component.scss"],
    providers: [ProjectServe],
})
export class ProjectManagerComponent {}
