import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss'],
})
export class ReplaySubjectComponent implements OnInit {
  user1List = ['Angular 1', 'Typescript'];
  user2List: string[] = [];
  user3List: string[] = [];

  // subscribeMode
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  // Subcriptions
  subcription2: Subscription;
  subcription3: Subscription;

  constructor(private _designU: DesignUtilityService) {}
  ngOnInit(): void {
    this._designU.videoEmit.subscribe((res) => {
      // console.log(res);
      this.user1List.push(res);
    });
  }
  onVideoAdd(video: any) {
    // console.log(video.value);
    this._designU.videoEmit.next(video.value);
  }
  //User 2 subcribe button
  user2Subcribe() {
    if (this.subscribeMode2) {
      this.subcription2.unsubscribe();
    } else {
      this.subcription2 = this._designU.videoEmit.subscribe((res) =>
        this.user2List.push(res)
      );
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }
  //User 3 subcribe button
  user3Subcribe() {
    if (this.subscribeMode3) {
      this.subcription3.unsubscribe();
    } else {
      this.subcription3 = this._designU.videoEmit.subscribe((res) =>
        this.user3List.push(res)
      );
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }
}
