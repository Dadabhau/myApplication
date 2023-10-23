import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  dataArr = [
    { id: 1, name: 'Dadabhau', gender: 'Male' },
    { id: 2, name: 'Deepali', gender: 'Female' },
    { id: 3, name: 'Dilip', gender: 'Male' },
    { id: 4, name: 'Smita', gender: 'Female' },
    { id: 5, name: 'Devidas', gender: 'Male' },
    { id: 6, name: 'Neha', gender: 'Female' },
    { id: 7, name: 'Digambar', gender: 'Male' },
    { id: 8, name: 'Divya', gender: 'Male' },
    { id: 9, name: 'Deepdas', gender: 'Male' },
    { id: 10, name: 'Snehal', gender: 'Female' },
    { id: 11, name: 'Didya', gender: 'Female' },
    { id: 12, name: 'Shilpa', gender: 'Female' },
    { id: 13, name: 'Sweta', gender: 'Female' },
    { id: 14, name: 'Pranjali', gender: 'Female' },
  ];
  data: any;
  data2: any;
  data3: any;
  constructor() {}
  ngOnInit(): void {
    const source = from(this.dataArr);

    // Ex. 01
    source
      .pipe(
        filter((member) => member.name.length < 6),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });

    // Ex. 02 Filter by Gender
    source
      .pipe(
        filter((member) => member.gender == 'Female'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data2 = res;
      });

    // Ex. 03 Filter by nth Item
    source
      .pipe(
        filter((member) => member.id <= 6),
        toArray()
      )
      .subscribe((res) => {
        console.log('DATA 3', res);
        this.data3 = res;
      });
  }
}
