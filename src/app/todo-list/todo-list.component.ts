import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { TToDoList } from './todo-list';
import { ToDoListService } from './todo-list-server';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [ToDoListService],
})
export class TodoListComponent implements OnInit, OnChanges {
  title = 'TODO LIST';
  router = inject(Router);
  todoList: TToDoList = [{ content: 'dix BAN' }];

  public value = 'place';

  constructor(private server: ToDoListService) {}

  add() {
    this.server.add({ content: this.value });
  }

  old() {
    const arr = ['todo-list'];
    if (this.router.url == '/todo-list') {
      arr.push('old');
    }
    this.router.navigate(arr);
  }

  clearInput() {
    this.value = '';
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    console.log(this);
  }
}
