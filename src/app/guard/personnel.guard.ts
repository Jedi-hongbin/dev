/*
 * @Author: hongbin
 * @Date: 2023-10-16 10:20:40
 * @LastEditors: hongbin
 * @LastEditTime: 2023-10-18 10:47:07
 * @Description:
 */
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthServe } from "../server/AuthServe";

export const authGuard = () => {
    const router = inject(Router);
    const authService = inject(AuthServe);

    if (authService.isLogIn) {
        return true;
    }

    return router.navigate(["/login"], {
        state: { from: location.pathname },
    });
    // return router.createUrlTree([
    //     { path: "/login", data: { from: router.url } },
    // ]);
};
