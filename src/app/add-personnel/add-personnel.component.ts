import { Component, OnInit } from "@angular/core";
import { ApiService } from "../server/ApiServe";
import { PersonnelServe } from "../server/PersonnelServe";
import { Subject, from, merge, of, tap } from "rxjs";

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
        this.saving = true;
        this.apiServe.Personnel.insert({
            ...this.model,
            roleIds: this.selectListOfOption,
        }).subscribe({
            next: (d) => {
                this.saving = false;
                // this.personnelServe.list = [...this.personnelServe.list, d];

                // 使用新的Observable
                // this.personnelServe.list = merge(
                //     this.personnelServe.list,
                //     of([d])
                // );

                this.personnelServe.list = merge(
                    this.personnelServe.list.pipe(tap()),
                    of([d])
                );
            },
            error: (err) => {
                console.log("err", err);
                this.saving = false;
            },
        });
    }
}
