import { Component, OnInit } from '@angular/core';
import {
  concatMap,
  delay,
  from,
  map,
  mergeMap,
  of,
  switchAll,
  switchMap,
} from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss'],
})
export class SwitchmapComponent implements OnInit {
  constructor(private _deisgnU: DesignUtilityService) {}
  ngOnInit(): void {
    const sources = from(['Tech', 'Comedy', 'News']);

    // Ex - 01 | Map
    sources.pipe(map((data) => this.getData(data))).subscribe((res) => {
      console.log(res);
      this._deisgnU.print(res, 'elContainer');
    });
    // Ex - 02 | Map + SwitchAll
    sources
      .pipe(
        map((data) => this.getData(data)),
        switchAll()
      )
      .subscribe((res) => {
        console.log(res);
        this._deisgnU.print(res, 'elContainer1');
      });
    // Ex - 03 | SwitchMap
    sources.pipe(switchMap((data) => this.getData(data))).subscribe((res) => {
      console.log(res);
      this._deisgnU.print(res, 'elContainer2');
    });
    // Ex - 04 | ConcatMap
    sources.pipe(mergeMap((data) => this.getData(data))).subscribe((res) => {
      console.log(res);
      this._deisgnU.print(res, 'elContainer3');
    });
    // Ex - 05 | MergeMap
    sources.pipe(concatMap((data) => this.getData(data))).subscribe((res) => {
      console.log(res);
      this._deisgnU.print(res, 'elContainer4');
    });
    // Ex - 06 | SwitchMap
    sources.pipe(switchMap((data) => this.getData(data))).subscribe((res) => {
      console.log(res);
      this._deisgnU.print(res, 'elContainer5');
    });
  }
  getData(data: any) {
    return of(data + ' Video Uploaded').pipe(delay(2000));
  }
}
