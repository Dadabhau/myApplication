import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss'],
})
export class DebouncetimeComponent implements OnInit, AfterViewInit {
  @ViewChild('myInput') myInput: ElementRef<any>;
  @ViewChild('myInput2') myInput2: ElementRef<any>;

  reqData = null;
  reqData2 = null;

  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    // Ex. 01
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map((event) => event.target.value),
      debounceTime(1000)
    );
    searchTerm.subscribe((res) => {
      console.log(res);
      this.reqData = res;
      setTimeout(() => {
        this.reqData = null;
      }, 2000);
    });

    // Ex. 02
    const searchTerm2 = fromEvent<any>(
      this.myInput2.nativeElement,
      'keyup'
    ).pipe(
      map((event) => event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    );
    searchTerm2.subscribe((res) => {
      console.log(res);
      this.reqData2 = res;
      setTimeout(() => {
        this.reqData2 = null;
      }, 2000);
    });
  }
}
