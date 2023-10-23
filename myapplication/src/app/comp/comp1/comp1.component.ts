import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component implements OnInit {
  userName: string;
  constructor(private _deisgnU: DesignUtilityService) {
    this._deisgnU.username.subscribe((res) => {
      this.userName = res;
    });
  }
  ngOnInit(): void {}
  onChange(uname: any) {
    console.log(uname.value);
    this._deisgnU.username.next(uname.value);
  }
}
