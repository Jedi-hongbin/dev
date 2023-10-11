import { Injectable } from "@angular/core";
import { TToDoList } from "./todo-list";

/*
 * @Author: hongbin
 * @Date: 2023-10-11 17:56:08
 * @LastEditors: hongbin
 * @LastEditTime: 2023-10-11 18:07:44
 * @Description:
 */
@Injectable()
export class ToDoListService {
  todoList: TToDoList = [{ content: "dix BAN" }];

  add(item: TToDoList[number]) {
    this.todoList.push(item);
  }
}
