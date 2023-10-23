import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss'],
})
export class ConcatComponent implements OnInit {
  constructor(private _designU: DesignUtilityService) {}
  ngOnInit(): void {
    const sourceTech = interval(1000).pipe(
      map((video) => 'Tech Video # ' + (video + 1)),
      take(5)
    );
    const sourceComedy = interval(1000).pipe(
      map((video) => 'Comedy Video # ' + (video + 1)),
      take(3)
    );
    const sourceNews = interval(1000).pipe(
      map((video) => 'News Video # ' + (video + 1)),
      take(4)
    );

    const finalObs = concat(sourceTech, sourceComedy, sourceNews);
    finalObs.subscribe((res) => {
      console.log(res);
      this._designU.print(res, 'elContainer');
    });
  }
}
