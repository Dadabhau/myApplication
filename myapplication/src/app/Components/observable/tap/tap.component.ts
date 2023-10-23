import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  myColor: string = '';
  constructor(private _designU: DesignUtilityService) {}
  ngOnInit(): void {
    const source = interval(1000);

    // Ex. 01
    const Arr = ['Dadabhau', 'Vedshree', 'Arayan', 'Atharv', 'Parth'];

    let obsSubscription: Subscription;

    obsSubscription = source
      .pipe(
        tap((res) => {
          if (res == 5) {
            obsSubscription.unsubscribe();
          }
        }),
        map((res) => Arr[res])
      )
      .subscribe((res) => {
        console.log(res);
        this._designU.print(res, 'elContainer');
      });

    // Ex. 02
    const Color = ['Red', 'green', 'yellow', 'purple', 'blue', 'orange'];

    let obsSubscription2: Subscription;

    obsSubscription2 = source
      .pipe(
        tap((res) => {
          this.myColor = Color[res];
          if (res == 6) {
            obsSubscription2.unsubscribe();
          }
        }),
        map((res) => Color[res])
      )
      .subscribe((res) => {
        console.log(res);
        this._designU.print(res, 'elContainer1');
      });
  }
}
