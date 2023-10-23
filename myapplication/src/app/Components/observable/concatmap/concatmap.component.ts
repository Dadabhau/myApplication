import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss'],
})
export class ConcatmapComponent implements OnInit {
  constructor(private _designU: DesignUtilityService) {}
  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01 | Map
    source.pipe(map((res) => this.getData(res))).subscribe((res) => {
      this._designU.print(res, 'elContainer');
    });

    // Ex - 02 | Map + ConcatAll
    source
      .pipe(
        map((res) => this.getData(res)),
        concatAll()
      )
      .subscribe((res) => {
        this._designU.print(res, 'elContainer1');
      });

    // Ex - 03 | ConcatMap
    source.pipe(concatMap((res) => this.getData(res))).subscribe((res) => {
      this._designU.print(res, 'elContainer2');
    });
  }

  getData(data: any) {
    return of(data + ' Video Uploaded').pipe(delay(2000));
  }
}
