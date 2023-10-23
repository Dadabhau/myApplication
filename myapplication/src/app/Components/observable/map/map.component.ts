import { mergeNsAndName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  sub1: Subscription;
  sub2: Subscription;
  msg1: any;
  msg2: any;

  constructor(private _designU: DesignUtilityService) {}
  ngOnInit(): void {
    const broadCastVideos = interval(1000);
    // Ex. 01
    this.sub1 = broadCastVideos
      .pipe(map((result) => 'Video ' + result))
      .subscribe((res) => {
        console.log(res);
        this.msg1 = res;
      });
    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);

    // Ex. 02
    this.sub2 = broadCastVideos
      .pipe(map((data) => data * 3))
      .subscribe((res) => {
        console.log(res);
        this.msg2 = res;
      });
    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);

    // Ex. 03
    const memebers = from([
      { id: 1, name: 'Dadabhau' },
      { id: 2, name: 'Vedshree' },
      { id: 3, name: 'Parth' },
      { id: 4, name: 'Atharv' },
      { id: 5, name: 'Arayan' },
      { id: 6, name: 'Vinayak' },
      { id: 7, name: 'Swapnil' },
      { id: 8, name: 'Rakesh' },
      { id: 9, name: 'Nilesh' },
      { id: 10, name: 'Neha' },
    ]);
    memebers.pipe(map((data) => data.name)).subscribe((res: any) => {
      console.log(res);
      this._designU.print(res, 'elContainer');
    });
  }
}
