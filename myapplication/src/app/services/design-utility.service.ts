import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  exclusive = new Subject<boolean>();
  username = new BehaviorSubject<string>('Dadabhau');
  videoEmit = new ReplaySubject<string>(5, 5000);
  asyncVideoEmit = new AsyncSubject();
  constructor() {}

  print(val: any, containerId: any) {
    let el = document.createElement('li');
    el.innerText = val;
    el.className = 'list-group-item';
    document.getElementById(containerId)?.appendChild(el);
  }
  print2(val: any, containerId: any) {
    let el = document.createElement('div');
    el.setAttribute('class', 'item');
    el.innerHTML = val;
    document.getElementById(containerId)?.prepend(el);
  }
}
