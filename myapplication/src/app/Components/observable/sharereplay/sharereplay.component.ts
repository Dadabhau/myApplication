import { Component, OnInit } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { Products } from 'src/app/Interface/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sharereplay',
  templateUrl: './sharereplay.component.html',
  styleUrls: ['./sharereplay.component.scss'],
})
export class SharereplayComponent implements OnInit {
  products: any;
  allProducts: Observable<any>;
  constructor(private _product: ProductService) {}
  ngOnInit(): void {
    this._product.getProducts().subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }
}
