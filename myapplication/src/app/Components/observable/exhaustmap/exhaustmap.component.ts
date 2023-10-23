import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-exhaustmap',
  templateUrl: './exhaustmap.component.html',
  styleUrls: ['./exhaustmap.component.scss'],
})
export class ExhaustmapComponent implements OnInit {
  num = 0;
  constructor(
    private _deisgnU: DesignUtilityService,
    private _products: ProductService
  ) {}
  ngOnInit(): void {}
  btnClick() {
    this.num++;
  }
  onSave() {}
}
