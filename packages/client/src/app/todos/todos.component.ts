import { Component, OnInit } from '@angular/core';

type Todo = {
  id: number;
  name: string;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [{
    id: 1,
    name: "fukke0906",
  },{
    id: 2,
    name: "iden",
  },{
    id: 3,
    name: "takecantik",
  }]

  // onUpdate(id: number, todo: Todo): void {
  //   this.todos = this.todos.map(v => {
  //     if (v.id === id) return todo;
  //     return v;
  //   })
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
