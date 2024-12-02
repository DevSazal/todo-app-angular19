import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo, TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  highlightedTodoId: string | null = null;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.todos$.subscribe((todos) => {
      this.todos = todos;
    });

    // Subscribe to the newly added todo stream
    this.highlightedTodo();
  }

  toggleCompletion(todo: Todo): void {
    this.todoService
      .toggleTodoCompletion(todo._id, !todo.completed)
      .subscribe(() => {
        todo.completed = !todo.completed;
      });
  }

  deleteTodo(todoId: string): void {
    this.todoService.deleteTodo(todoId).subscribe(() => {
      this.todos = this.todos.filter((t) => t._id !== todoId);
    });
  }

  highlightedTodo(): void {
    this.todoService.addedTodo$.subscribe((addedTodo) => {
      this.highlightedTodoId = addedTodo._id;
      setTimeout(() => (this.highlightedTodoId = null), 5000);
    });
  }
}
