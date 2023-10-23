import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss'],
})
export class PluckComponent implements OnInit {
  constructor() {}
  data: any;
  data2: any;

  users = [
    {
      name: 'Dadabhau',
      skills: 'Angular',
      job: {
        title: 'Angular Developer',
        exp: '10 Years',
      },
    },
    {
      name: 'Dilip',
      skills: 'Html,Css',
      job: {
        title: 'Html Developer',
        exp: '2 Years',
      },
    },
    {
      name: 'Deepak',
      skills: 'Pythone',
      job: {
        title: 'Pythone Developer',
        exp: '8 Years',
      },
    },
    {
      name: 'Dinesh',
      skills: 'PHP',
      job: {
        title: 'PHP Developer',
        exp: '9 Years',
      },
    },
    {
      name: 'Danesh',
      skills: 'Photoshop',
      job: {
        title: 'Web Designer',
        exp: '5 Years',
      },
    },
  ];
  ngOnInit(): void {
    // Ex. 01
    from(this.users)
      .pipe(
        // map((data) => data.name),
        pluck('name'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });

    // Ex. 02
    from(this.users)
      .pipe(
        // map((data) => data.name),
        pluck('job', 'title'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data2 = res;
      });
  }
}
