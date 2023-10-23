import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss'],
})
export class RetryComponent implements OnInit {
  person: any;
  fetching: boolean = false;
  status = 'No Data';
  constructor(private _productService: ProductService) {}
  ngOnInit(): void {}
  fetchDetails() {
    this.fetching = true;
    this.status = 'Fetching Data...';
    this._productService
      .getProducts()
      .pipe(
        // retry(4)
        retryWhen((err) =>
          err.pipe(
            delay(3000),
            scan((retryCount) => {
              if (retryCount >= 5) {
                throw err;
              } else {
                retryCount = retryCount + 1;
                console.log('retryCount' + retryCount);
                return retryCount;
              }
            }, 0)
          )
        )
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.person = res;
          this.status = 'Data Fetched';
          this.fetching = false;
        },
        (err) => {
          console.log(err);
          this.fetching = false;
          this.status = 'Problem Fetching Data';
        }
      );
  }
}
