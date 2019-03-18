import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(){}
  
  showTodayDate() {
    let date = new Date();
    return date;
  }
}
