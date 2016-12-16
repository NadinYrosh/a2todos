import { Injectable } from '@angular/core';
import { Init } from './init-todos';

@Injectable()
export class TodoService extends Init {

  constructor() {
    super();
    console.log('TodoService Initialized...');
    this.load();
  }

  getTodos(){
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  addTodo(newTodo){
    var todos = JSON.parse(localStorage.getItem('todos'));
  /// Add new todos ///
  todos.push(newTodo);
  ///Set new todos
  localStorage.setItem('todos', JSON.stringify(todos));
  }
}
