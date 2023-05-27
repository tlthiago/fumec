import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../model/users.model';
import { Response } from '../model/response';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {

  }

  public getAll(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:3000/users');
  }

  public get(id: number) {
    return this.http.get<Users>('http://localhost:3000/users/'+id);
  }

  public add(user: Users) {
    const userJSON = JSON.stringify(user);
    return this.http.post('http://localhost:3000/users', userJSON, httpOptions);
  }

  public delete(id: number) {
    return this.http.delete('http://localhost:3000/users/'+id);
  }

  public update(user: Users) {
    const userJSON = JSON.stringify(user);
    return this.http.put('http://localhost:3000/users/'+user.id, userJSON, httpOptions);
  }

  getUser(id: number): Observable<Response<Users>> {
    return this.http.get<Response<Users>>('http://localhost:3000/users/'+id);
  }
}
