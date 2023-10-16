/*
 * @Author: hongbin
 * @Date: 2023-10-13 17:02:11
 * @LastEditors: hongbin
 * @LastEditTime: 2023-10-16 09:46:11
 * @Description:
 */
import { Injectable } from "@angular/core";
import { ApiService, IPersonnel } from "./ApiServe";
import { tap } from "rxjs";

@Injectable()
export class PersonnelServe {
    list = this.apiService.Personnel.list();

    constructor(public apiService: ApiService) {
        // apiService.Personnel.list().subscribe({
        //     next: (list) => {
        //         this.list = list;
        //     },
        // });
        // this.list
        //     .pipe(
        //         tap((list) => {
        //             console.log("list", list);
        //             //@ts-ignore
        //             list.push({ name: "aaa" });
        //         })
        //     )
        //     .subscribe((w) => {
        //         console.log("ww", w);
        //     });
    }

    delete(ids: string[]) {
        return this.apiService.Personnel.delete(ids);
    }
}
