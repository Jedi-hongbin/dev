import { Component } from "@angular/core";
import {
    CdkDragDrop,
    CdkDrag,
    CdkDropList,
    moveItemInArray,
} from "@angular/cdk/drag-drop";
import { NgFor } from "@angular/common";

@Component({
    selector: "app-drag-and-drop",
    templateUrl: "./drag-and-drop.component.html",
    styleUrls: ["./drag-and-drop.component.scss"],
    standalone: true,
    imports: [CdkDropList, NgFor, CdkDrag],
})
export class DragAndDropComponent {
    heroList = ["可莉", "琴团长", "钟离", "那维莱特", "万叶"];

    drop(event: CdkDragDrop<string[]> | any) {
        moveItemInArray(this.heroList, event.previousIndex, event.currentIndex);
    }
}
