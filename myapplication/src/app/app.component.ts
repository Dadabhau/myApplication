import { AfterViewInit, Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor() {}
  title = 'myapplication';

  postArray = [
    { title: 'Dadabhau', address: 'Moshi, Pune' },
    { title: 'Dilip', address: 'Narayangoan, Pune' },
    { title: 'Deepak', address: 'Kotul, Ahmadnager' },
    { title: 'Dinesh', address: 'Vashi, Mumbai' },
    { title: 'Divyananad', address: 'Surat, Gujrat' },
  ];
  // Convert Array into Observable
  // postArrayObservable = from(this.postArray);

  // promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('Resolved the promise. Sending data');
  //   }, 3000);
  // });
  // // Convert Promise into Observable
  // promiseObservable = from(this.promise);

  ngOnInit(): void {
    // this.postArrayObservable.subscribe({
    //   next: (res) => console.log(res),
    //   error: (err) => console.log(err),
    //   complete: () => {
    //     console.log('Completed done!');
    //   },
    // });
    // this.postArrayObservable.subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (err) => {
    //     console.log(err);
    //   },
    //   () => {
    //     console.log('Completed done!');
    //   }
    // );
    // this.promiseObservable.subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (err) => {
    //     console.log(err);
    //   },
    //   () => {
    //     console.log('Completed Promise done!');
    //   }
    // );
  }
  ngAfterViewInit(): void {
    // fromEvent(document.getElementById('clickHere')!, 'click').subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (err) => {
    //     console.log(err);
    //   },
    //   () => {
    //     console.log('Completed By click done!');
    //   }
    // );
  }
}
