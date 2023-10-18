import { NgModule } from "@angular/core";
import { BrowserModule, DomSanitizer } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ThyButtonModule } from "ngx-tethys/button";
import { ThyLayoutModule } from "ngx-tethys/layout";
import { ThyInputModule } from "ngx-tethys/input";
import { ThySwitchModule } from "ngx-tethys/switch";
// import { ThyDialogRef, ThyDialogSizes } from 'ngx-tethys';
import { ThyDialogModule } from "ngx-tethys/dialog";
import { ThyDividerModule } from "ngx-tethys/divider";
import { ThyFormModule } from "ngx-tethys/form";
import { ThyListModule } from "ngx-tethys/list";
import { ThyMenuModule } from "ngx-tethys/menu";
import { ThySelectModule } from "ngx-tethys/select";
import { ThyIconModule, ThyIconRegistry } from "ngx-tethys/icon";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { FormsModule } from "@angular/forms";
import { AboutComponent } from "./about/about.component";
import { OldTodoComponent } from "./old-todo/old-todo.component";
import { TodoListItemComponent } from "./todo-list-item/todo-list-item.component";
import { PersonnelManagerComponent } from "./personnel-manager/personnel-manager.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthServe } from "./server/AuthServe";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./server/ApiServe";
import { PersonnelListComponent } from "./personnel-list/personnel-list.component";
import { AddPersonnelComponent } from "./add-personnel/add-personnel.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PersonnelServe } from "./server/PersonnelServe";
import { ProjectManagerComponent } from "./project-manager/project-manager.component";
import { ProjectManagerBarComponent } from "./project-manager-bar/project-manager-bar.component";
import { ProjectManagerListComponent } from "./project-manager-list/project-manager-list.component";
import { DragAndDropComponent } from "./drag-and-drop/drag-and-drop.component";

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        AboutComponent,
        OldTodoComponent,
        TodoListItemComponent,
        PersonnelManagerComponent,
        LoginComponent,
        AdminComponent,
        PersonnelListComponent,
        AddPersonnelComponent,
        ProjectManagerComponent,
        ProjectManagerBarComponent,
        ProjectManagerListComponent,
        // DragAndDropComponent,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        ThyListModule,
        HttpClientModule,
        ThySelectModule,
        ThyButtonModule,
        ThyDividerModule,
        ThyMenuModule,
        ThySwitchModule,
        ThyIconModule,
        ThyLayoutModule,
        ThyInputModule,
        ThyDialogModule,
        ThyFormModule,
        BrowserAnimationsModule,
    ],
    providers: [ApiService, AuthServe, PersonnelServe],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(iconRegistry: ThyIconRegistry, sanitizer: DomSanitizer) {
        const iconSvgUrl = `assets/icons/defs/svg/sprite.defs.svg`;
        iconRegistry.addSvgIconSet(
            sanitizer.bypassSecurityTrustResourceUrl(iconSvgUrl)
        );
    }
}
