import { Component, Input, OnInit } from '@angular/core';
import { TToDoList } from '../todo-list/todo-list';
import { ToDoListService } from '../todo-list/todo-list-server';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  // 不用了 使用下方的 server
  @Input() data: TToDoList = [];

  constructor(public todoList: ToDoListService) {
    console.log(todoList);
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  switchChange() {
    console.log(this.todoList.todoList);
  }
}
