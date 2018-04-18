import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Article } from '../../domain/article';

import { ApiService } from './api.service';
import { User } from '../../domain/user';

@Injectable()
export class UserService {

  private api_url : string ;
  private headers : Headers ;

  constructor(private http: Http, private apiService: ApiService) {
      this.api_url = apiService.getUrl() + '/users';
      this.headers = apiService.getHeaders();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

  login (user: User):Promise <User>{
    const url = `${this.api_url}`;
    return this.http
      .post(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }
  logout (username:string):Promise <User>{
    let user={
      usrname: username
    }
    const url = `${this.api_url}`;
    return this.http.get(url, {headers: this.headers})
    .toPromise()
    .then(res => res.json() as User)
    .catch(this.handleError);
  }

  //查询所有User
  getUsers(): Promise<User[]> {
    const url = `${this.api_url}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as User[])
      .catch(this.handleError);
  }

  //按id查询User
  getUserById(id: number): Promise<User> {
    const url = `${this.api_url}/${id}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }

  //按username查询User
  getUserByUsername(username: string): Promise<User> {
    const url = `${this.api_url}/?username=${username}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => {
        let users = res.json() as User[];
        return (users.length > 0) ? users[0] : null;
      })
      .catch(this.handleError);
  }

  //创建一个User
  createUser(user: User): Promise<User> {
    const url = `${this.api_url}`;
    return this.http
      .post(url, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }

  //修改某个User
  updateUser(user: User): Promise<User> {
    const url = `${this.api_url}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  //删除某个User
  deleteUser(user: User): Promise<void> {
    const url = `${this.api_url}/${user.id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}
