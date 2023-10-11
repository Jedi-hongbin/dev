import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { TToDoList } from './todo-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnChanges {
  title = 'TODO LIST';
  router = inject(Router);
  todoList: TToDoList = [{ content: 'dix BAN' }];

  public value = 'place';

  constructor() {}

  add() {}

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
