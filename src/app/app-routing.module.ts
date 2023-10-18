import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DragAndDropComponent } from "./drag-and-drop/drag-and-drop.component";
import { DndListComponent } from "./dnd-list/dnd-list.component";

export const routes: Routes = [
    {
        path: "dragAndDrop",
        component: DragAndDropComponent,
    },
    {
        path: "dndList",
        component: DndListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
