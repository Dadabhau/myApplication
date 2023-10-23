import { Component, OnInit } from '@angular/core';
import {
  from,
  fromEvent,
  interval,
  map,
  take,
  takeLast,
  takeUntil,
  timer,
} from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
  constructor(private _designU: DesignUtilityService) {}
  randomNames = ['Dadabhau', 'Vedshree', 'Arayan', 'Atharv', 'Parth'];
  ngOnInit(): void {
    const nameSource = from(this.randomNames);
    // Ex. 01 | Take

    nameSource.pipe(take(4)).subscribe((res) => {
      console.log(res);
      this._designU.print(res, 'elContainer');
    });

    // Ex. 02 | TakeLast

    nameSource.pipe(takeLast(3)).subscribe((res) => {
      console.log(res);
      this._designU.print(res, 'elContainer1');
    });

    // Ex. 03 | TakeUntil
    const source = interval(1000);
    let condition1 = timer(5000);
    let condition2 = fromEvent(document, 'click');
    source
      .pipe(
        map((res) => 'Number ' + res),
        takeUntil(condition2)
      )
      .subscribe((res) => {
        console.log(res);
        this._designU.print(res, 'elContainer2');
      });
  }
}
