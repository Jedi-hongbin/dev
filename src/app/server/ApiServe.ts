/*
 * @Author: hongbin
 * @Date: 2023-10-13 09:43:22
 * @LastEditors: hongbin
 * @LastEditTime: 2023-10-18 14:15:47
 * @Description:
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Auth } from "./AuthServe";
import { environment } from "../../environments/environment";

interface IRole {
    _id: string;
    desc: string;
    name: string;
}

export interface IRegisterPersonnel {
    name: string;
    password: string;
    roleIds: IRole["_id"][];
}

export interface IPersonnel {
    _id: string;
    name: string;
    roleIds: IRole["_id"][];
}

class Personnel {
    constructor(private http: HttpClient) {}

    login(auth: Auth) {
        const url = environment.baseUrl + "/user/login";
        return this.http.post<Auth & { _id: string }>(url, auth);
    }

    insert(personnel: IRegisterPersonnel) {
        const url = environment.baseUrl + "/user/insert";
        return this.http.post<IPersonnel>(url, personnel);
    }

    list() {
        const url = environment.baseUrl + "/user/list";
        return this.http.get<IPersonnel[]>(url);
    }

    delete(ids: string[]) {
        const url = environment.baseUrl + "/user/delete";
        return this.http.post<{ acknowledged: boolean; deletedCount: number }>(
            url,
            { ids }
        );
    }
}

interface IGraph {
    collection: string;
    operation: {
        name: string;
        params: Array<Record<string, any>>;
    };
}

@Injectable()
export class ApiService {
    Personnel: Personnel;
    constructor(private http: HttpClient) {
        this.Personnel = new Personnel(http);
    }

    getRoles() {
        const url = environment.baseUrl + "/role";
        return this.http.get<IRole[]>(url);
    }

    Graph<T>(graph: IGraph) {
        const url = environment.baseUrl + "/graph";
        return this.http.post<T>(url, graph);
    }
}
