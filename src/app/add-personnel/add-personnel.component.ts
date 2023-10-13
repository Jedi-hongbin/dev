import { Component, OnInit } from "@angular/core";
import { ApiService } from "../server/ApiServe";
import { PersonnelServe } from "../server/PersonnelServe";
import { Subject, from, tap } from "rxjs";

@Component({
    selector: "app-add-personnel",
    templateUrl: "./add-personnel.component.html",
    styleUrls: ["./add-personnel.component.scss"],
})
export class AddPersonnelComponent implements OnInit {
    model = {
        name: "",
        password: "",
    };
    selectListOfOption = [];
    listOfOption = this.apiServe.getRoles();
    saving = false;

    constructor(
        public personnelServe: PersonnelServe,
        private apiServe: ApiService
    ) {}

    ngOnInit(): void {}

    create() {
        if (this.saving) {
            return;
        }
        console.log(this.model, this.selectListOfOption);
        this.saving = true;
        this.apiServe.Personnel.insert({
            ...this.model,
            roleIds: this.selectListOfOption,
        }).subscribe({
            next: (d) => {
                console.log(d);
                this.saving = false;
                console.log(this.personnelServe.list);
                this.personnelServe.list = [...this.personnelServe.list, d];
                console.log(this.personnelServe.list);
            },
            error: (err) => {
                console.log("err", err);
                this.saving = false;
            },
        });
    }
}
