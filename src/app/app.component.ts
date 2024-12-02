import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTodoComponent } from "./components/add-todo/add-todo.component";
import { TodoListComponent } from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddTodoComponent, TodoListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'todo-app';
}
