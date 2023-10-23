import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss'],
})
export class AsyncSubjectComponent implements OnInit {
  asyncVideoEmit: any;
  constructor(private _designU: DesignUtilityService) {}
  ngOnInit(): void {
    this._designU.asyncVideoEmit.subscribe((res) => {
      this.asyncVideoEmit = res;
    });
  }
  onVideoAdd(video: any) {
    console.log(video.value);
    this._designU.asyncVideoEmit.next(video.value);
  }

  completeSucess() {
    this._designU.asyncVideoEmit.complete();
  }
}
