import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly apiUrl = 'http://localhost:3000/v1/todos'; // API URL
  // to hold the current state of the todo list
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  public todos$ = this.todosSubject.asObservable(); // Expose as Observable for subscribers

  // to hold the most recently added todo
  private addedTodoSubject = new Subject<Todo>();
  public addedTodo$ = this.addedTodoSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getTodos(true); // Initial load
   }

  getTodos(latest: boolean = false): Observable<Todo[]> {
    let params = new HttpParams();
    if (latest) params = params.set('latest', latest.toString());

    this.http
    .get<Todo[]>(this.apiUrl, { params })
    .subscribe((todos) => {
      this.todosSubject.next(todos)
    });

    return this.todos$;
  }

  addTodo(title: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http
    .post<Todo>(this.apiUrl, { title, completed: false }, { headers })
    .subscribe((addedTodo) => {
      // Update the BehaviorSubject with the new list, add the new todo at the top
      const currentTodos = this.todosSubject.getValue();
      this.todosSubject.next([addedTodo, ...currentTodos]); // add the new todo at the beginning
      this.addedTodoSubject.next(addedTodo); // emit the new todo
    });
  }

  toggleTodoCompletion(id: string, completed: boolean): Observable<Todo> {
    return this.http.patch<Todo>(`${this.apiUrl}/${id}`, { completed });
  }

  deleteTodo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
