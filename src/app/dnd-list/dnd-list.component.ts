import { Component } from "@angular/core";
import { NgFor } from "@angular/common";
import {
    CdkDragDrop,
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
    moveItemInArray,
    transferArrayItem,
} from "@angular/cdk/drag-drop";

@Component({
    selector: "app-dnd-list",
    templateUrl: "./dnd-list.component.html",
    styleUrls: ["./dnd-list.component.scss"],
    standalone: true,
    imports: [CdkDropListGroup, CdkDropList, NgFor, CdkDrag],
})
export class DndListComponent {
    todo = ["Get to work", "Pick up groceries", "Go home", "Fall asleep"];

    done = [
        "Get up",
        "Brush teeth",
        "Take a shower",
        "Check e-mail",
        "Walk dog",
    ];

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        }
    }
}
