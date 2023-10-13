import { NoopAnimationPlayer } from "@angular/animations";
import { Component } from "@angular/core";
import { ThyDialog } from "ngx-tethys/dialog";
import { AddPersonnelComponent } from "../add-personnel/add-personnel.component";
import { PersonnelServe } from "../server/PersonnelServe";

@Component({
    selector: "app-personnel-manager",
    templateUrl: "./personnel-manager.component.html",
    styleUrls: ["./personnel-manager.component.scss"],
})
export class PersonnelManagerComponent {
    constructor(private thyDialog: ThyDialog) {}

    openDialog() {
        this.thyDialog.open(AddPersonnelComponent, {});
    }
}
