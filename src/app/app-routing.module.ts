import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { AboutComponent } from "./about/about.component";
import { OldTodoComponent } from "./old-todo/old-todo.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { PersonnelManagerComponent } from "./personnel-manager/personnel-manager.component";

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "personnel",
        component: PersonnelManagerComponent,
        title: "职工管理",
      },
      {
        path: "todo-list",
        component: TodoListComponent,
        title: "待办事项",
        children: [
          {
            path: "old",
            component: OldTodoComponent,
            title: "已办事项",
          },
        ],
      },
      { path: "about", component: AboutComponent, title: "关于" },
    ],
  },
  {
    path: "**",
    redirectTo: "login",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
