/*
 * @Author: hongbin
 * @Date: 2023-10-18 13:56:06
 * @LastEditors: hongbin
 * @LastEditTime: 2023-10-18 15:43:14
 * @Description:
 */
import { Injectable } from "@angular/core";
import { ApiService } from "./ApiServe";

export interface IProject {
    _id: ObjectId;
    title: string;
    order: number;
    creator: ObjectId;
}

@Injectable()
export class ProjectServe {
    list: IProject[] = [];
    constructor(public apiService: ApiService) {
        const list = apiService
            .Graph<IProject[]>({
                collection: "projects",
                operation: {
                    name: "findAll",
                    params: [{}],
                },
            })
            .pipe()
            .subscribe((d) => {
                console.log(d);
                if (d) {
                    this.list = d;
                }
            });
    }
}
