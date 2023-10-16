import { Component, Input } from "@angular/core";
import { ThySelectionListChange } from "ngx-tethys/list";
import { ApiService } from "../server/ApiServe";
import { PersonnelServe } from "../server/PersonnelServe";

@Component({
    selector: "app-personnel-list",
    templateUrl: "./personnel-list.component.html",
    styleUrls: ["./personnel-list.component.scss"],
})
export class PersonnelListComponent {
    public isGridLayout = true;

    @Input() public selectionModel: any;

    constructor(public personnelServe: PersonnelServe) {}

    selectionChange(event: ThySelectionListChange | any) {}
}
