import { Component, OnInit, OnDestroy } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit, OnDestroy {
  userName: string = 'Dadabhau';
  constructor(private _designU: DesignUtilityService) {
    this._designU.username.subscribe((res) => {
      this.userName = res;
    });
  }
  ngOnInit(): void {
    this._designU.exclusive.next(true);
  }
  ngOnDestroy(): void {
    this._designU.exclusive.next(false);
  }
}
