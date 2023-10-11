import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AboutComponent } from './about/about.component';
import { OldTodoComponent } from './old-todo/old-todo.component';

const routes: Routes = [
  {
    path: 'todo-list',
    component: TodoListComponent,
    children: [
      {
        path: 'old',
        component: OldTodoComponent,
      },
    ],
  },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
