import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private _productService: ProductService) {}
  ngOnInit(): void {
    this.getproduct();
  }

  getproduct() {
    this._productService.getProducts().subscribe((res) => {
      console.log(res);
    });
  }
}
