import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss'],
})
export class CustomObservableComponent implements OnInit, OnDestroy {
  techStatus: any;
  techStatus2: any;
  names: any;
  nameStatus: any;
  sub2: Subscription;
  constructor(private _designU: DesignUtilityService) {}
  ngOnInit(): void {
    // Ex. 01 (Manual)
    const cusObs1 = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      setTimeout(() => {
        observer.next('TypeScript');
      }, 2000);
      setTimeout(() => {
        observer.next('JavaScript');
        // observer.complete();
      }, 3000);
      setTimeout(() => {
        observer.next('Html and Css');
        // observer.error('Limit Exceed');
      }, 4000);
      setTimeout(() => {
        observer.next('Jquery');
        observer.complete();
      }, 5000);
    });
    cusObs1.subscribe(
      (res: any) => {
        console.log(res);
        this._designU.print(res, 'elContainer');
      },
      (err: any) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      }
    );

    // Ex. 02 (Custom Interval)
    const Arr2 = ['Angular', 'JavaScript', 'Html', 'Css', 'Typesript'];
    const Arr3 = ['Dadabhau', 'Vedshree', 'Arayan', 'Atharv', 'Parth'];

    const cusObs2 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        // observer.next('Data Emit ' + count);
        observer.next(Arr2[count]);
        count++;
        if (count > 3) {
          observer.error();
        }
        if (count > 4) {
          observer.complete();
        }
      }, 1000);
    });
    this.sub2 = cusObs2.subscribe(
      (res: any) => {
        console.log(res);
        this._designU.print(res, 'elContainer2');
      },
      (err: any) => {
        this.techStatus2 = 'error';
      },
      () => {
        this.techStatus2 = 'completed';
      }
    );

    // Ex. 03 (Random Name)
    const cusObs3 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr3[count]);
        count++;
        if (count > 3) {
          observer.error();
        }
        if (count >= 4) {
          observer.complete();
        }
      }, 1000);
    });
    cusObs3.subscribe(
      (res: any) => {
        console.log(res);
        this.names = res;
      },
      (err: any) => {
        this.nameStatus = 'error';
      },
      () => {
        this.nameStatus = 'completed';
      }
    );
  }
  ngOnDestroy(): void {
    this.sub2.unsubscribe();
  }
}
