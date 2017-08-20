import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  constructor(private http: Http) { }

  getTodoList() {
    return this.http.get('http://localhost:4000/api')
        .map(response => response.json());
  }
}
