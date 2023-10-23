import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-toarray',
  templateUrl: './toarray.component.html',
  styleUrls: ['./toarray.component.scss'],
})
export class ToarrayComponent implements OnInit {
  sourecSub: Subscription;
  users = [
    { title: 'Dadabhau', address: 'Moshi, Pune' },
    { title: 'Dilip', address: 'Narayangoan, Pune' },
    { title: 'Deepak', address: 'Kotul, Ahmadnager' },
    { title: 'Dinesh', address: 'Vashi, Mumbai' },
    { title: 'Divyananad', address: 'Surat, Gujrat' },
  ];
  constructor() {}
  ngOnInit(): void {
    // Ex. 01
    const source = interval(1000);
    this.sourecSub = source.pipe(take(5), toArray()).subscribe((res) => {
      console.log(res);
      // if (res >= 8) {
      //   this.sourecSub.unsubscribe();
      // }
    });

    // Ex. 02
    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });

    // Ex. 03
    const source3 = of('Dadabhau', 'Vedshree', 'Arayan', 'Atharv', 'Parth');
    source3.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });
  }
}
