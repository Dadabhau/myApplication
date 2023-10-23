import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-of-and-from',
  templateUrl: './of-and-from.component.html',
  styleUrls: ['./of-and-from.component.scss'],
})
export class OfAndFromComponent implements OnInit {
  constructor(private _designU: DesignUtilityService) {}
  obsMsg: any;
  ngOnInit(): void {
    // OF Oprator
    // Exp 1.
    const Obs1 = of('Dadabhau', 'Vedshree', 'Arayan', 'Atharv', 'Parth');
    Obs1.subscribe((res) => {
      console.log(res);
      this._designU.print(res, 'elContainer');
    });

    // Exp 2. Object
    const Obs2 = of({
      a: 'Dadabhau',
      b: 'Vedshree',
      c: 'Arayan',
      d: 'Atharv',
      e: 'Parth',
    });
    Obs2.subscribe((res) => {
      console.log(res);
      this.obsMsg = res;
      this._designU.print(res, 'elContainer2');
    });

    // FROM Oprator
    // Exp 1. From - Array
    const Obs3 = from([
      'Dada',
      'Vedshree',
      'Arayan',
      'Atharv',
      'Parth',
      'Bhau',
    ]);
    Obs3.subscribe((res) => {
      console.log(res);
      this._designU.print(res, 'elContainer3');
    });

    // Exp 2. From - Promise
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise Resolved');
      }, 3000);
    });
    promise.then((res) => {
      console.log(res);
    });

    const Obs4 = from(promise);
    Obs4.subscribe((res) => {
      console.log('From Promise' + res);
      this._designU.print(res, 'elContainer4');
    });

    // Exp 3. From - String
    const Obs5 = from('Welcome to My Application');
    Obs5.subscribe((res) => {
      console.log(res);
      this._designU.print(res, 'elContainer5');
    });
  }
}
