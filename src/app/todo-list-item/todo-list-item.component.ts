import { Component, Input, OnInit } from '@angular/core';
import { TToDoList } from '../todo-list/todo-list';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  @Input() data: TToDoList = [];

  ngOnInit(): void {
    console.log(this.data);
  }

  switchChange() {
    console.log(this.data);
  }
}
