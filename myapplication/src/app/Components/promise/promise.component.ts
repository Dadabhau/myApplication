import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements OnInit {
  info: any;
  dell = {
    brand: 'Dell',
    hardDisk: '2TB',
    color: 'Black',
  };
  hp = {
    brand: 'Hp',
    hardDisk: '1 TB',
    color: 'Silver',
  };
  notAvial = {
    brand: 'Not available',
    status: 'Failed',
  };
  constructor() {}
  dellAvailable() {
    return true;
  }
  hpAvialable() {
    return false;
  }
  ngOnInit(): void {
    // Async Call
    this.getData().then((data) => console.log(data));

    //////////// Promise ///////////////
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('Promise is resolved');
      // reject('Promise is reject');
      if (this.dellAvailable()) {
        setTimeout(() => {
          // resolve('Dell is Purchased');
          resolve(this.dell);
        }, 3000);
      } else if (this.hpAvialable()) {
        setTimeout(() => {
          // resolve('HP is puschased');
          resolve(this.hp);
        }, 3000);
      } else {
        // reject('Loptop is not available on store');
        reject(this.notAvial);
      }
    });
    buyLaptop
      .then((res) => {
        console.log('Success - ', res);
        this.info = res;
      })
      .catch((res) => {
        console.log('Reject - ', res);
        this.info = res;
      });
  }
  myFunction() {
    console.log('myFunction Called');
  }
  ///////// Async / Await //////////
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data Received');
    }, 3000);
  });

  async getData() {
    let response = await this.promise;
    console.log(response);
  }
}
