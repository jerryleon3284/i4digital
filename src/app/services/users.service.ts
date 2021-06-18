import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Users } from '../models/users/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  getUsers(){
    return this.http.get<Users[]>(`${environment.url}/users`)
  }
}
