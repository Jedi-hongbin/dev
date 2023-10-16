import { NoopAnimationPlayer } from "@angular/animations";
import { Component, Output, forwardRef } from "@angular/core";
import { ThyDialog } from "ngx-tethys/dialog";
import { AddPersonnelComponent } from "../add-personnel/add-personnel.component";
import { PersonnelServe } from "../server/PersonnelServe";
import { merge, of, tap } from "rxjs";

@Component({
    selector: "app-personnel-manager",
    templateUrl: "./personnel-manager.component.html",
    styleUrls: ["./personnel-manager.component.scss"],
})
export class PersonnelManagerComponent {
    constructor(
        private thyDialog: ThyDialog,
        private personnelServe: PersonnelServe
    ) {}

    @Output() public selectionModel = {
        selectedValues: [],
    };

    openDialog() {
        this.thyDialog.open(AddPersonnelComponent, {});
    }

    batchDelete() {
        this.personnelServe
            .delete(this.selectionModel.selectedValues)
            .subscribe({
                next: (data) => {
                    console.log(data);
                    this.personnelServe.list = merge(
                        this.personnelServe.list,
                        of()
                    );
                },
                error: (err) => {
                    console.error(err);
                },
            });
    }
}
