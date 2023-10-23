import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit {
  obsMsg: any;
  videoSubscription: Subscription;
  constructor(private _designU: DesignUtilityService) {}
  ngOnInit(): void {
    // Interval
    // const broadCastVideos = interval(1000);

    // Timer (delay,interval)
    const broadCastVideos = timer(5000, 1000);

    this.videoSubscription = broadCastVideos.subscribe((res) => {
      console.log(res);
      this.obsMsg = 'Video ' + res;
      this._designU.print(this.obsMsg, 'elContainer');
      this._designU.print(this.obsMsg, 'elContainer1');
      this._designU.print(this.obsMsg, 'elContainer2');

      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    });
  }
}
