import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor() { }
  setUser(name:string) {
    console.log(name);
  }
}
