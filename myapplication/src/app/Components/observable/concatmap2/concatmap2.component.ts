import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-concatmap2',
  templateUrl: './concatmap2.component.html',
  styleUrls: ['./concatmap2.component.scss'],
})
export class Concatmap2Component implements OnInit {
  notifyData = [
    {
      name: 'Facebook',
      icon: 'assets/hLRJ1GG_y0J.ico',
      time: '4 Second Ago',
      img: 'https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg',
      strong: 'Alax Johnson',
      comment: 'Commented on your Post: Awesome Post!!!! Thanks...',
    },
    {
      name: 'Facebook',
      icon: 'assets/hLRJ1GG_y0J.ico',
      time: '2 Second Ago',
      img: 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg',
      strong: 'Dadabhau Thete',
      comment: 'Commented on your Post: Awesome Image!!!! Thanks...',
    },
    {
      name: 'Facebook',
      icon: 'assets/hLRJ1GG_y0J.ico',
      time: '1 Second Ago',
      img: 'https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_960_720.jpg',
      strong: 'Vedshree Thete',
      comment: 'Commented on your Post: Good...',
    },
    {
      name: 'Facebook',
      icon: 'assets/hLRJ1GG_y0J.ico',
      time: 'Just Now',
      img: 'https://cdn.pixabay.com/photo/2016/04/18/22/05/seashells-1337565_960_720.jpg',
      strong: 'Neha Thete',
      comment: 'Commented on your Post: Awesome Post!!!! Thanks...',
    },
  ];
  constructor(private _deisgnU: DesignUtilityService) {}

  ngOnInit(): void {
    from(this.notifyData)
      .pipe(
        //mergeMap((res) => this.getHtml(res))
        concatMap((res) => this.getHtml(res))
      )
      .subscribe((res) => {
        console.log(res);
        this._deisgnU.print2(res, 'elContainer');
      });
  }
  getHtml(data: any) {
    return of(`<div class="header">
              <div class="app">
                <img
                  src="${data.icon}"
                  width="20"
                />
               ${data.name}
              </div>
              <div class="time">${data.time}</div>
            </div>
            <div class="body">
              <img
                src="${data.img}"
                width="80"
                class="item-img"
              />
              <strong>${data.strong}</strong>
              <p>${data.comment}</p>
            </div>`).pipe(delay(2000));
  }
}
