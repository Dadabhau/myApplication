import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss'],
})
export class MergemapComponent implements OnInit {
  constructor(private _deisgnU: DesignUtilityService) {}
  ngOnInit(): void {
    const sources = from(['Tech', 'Comedy', 'News']);

    // Ex - 01 | Map
    sources.pipe(map((res) => this.getData(res))).subscribe((res) => {
      this._deisgnU.print(res, 'elContainer');
    });

    // Ex - 02 | Map + MergeAll
    sources
      .pipe(
        map((res) => this.getData(res)),
        mergeAll()
      )
      .subscribe((res) => {
        this._deisgnU.print(res, 'elContainer1');
      });

    // Ex - 03 | MergeMap
    sources.pipe(mergeMap((res) => this.getData(res))).subscribe((res) => {
      this._deisgnU.print(res, 'elContainer2');
    });
  }

  getData(data: any) {
    return of(data + ' Video Uploaded');
  }
}
