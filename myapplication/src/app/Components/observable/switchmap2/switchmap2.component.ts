import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  concatMap,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs';
import { Products } from 'src/app/Interface/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-switchmap2',
  templateUrl: './switchmap2.component.html',
  styleUrls: ['./switchmap2.component.scss'],
})
export class Switchmap2Component implements OnInit, AfterViewInit {
  @ViewChild('searchForm', { static: true }) searchForm: NgForm;
  searchTerm: string;
  searchResult: Products;
  constructor(private _product: ProductService) {}
  ngOnInit(): void {
    // this._product.getProductsSearch('jewelery').subscribe((res) => {
    //   console.log(res);
    // });
  }
  ngAfterViewInit(): void {
    const formValue = this.searchForm.valueChanges;
    console.log(formValue);
    formValue
      ?.pipe(
        map((data) => data.searchTerm),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((data) => this._product.getProductsSearch(data))
      )
      .subscribe((res: any) => {
        console.log(res);
        this.searchResult = res;
      });
  }
}
